import { tr } from './tr';
import { en } from './en';
import { de } from './de';
import { ru } from './ru';
import type { Language } from '../contexts/LanguageContext';

export const translations = {
  tr,
  en,
  de,
  ru,
};

export function getTranslation(language: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to Turkish if translation not found
      value = translations.tr;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return key if no translation found
        }
      }
    }
  }
  
  return typeof value === 'string' ? value : key;
}

export type TranslationKey = keyof typeof tr;
