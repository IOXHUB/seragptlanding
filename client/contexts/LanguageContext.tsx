import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getTranslation } from "../locales";

export type Language = "tr" | "en" | "de" | "ru";

export interface LanguageConfig {
  code: Language;
  name: string;
  flag: string;
}

export const LANGUAGES: LanguageConfig[] = [
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  languages: LanguageConfig[];
  t: (key: string) => string;
}

// Create a default context value
const defaultContext: LanguageContextType = {
  language: "tr",
  setLanguage: () => {},
  languages: LANGUAGES,
  t: (key: string) => key,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguageState] = useState<Language>("tr");
  const [isInitialized, setIsInitialized] = useState(false);

  // Extract language from URL path
  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const langFromPath = pathSegments[0] as Language;

    if (LANGUAGES.some((lang) => lang.code === langFromPath)) {
      setLanguageState(langFromPath);
    } else {
      // Set default to Turkish without immediate redirect
      setLanguageState("tr");

      // Schedule redirect after component mounts
      setTimeout(() => {
        if (location.pathname === "/") {
          navigate("/tr", { replace: true });
        } else if (
          !location.pathname.startsWith("/tr") &&
          !location.pathname.startsWith("/en") &&
          !location.pathname.startsWith("/de") &&
          !location.pathname.startsWith("/ru")
        ) {
          const newPath = `/tr${location.pathname}`;
          navigate(newPath, { replace: true });
        }
      }, 0);
    }
    setIsInitialized(true);
  }, [location.pathname, navigate]);

  const setLanguage = (newLang: Language) => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const currentLang = pathSegments[0];

    let newPath: string;
    if (LANGUAGES.some((lang) => lang.code === currentLang)) {
      // Replace current language with new one
      pathSegments[0] = newLang;
      newPath = `/${pathSegments.join("/")}`;
    } else {
      // Add language prefix
      newPath = `/${newLang}${location.pathname}`;
    }

    navigate(newPath);
    setLanguageState(newLang);
  };

  // Translation function using actual translation files
  const t = (key: string): string => {
    if (!isInitialized) {
      return key; // Return key while initializing
    }
    return getTranslation(language, key);
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
  return context;
}
