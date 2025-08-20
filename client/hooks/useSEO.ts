import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export function useSEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  canonicalUrl,
}: SEOProps) {
  const { language } = useLanguage();

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update document language
    document.documentElement.lang = language;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update or create Open Graph title
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement("meta");
      ogTitleMeta.setAttribute("property", "og:title");
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute("content", ogTitle || title);

    // Update or create Open Graph description
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement("meta");
      ogDescMeta.setAttribute("property", "og:description");
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute("content", ogDescription || description);

    // Update or create Open Graph image
    if (ogImage) {
      let ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (!ogImageMeta) {
        ogImageMeta = document.createElement("meta");
        ogImageMeta.setAttribute("property", "og:image");
        document.head.appendChild(ogImageMeta);
      }
      ogImageMeta.setAttribute("content", ogImage);
    }

    // Update or create canonical URL
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonicalUrl);
    }

    // Update hreflang links dynamically
    const baseUrl = window.location.origin;
    const currentPath = window.location.pathname;

    // Remove existing hreflang links
    const existingHreflangs = document.querySelectorAll("link[hreflang]");
    existingHreflangs.forEach((link) => link.remove());

    // Add new hreflang links
    const languages = ["tr", "en", "de", "ru"];
    languages.forEach((lang) => {
      const hreflangLink = document.createElement("link");
      hreflangLink.setAttribute("rel", "alternate");
      hreflangLink.setAttribute("hreflang", lang);

      // Construct proper URL based on current path
      let href = `${baseUrl}`;
      if (lang !== "tr") {
        // Turkish is default, no prefix needed
        href += `/${lang}`;
      }

      // Add path if not homepage
      if (currentPath !== "/" && currentPath !== `/${lang}`) {
        const pathWithoutLang = currentPath
          .replace(/^\/[a-z]{2}\//, "/")
          .replace(/^\/[a-z]{2}$/, "/");
        if (pathWithoutLang !== "/") {
          href += pathWithoutLang;
        }
      }

      hreflangLink.setAttribute("href", href);
      document.head.appendChild(hreflangLink);
    });

    // Add x-default hreflang
    const defaultHreflang = document.createElement("link");
    defaultHreflang.setAttribute("rel", "alternate");
    defaultHreflang.setAttribute("hreflang", "x-default");
    defaultHreflang.setAttribute("href", baseUrl);
    document.head.appendChild(defaultHreflang);
  }, [
    title,
    description,
    ogTitle,
    ogDescription,
    ogImage,
    canonicalUrl,
    language,
  ]);
}
