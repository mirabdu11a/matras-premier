import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationRu from './locale/ru'
import translationUz from './locale/uz'
import { LANG_KEY, DEFAULT_LANG } from './locale'

const savedLanguage = localStorage.getItem(LANG_KEY) || DEFAULT_LANG

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: translationUz },
    ru: { translation: translationRu },
  },
  lng: savedLanguage,
  fallbackLng: 'uz',
})

export default i18n
