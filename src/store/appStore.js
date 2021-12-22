import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'
import color from 'css-color-function'
import { LANG, DEFAULT_LANG, THEME, USER_THEME_OVERRIDES } from '@/constant'
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
      currentTheme: getItem(THEME) || {
        label: '浅色',
        key: null,
      },
      userSelectColor: getItem(USER_THEME_OVERRIDES) || {
        primaryColor: 'rgb(255,125,125)',
      },
    }
  },
  getters: {
    locale() {
      return this.language
    },
    userThemeOverrides() {
      return {
        common: {
          primaryColor: this.userSelectColor.primaryColor,
          primaryColorHover: color.convert(
            `color(${this.userSelectColor.primaryColor} tint(10%))`,
          ),
          primaryColorSuppl: color.convert(
            `color(${this.userSelectColor.primaryColor} tint(10%))`,
          ),
          primaryColorPressed: color.convert(
            `color(${this.userSelectColor.primaryColor} shade(10%))`,
          ),
        },
        Avatar: {
          color: 'transparent',
        },
      }
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
      setItem(THEME, theme)
    },
    changeUserThemeColor(key, newColor) {
      this.userSelectColor[key] = newColor
    },
    saveUserThemeColor() {
      setItem(USER_THEME_OVERRIDES, this.userSelectColor)
    },
  },
})
