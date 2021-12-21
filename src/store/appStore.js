import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'
import color from 'css-color-function'
import { LANG, DEFAULT_LANG, MY_THEME } from '@/constant'
import { getItem, setItem } from '@/utils/storage'

export default defineStore({
  id: 'app',
  state() {
    return {
      language: getItem(LANG) || DEFAULT_LANG,
      themeList: [
        {
          label: '浅色',
          key: null,
        },
        {
          label: '深色',
          key: darkTheme,
        },
      ],
      currentTheme: getItem(MY_THEME) || {
        label: '浅色',
        key: null,
      },
      userThemeOverrides: {
        Avatar: {
          color: 'transparent',
        },
      },
    }
  },
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
    changeTheme(theme) {
      this.currentTheme.disabled = false
      theme.disabled = true
      this.currentTheme = theme
      setItem(MY_THEME, theme)
    },
    changeUserThemeColor(newColor) {
      this.userThemeOverrides.common = {
        primaryColor: newColor,
        primaryColorHover: color.convert(`color(${newColor} tint(10%))`),
        primaryColorSuppl: color.convert(`color(${newColor} tint(10%))`),
        primaryColorPressed: color.convert(`color(${newColor} shade(10%))`),
      }
    },
    saveUserThemeColor(label) {
      const theme = {
        label,
        key: this.userThemeOverrides,
      }
      console.log(theme)
      // this.themeList = [...this.themeList, theme]
      // this.currentTheme = theme
      setItem(MY_THEME, theme)
    },
  },
})
