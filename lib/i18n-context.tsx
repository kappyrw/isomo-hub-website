"use client"

import { createContext, useState, type ReactNode, useCallback } from "react"
import translations from "@/i18n.json"

export type Language = "en" | "fr"

interface I18nContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string, defaultValue?: string) => string
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined)

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en")

  const t = useCallback(
    (key: string, defaultValue?: string) => {
      const keys = key.split(".")
      let value: any = (translations as any)[lang]

      for (const k of keys) {
        value = value?.[k]
      }

      return value || defaultValue || key
    },
    [lang],
  )

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
}
