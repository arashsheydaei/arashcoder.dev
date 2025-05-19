import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import Auth from './components/Auth'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  const { i18n } = useTranslation()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  useEffect(() => {
    // Check system dark mode preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fa' : 'en'
    i18n.changeLanguage(newLang)
    document.documentElement.dir = newLang === 'fa' ? 'rtl' : 'ltr'
  }

  const handleAuth = (status) => {
    setIsAuthenticated(status)
    setIsAuthModalOpen(false)
  }

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''} ${i18n.language === 'fa' ? 'font-vazir' : 'font-sans'}`}>
      <ParticleBackground />
      <Header 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
        toggleLanguage={toggleLanguage}
        isAuthenticated={isAuthenticated}
        onAuthClick={() => setIsAuthModalOpen(true)}
      />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      {isAuthModalOpen && (
        <Auth onClose={() => setIsAuthModalOpen(false)} onAuth={handleAuth} />
      )}
    </div>
  )
}

export default App
