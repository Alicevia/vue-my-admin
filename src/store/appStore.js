import { defineStore } from 'pinia'
import { LANG } from '@/constant'
import { getItem, setItem } from '@/utils/storage'

export default defineStore({
  id: 'app',
  state: () => ({
    language: getItem(LANG) || 'zhCN',
  }),

  actions: {
    setLanguage(lang) {
      setItem(LANG, lang)
      this.language = lang
    },
  },
})
