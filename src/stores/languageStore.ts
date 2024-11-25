import { defineStore } from 'pinia'
import i18n from '@/i18n'
import type { SupportedLanguage } from '@/types/language';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: (localStorage.getItem('language') as SupportedLanguage) || 'en',
  }),
  actions: {
    setLanguage(language: string) {
      if (language === 'en' || language === 'sr') {
        this.currentLanguage = language;
        localStorage.setItem('language', language);
        i18n.global.locale = language;
      } else {
        console.error(`Invalid language assignment: ${language}`);
      }
    },
  },
  getters: {
    getCurrentLanguage: (state) => state.currentLanguage,
  },
})

