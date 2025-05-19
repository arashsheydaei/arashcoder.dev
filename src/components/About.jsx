import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  const stats = [
    { label: t('about.yearsExperience', 'Years Experience'), value: '5+' },
    { label: t('about.completedProjects', 'Completed Projects'), value: '50+' },
    { label: t('about.happyClients', 'Happy Clients'), value: '30+' },
    { label: t('about.awards', 'Awards'), value: '3' }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.title', 'About Me')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt={t('about.profileAlt', 'Arash Sheydaei')}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary opacity-20 rounded-full"></div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">
                {t('about.subtitle', 'Full Stack Developer & UI/UX Designer')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('about.description', 'I am a passionate full-stack developer with expertise in modern web technologies. With a strong foundation in both front-end and back-end development, I create seamless and efficient web applications that deliver exceptional user experiences.')}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors duration-200"
                >
                  {t('about.contactMe', 'Contact Me')}
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-200"
                >
                  {t('about.downloadCV', 'Download CV')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 