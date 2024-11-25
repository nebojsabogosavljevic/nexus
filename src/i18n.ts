import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import sr from './locales/sr.json'

const messages = {
  en,
  sr,
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
