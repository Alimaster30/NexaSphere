import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import * as THREE from 'three'

function NetworkSphere() {
  const groupRef = useRef<THREE.Group>(null)

  const points = useMemo(() => {
    const pts: THREE.Vector3[] = []
    const count = 90
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      const r = 2.2
      pts.push(
        new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        )
      )
    }
    return pts
  }, [])

  const lines = useMemo(() => {
    const linePositions: number[] = []
    const maxDist = 1.0
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < maxDist) {
          linePositions.push(points[i].x, points[i].y, points[i].z)
          linePositions.push(points[j].x, points[j].y, points[j].z)
        }
      }
    }
    return new Float32Array(linePositions)
  }, [points])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.06
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.06
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh>
          <icosahedronGeometry args={[1.6, 1]} />
          <MeshDistortMaterial
            color="#cdff50"
            transparent
            opacity={0.06}
            distort={0.2}
            speed={1}
            wireframe
          />
        </mesh>
      </Float>

      {points.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.02, 6, 6]} />
          <meshBasicMaterial color="#cdff50" transparent opacity={0.35} />
        </mesh>
      ))}

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#cdff50" transparent opacity={0.05} />
      </lineSegments>
    </group>
  )
}

const CUBE_DATA = [
  { pos: [2.8, 1.5, -0.3], scale: 0.2, speed: 0.8, color: '#cdff50' },
  { pos: [-2.5, -1.7, 0.8], scale: 0.14, speed: 0.6, color: '#a3a3a3' },
  { pos: [0.3, 2.4, -1.4], scale: 0.26, speed: 1.2, color: '#cdff50' },
  { pos: [-1.3, -0.2, 1.7], scale: 0.16, speed: 1.0, color: '#a3a3a3' },
  { pos: [2.0, -1.5, -0.8], scale: 0.22, speed: 0.5, color: '#cdff50' },
  { pos: [-2.9, 1.1, 0.5], scale: 0.12, speed: 1.4, color: '#a3a3a3' },
]

function FloatingCubes() {
  const cubes = useMemo(() => CUBE_DATA, [])

  return (
    <>
      {cubes.map((cube, i) => (
        <Float key={i} speed={cube.speed} rotationIntensity={1.2} floatIntensity={0.8}>
          <mesh position={cube.pos as [number, number, number]}>
            <boxGeometry args={[cube.scale, cube.scale, cube.scale]} />
            <meshBasicMaterial color={cube.color} transparent opacity={0.15} wireframe />
          </mesh>
        </Float>
      ))}
    </>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#cdff50" />
      <Stars radius={50} depth={50} count={800} factor={2} saturation={0} fade speed={0.2} />
      <NetworkSphere />
      <FloatingCubes />
    </>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
