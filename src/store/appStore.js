import { defineStore } from 'pinia'
import { LANG, DEFAULT_LANG } from '@/constant'
import { getItem, setItem } from '@/utils/storage'

export default defineStore({
  id: 'app',
  state: () => ({
    language: getItem(LANG) || DEFAULT_LANG,
  }),
  getters: {
    locale() {
      return this.language
    },
  },

  actions: {
    setLanguage(lang) {
      setItem(LANG, lang)
      this.language = lang
    },
  },
})
