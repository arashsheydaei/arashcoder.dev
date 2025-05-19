import { useTranslation } from 'react-i18next'
const posts = [
  { title: 'شروع کار با React', date: '1403/02/01', excerpt: 'آموزش مقدماتی React و مفاهیم پایه.' },
  { title: 'چرا TailwindCSS؟', date: '1403/01/20', excerpt: 'بررسی مزایای استفاده از TailwindCSS در پروژه‌های مدرن.' },
]

const Blog = () => {
  const { t } = useTranslation()
  return (
    <section id="blog" className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4 text-primary">{t('blog.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded shadow p-4">
            <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
            <span className="text-xs text-gray-400 mb-2 block">{post.date}</span>
            <p className="text-gray-700 dark:text-gray-200">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog 