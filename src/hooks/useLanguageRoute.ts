import { useEffect, useMemo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import i18n from "../i18n";

const VALID_LANGUAGES = ["en", "es", "ca"];
const BASE_URL = "https://julialuelmo.github.io/my-portfolio";

export const useLanguageRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const langCode = useMemo(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    return segments[0] ?? "";
  }, [location.pathname]);

  const handleLanguageChange = useCallback(
    (lang: string) => {
      if (VALID_LANGUAGES.includes(lang)) {
        const currentSegments = location.pathname
          .split("/")
          .filter(Boolean)
          .slice(1);
        const newSegments = [lang, ...currentSegments];
        const newPath = `/${newSegments.join("/")}/${location.hash}`;
        navigate(newPath, { replace: true });
      }
    },
    [location.hash, location.pathname, navigate]
  );

  // Update canonical URL dynamically
  useEffect(() => {
    if (VALID_LANGUAGES.includes(langCode)) {
      const canonicalUrl = `${BASE_URL}/${langCode}/`;
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", canonicalUrl);
      } else {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("href", canonicalUrl);
        document.head.appendChild(canonical);
      }
    }
  }, [langCode]);

  useEffect(() => {
    if (VALID_LANGUAGES.includes(langCode)) {
      i18n.changeLanguage(langCode);
      // Store the current language in localStorage to persist on reload
      localStorage.setItem("preferredLanguage", langCode);
    } else {
      const savedLang = localStorage.getItem("preferredLanguage");
      const defaultLang =
        savedLang && VALID_LANGUAGES.includes(savedLang) ? savedLang : "en";
      handleLanguageChange(defaultLang);
    }

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [langCode, handleLanguageChange]);

  const changeLanguage = useCallback((lang: string) => {
    if (VALID_LANGUAGES.includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, []);

  return { changeLanguage };
};
