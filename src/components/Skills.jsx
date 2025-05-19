import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation()

  const skillCategories = [
    {
      title: t('skills.frontend', 'Frontend Development'),
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'TailwindCSS', level: 85 },
        { name: 'Next.js', level: 80 }
      ]
    },
    {
      title: t('skills.backend', 'Backend Development'),
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 }
      ]
    },
    {
      title: t('skills.tools', 'Tools & Others'),
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Agile/Scrum', level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('skills.title', 'My Skills')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('skills.description', 'Here are my technical skills and expertise in various technologies and tools.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-primary mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-primary font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('skills.continuous', 'Continuously learning and improving my skills')}
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#portfolio"
                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors duration-200"
              >
                {t('skills.viewProjects', 'View My Projects')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 