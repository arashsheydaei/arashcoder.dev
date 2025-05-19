import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut
} from 'firebase/auth'
import { auth } from '../firebase/config'
import ModalAnimation from './ModalAnimation'
import HoverAnimation from './HoverAnimation'

const Auth = ({ onClose, onAuth }) => {
  const { t } = useTranslation()
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isLogin) {
        // ورود
        const result = await signInWithEmailAndPassword(auth, formData.email, formData.password)
        setUser(result.user)
        onAuth(true)
      } else {
        // ثبت‌نام
        if (formData.password !== formData.confirmPassword) {
          throw new Error('رمز عبور و تکرار آن مطابقت ندارند')
        }
        const result = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        await sendEmailVerification(result.user)
        setUser(result.user)
        onAuth(true)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      setUser(null)
      onAuth(false)
      onClose()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (user) {
    return (
      <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 p-4 rounded shadow">
        <p className="text-sm mb-2">{user.email}</p>
        <HoverAnimation>
          <button 
            onClick={handleLogout}
            className="text-red-500 text-sm hover:underline"
          >
            خروج
          </button>
        </HoverAnimation>
      </div>
    )
  }

  return (
    <ModalAnimation isOpen={true}>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {isLogin ? t('auth.login', 'Login') : t('auth.register', 'Register')}
          </h2>
          <HoverAnimation>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close modal"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </HoverAnimation>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('auth.name', 'Name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
                aria-label="Name"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('auth.email', 'Email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
              required
              aria-label="Email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('auth.password', 'Password')}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
              required
              aria-label="Password"
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('auth.confirmPassword', 'Confirm Password')}
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
                aria-label="Confirm Password"
              />
            </div>
          )}

          {error && (
            <div className="text-red-500 text-sm text-center" role="alert">
              {error}
            </div>
          )}

          <HoverAnimation>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-200"
              disabled={loading}
              aria-label={isLogin ? 'Login' : 'Register'}
            >
              {loading ? t('auth.loading', 'Loading...') : (isLogin ? t('auth.login', 'Login') : t('auth.register', 'Register'))}
            </button>
          </HoverAnimation>
        </form>

        <div className="mt-4 text-center">
          <HoverAnimation>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:text-primary-dark transition-colors duration-200"
              aria-label={isLogin ? 'Switch to Register' : 'Switch to Login'}
            >
              {isLogin
                ? t('auth.noAccount', "Don't have an account? Register")
                : t('auth.haveAccount', 'Already have an account? Login')}
            </button>
          </HoverAnimation>
        </div>
      </div>
    </ModalAnimation>
  )
}

export default Auth 