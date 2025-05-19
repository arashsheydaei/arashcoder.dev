import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      console.log('Starting email send process...');
      console.log('Form data:', formData);

      const result = await emailjs.send(
        'service_coqmc95',
        'template_met54be',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          email: 'arashcoder.dev@gmail.com'
        },
        'sIbmyx3l48ykggOVq'
      )
      
      console.log('Email sent successfully:', result);
      setSubmitStatus('success')
      setErrorMessage('')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      console.log('Full error details:', {
        message: error.message,
        text: error.text,
        status: error.status,
        stack: error.stack
      })
      setSubmitStatus('error')
      setErrorMessage(error.message || 'خطا در ارسال پیام. لطفاً دوباره تلاش کنید.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: t('contact.email', 'Email'),
      value: t('contact.emailValue', 'arashcoder.dev@gmail.com'),
      link: 'mailto:arashcoder.dev@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: t('contact.phone', 'Phone'),
      value: t('contact.phoneValue', '00989114033666'),
      link: 'tel:00989114033666'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: t('contact.address', 'Address'),
      value: t('contact.addressValue', 'Shiraz, Fars'),
      link: 'https://maps.google.com/?q=Shiraz,Fars'
    }
  ]

  const socialLinks = [
    {
      icon: 'fab fa-github',
      link: 'https://github.com/arashsheydaei',
      label: 'GitHub'
    },
    {
      icon: 'fab fa-linkedin',
      link: 'https://linkedin.com/in/arashsheydaei',
      label: 'LinkedIn'
    },
    {
      icon: 'fab fa-twitter',
      link: 'https://twitter.com/arashsheydaei',
      label: 'Twitter'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('contact.title', 'Get In Touch')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('contact.description', 'Feel free to contact me for any work or suggestions below')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                {t('contact.sendMessage', 'Send Message')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.name', 'Name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.email', 'Email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.subject', 'Subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.message', 'Message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? t('contact.sending', 'Sending...') : t('contact.send', 'Send Message')}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 dark:text-green-400 text-center">
                    {t('contact.success', 'Message sent successfully!')}
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 dark:text-red-400 text-center">
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">
                  {t('contact.contactInfo', 'Contact Information')}
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                        <i className={`${info.icon} text-primary text-xl`}></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                          {info.title}
                        </h4>
                        <a
                          href={info.link}
                          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">
                  {t('contact.followMe', 'Follow Me')}
                </h3>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <i className={`${social.icon} text-primary text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207446.825808!2d51.255104!3d35.6975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 