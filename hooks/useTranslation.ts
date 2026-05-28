'use client'

import { useState, useCallback } from 'react'
import { translations, Language } from '@/config/translations'

type NestedTranslation = {
  [key: string]: string | NestedTranslation
}

function getNestedValue(obj: NestedTranslation, path: string): string {
  const keys = path.split('.')
  let current: any = obj
  for (const key of keys) {
    current = current[key]
    if (!current) return path
  }
  return current
}

export function useTranslation() {
  const [language, setLanguage] = useState<Language>('kk')

  const t = useCallback(
    (key: string): string => {
      const trans = translations[language] as NestedTranslation
      return getNestedValue(trans, key)
    },
    [language]
  )

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }, [])

  return { t, language, changeLanguage }
}