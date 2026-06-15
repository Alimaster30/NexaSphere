import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

export default function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPage(window.location.pathname)
    }

    window.addEventListener('popstate', handleNavigation)
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  if (currentPage === '/privacy') {
    return <Privacy />
  }

  if (currentPage === '/terms') {
    return <Terms />
  }

  return (
    <div className="min-h-screen bg-bg text-text-dim">
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
