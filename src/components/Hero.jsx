import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title', 'Arash Sheydaei')}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            {t('hero.subtitle', 'Full Stack Developer & UI/UX Designer')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
            >
              {t('hero.contact', 'Contact Me')}
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-200"
            >
              {t('hero.viewWork', 'View My Work')}
            </Link>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-6 rtl:space-x-reverse">
              <a
                href="https://github.com/arashsheydaei"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/arashsheydaei"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://twitter.com/arashsheydaei"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 