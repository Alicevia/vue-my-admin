import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'
import { LANG, DEFAULT_LANG } from '@/constant'
import { getItem, setItem } from '@/utils/storage'

export default defineStore({
  id: 'app',
  state: () => ({
    language: getItem(LANG) || DEFAULT_LANG,
    myTheme: darkTheme,
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
    toggleBlackOrWhite() {
      if (this.myTheme) {
        this.myTheme = null
      } else {
        this.myTheme = darkTheme
      }
    },
  },
})
