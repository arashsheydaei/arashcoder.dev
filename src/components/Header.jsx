import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

const Header = ({ isDarkMode, toggleDarkMode, toggleLanguage, isAuthenticated, onAuthClick }) => {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: t('nav.home', 'Home') },
    { id: 'about', label: t('nav.about', 'About') },
    { id: 'portfolio', label: t('nav.projects', 'Projects') },
    { id: 'contact', label: t('nav.contact', 'Contact') }
  ]

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  const socialLinks = [
    { href: 'https://github.com/arashsheydaei', icon: 'github', label: 'GitHub' },
    { href: 'https://linkedin.com/in/arashsheydaei', icon: 'linkedin', label: 'LinkedIn' },
    { href: 'https://twitter.com/arashsheydaei', icon: 'twitter', label: 'Twitter' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-2xl font-bold text-primary cursor-pointer hover:text-primary-dark transition-colors duration-200"
          >
            Arash Sheydaei
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8 rtl:space-x-reverse">
              {navItems.map(item => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 cursor-pointer"
                    activeClass="text-primary dark:text-primary font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center">
            {/* Social Links */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                  aria-label={link.label}
                >
                  <i className={`fab fa-${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="mx-4 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
            >
              {i18n.language === 'en' ? 'فا' : 'En'}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="mx-4 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
            >
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
            </button>

            {/* Auth Button - Temporarily Hidden */}
            {/* <button
              onClick={onAuthClick}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
            >
              {isAuthenticated ? t('auth.logout', 'Logout') : t('auth.login', 'Login')}
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-2 py-2">
            {navItems.map(item => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-colors duration-200 cursor-pointer"
                onClick={handleNavClick}
                activeClass="text-primary dark:text-primary font-medium bg-gray-100 dark:bg-gray-800"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleLanguage}
                className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              >
                {i18n.language === 'en' ? 'فا' : 'En'}
              </button>
              <button
                onClick={toggleDarkMode}
                className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              >
                {isDarkMode ? t('darkMode.light', 'Light Mode') : t('darkMode.dark', 'Dark Mode')}
              </button>
              {/* Auth Button - Temporarily Hidden */}
              {/* <button
                onClick={onAuthClick}
                className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              >
                {isAuthenticated ? t('auth.logout', 'Logout') : t('auth.login', 'Login')}
              </button> */}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 