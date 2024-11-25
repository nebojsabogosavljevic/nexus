import { defineStore } from 'pinia'
import i18n from '@/i18n'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: localStorage.getItem('language') || 'en',
  }),
  actions: {
    setLanguage(language: string) {
      this.currentLanguage = language
      localStorage.setItem('language', language)
      i18n.global.locale = language
    },
  },
  getters: {
    getCurrentLanguage: (state) => state.currentLanguage,
  },
  persist: true,
})
