import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { t } = useTranslation();
  const { language } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: `/${language}` },
    { name: t('nav.blog'), href: `/${language}/blog` },
    { name: t('nav.support'), href: `/${language}/destek` },
    { name: t('nav.consulting'), href: `/${language}/proje-danismanligi` },
    { name: t('nav.turnkey'), href: `/${language}/anahtar-teslim-sera` },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Minimal monochrome */}
            <Link to={`/${language}`} className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2c7ec7c93776440b923d3518963fc941%2Fd41e899f98924d69be74ed16912b5a38?format=webp&width=800"
                alt="SeraGPT"
                className="h-7 w-auto filter grayscale hover:grayscale-0 transition-all duration-200"
              />
            </Link>

            {/* Right side: Language Switcher + Auth Buttons */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              {/* Giriş Button */}
              <a
                href="https://chat.seragpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                Giriş
              </a>

              {/* Hemen Başla Button - Accent */}
              <Link
                to={`/${language}/proje-danismanligi`}
                className="inline-flex items-center px-4 py-2 bg-button-bg text-button-foreground text-sm font-medium rounded-md hover:bg-button-bg-hover transition-colors"
              >
                Hemen Başla
              </Link>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="text-text-secondary hover:text-text-primary p-2"
                  aria-label="Open main menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer - Simplified LibreChat Style */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo and Description */}
            <div className="flex flex-col items-center md:items-start">
              <Link to={`/${language}`} className="flex items-center mb-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2c7ec7c93776440b923d3518963fc941%2Fd41e899f98924d69be74ed16912b5a38?format=webp&width=800"
                  alt="SeraGPT"
                  className="h-6 w-auto filter grayscale hover:grayscale-0 transition-all duration-200"
                />
              </Link>
              <p className="text-text-secondary text-sm max-w-md text-center md:text-left">
                {t('footer.description')}
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                to={`/${language}/proje-danismanligi`}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {t('footer.consulting')}
              </Link>
              <Link
                to={`/${language}/anahtar-teslim-sera`}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {t('footer.turnkey')}
              </Link>
              <Link
                to={`/${language}/blog`}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {t('footer.blog')}
              </Link>
              <Link
                to={`/${language}/destek`}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {t('footer.support')}
              </Link>
              <a
                href="mailto:info@seragpt.com"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {t('footer.contact')}
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-text-secondary text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
