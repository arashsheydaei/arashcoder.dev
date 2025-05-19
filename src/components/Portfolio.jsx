import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from './ScrollAnimation'
import HoverAnimation from './HoverAnimation'
import ModalAnimation from './ModalAnimation'
import LazyImage from './LazyImage'

const Portfolio = () => {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: 'all', label: t('portfolio.categories.all', 'All') },
    { id: 'web', label: t('portfolio.categories.web', 'Web Development') },
    { id: 'ai', label: t('portfolio.categories.ai', 'AI') }
  ]

  const projects = [
    {
      id: 1,
      title: 'فروشگاه اینترنتی کیانی شاپ',
      description: t('portfolio.projects.kiyanishop', 'کیانی شاپ یک فروشگاه آنلاین ایرانی است که در زمینه فروش محصولات دیجیتال، لوازم جانبی موبایل، لوازم خانگی، کنسول‌های بازی و لوازم جانبی آن‌ها فعالیت می‌کند. این فروشگاه با ارائه‌ی محصولات متنوع از برندهای معتبر، تجربه‌ی خریدی آسان و مطمئن را برای مشتریان فراهم می‌آورد.'),
      image: '/images/projects/kiyani-shop.jpg',
      category: 'web',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Laravel', 'WordPress', 'OpenCart'],
      demoLink: 'https://kiyanishop.com',
      githubLink: null
    },
    {
      id: 2,
      title: 'Task Manager',
      description: t('portfolio.projects.taskmanager', 'A task management application with real-time updates'),
      image: '/images/projects/taskmanager.jpg',
      category: 'web',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      demoLink: 'https://demo.taskmanager.com',
      githubLink: 'https://github.com/username/taskmanager'
    },
    {
      id: 3,
      title: 'AI Image Generator',
      description: t('portfolio.projects.aigenerator', 'An AI-powered image generation tool using Stable Diffusion'),
      image: '/images/projects/aigenerator.jpg',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      demoLink: 'https://demo.aigenerator.com',
      githubLink: 'https://github.com/username/aigenerator'
    }
  ]

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {t('portfolio.title', 'Portfolio')}
          </h2>
          <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-400">
            {t('portfolio.description', 'Check out some of my recent projects')}
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="flex justify-center gap-4 mb-12">
            {categories.map(category => (
              <HoverAnimation key={category.id}>
                <button
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  aria-label={`Filter by ${category.label}`}
                >
                  {category.label}
                </button>
              </HoverAnimation>
            ))}
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ScrollAnimation key={project.id}>
              <HoverAnimation>
                <div
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverAnimation>
            </ScrollAnimation>
          ))}
        </div>

        <ModalAnimation isOpen={!!selectedProject}>
          {selectedProject && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-4xl w-full mx-4">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <HoverAnimation>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Close modal"
                  >
                    <i className="fas fa-times text-xl"></i>
                  </button>
                </HoverAnimation>
              </div>

              <LazyImage
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 mb-6 rounded-lg"
              />

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-end gap-4">
                <HoverAnimation>
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
                    aria-label="View live demo"
                  >
                    {t('portfolio.liveDemo', 'Live Demo')}
                  </a>
                </HoverAnimation>
                <HoverAnimation>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    aria-label="View source code"
                  >
                    GitHub
                  </a>
                </HoverAnimation>
              </div>
            </div>
          )}
        </ModalAnimation>
      </div>
    </section>
  )
}

export default Portfolio 