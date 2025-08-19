import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-6xl mb-8">404</div>
        <h1 className="text-4xl font-bold text-text-primary mb-6">
          {t("pages.notFound.title")}
        </h1>
        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
          {t("pages.notFound.description")}
        </p>
        <Link
          to={`/${language}`}
          className="inline-flex items-center justify-center px-8 py-3 bg-button-bg text-button-foreground text-base font-medium rounded-lg hover:bg-button-bg-hover transition-colors"
        >
          {t("pages.notFound.backHome")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
