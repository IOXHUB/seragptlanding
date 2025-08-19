import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../locales";

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    return getTranslation(language, key);
  };

  return { t, language };
}
