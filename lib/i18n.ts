const i18nData = require("../i18n.json")

export type Language = "en" | "fr"

export const useI18n = (lang: Language) => {
  return {
    t: (path: string, defaultValue?: string) => {
      const keys = path.split(".")
      let value: any = i18nData[lang]

      for (const key of keys) {
        value = value?.[key]
      }

      return value || defaultValue || path
    },
  }
}

export const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
]
