import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fa from './fa.json'
import en from './en.json'

const resources = {
  fa: { translation: fa },
  en: { translation: en },
}

const lng = localStorage.getItem('lng') || 'fa'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng,
    fallbackLng: 'fa',
    interpolation: { escapeValue: false },
  })

export default i18n 