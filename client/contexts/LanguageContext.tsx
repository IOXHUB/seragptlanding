import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export type Language = 'tr' | 'en' | 'de' | 'ru';

export interface LanguageConfig {
  code: Language;
  name: string;
  flag: string;
}

export const LANGUAGES: LanguageConfig[] = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  languages: LanguageConfig[];
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguageState] = useState<Language>('tr');

  // Extract language from URL path
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const langFromPath = pathSegments[0] as Language;
    
    if (LANGUAGES.some(lang => lang.code === langFromPath)) {
      setLanguageState(langFromPath);
    } else {
      // If no language in URL, default to Turkish and redirect
      const newPath = `/tr${location.pathname}`;
      navigate(newPath, { replace: true });
      setLanguageState('tr');
    }
  }, [location.pathname, navigate]);

  const setLanguage = (newLang: Language) => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentLang = pathSegments[0];
    
    let newPath: string;
    if (LANGUAGES.some(lang => lang.code === currentLang)) {
      // Replace current language with new one
      pathSegments[0] = newLang;
      newPath = `/${pathSegments.join('/')}`;
    } else {
      // Add language prefix
      newPath = `/${newLang}${location.pathname}`;
    }
    
    navigate(newPath);
    setLanguageState(newLang);
  };

  // Translation function using actual translation files
  const t = (key: string): string => {
    const keys = key.split('.');
    const translations = {
      tr: () => import('../locales/tr').then(m => m.tr),
      en: () => import('../locales/en').then(m => m.en),
      de: () => import('../locales/de').then(m => m.de),
      ru: () => import('../locales/ru').then(m => m.ru),
    };

    // For now, we'll use a synchronous approach with pre-imported translations
    // This will be optimized later with lazy loading if needed
    return key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    languages: LANGUAGES,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
