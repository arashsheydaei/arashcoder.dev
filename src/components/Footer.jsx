import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Link as ScrollLink } from 'react-scroll'
import HoverAnimation from './HoverAnimation'

const Footer = ({ isDarkMode, toggleDarkMode, toggleLanguage, isAuthenticated, onAuthClick }) => {
  const { t, i18n } = useTranslation()
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { to: '/about', label: t('footer.about') },
    { to: '/projects', label: t('footer.projects') },
    { to: '/contact', label: t('footer.contact') }
  ]

  const socialLinks = [
    { href: 'https://github.com/arashsheydaei', icon: 'github', label: 'GitHub' },
    { href: 'https://linkedin.com/in/arashsheydaei', icon: 'linkedin', label: 'LinkedIn' },
    { href: 'https://twitter.com/arashsheydaei', icon: 'twitter', label: 'Twitter' }
  ]

  const navItems = [
    { id: 'home', label: t('nav.home', 'Home') },
    { id: 'about', label: t('nav.about', 'About') },
    { id: 'portfolio', label: t('nav.projects', 'Projects') },
    { id: 'contact', label: t('nav.contact', 'Contact') }
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('footer.about', 'About Me')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('footer.description', 'A passionate web developer and AI enthusiast, dedicated to creating innovative solutions and sharing knowledge through my blog.')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((link) => (
                <HoverAnimation key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                    aria-label={link.label}
                  >
                    <i className={`fab fa-${link.icon} text-xl`}></i>
                  </a>
                </HoverAnimation>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('footer.quickLinks', 'Quick Links')}
            </h3>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.id}>
                  <ScrollLink
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('footer.contact', 'Contact')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:arashcoder.dev@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                >
                  arashcoder.dev@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:00989114033666"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                >
                  00989114033666
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            © {currentYear} {t('footer.copyright', 'Arash Sheydaei. All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 