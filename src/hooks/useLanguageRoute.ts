import { useEffect, useMemo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import i18n from "../i18n";

const VALID_LANGUAGES = ["en", "es", "ca"];

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
        const newPath = `/${newSegments.join("/")}${location.search}${location.hash}`;
        navigate(newPath, { replace: true });
      }
    },
    [location.hash, location.pathname, location.search, navigate]
  );

  useEffect(() => {
    if (VALID_LANGUAGES.includes(langCode)) {
      i18n.changeLanguage(langCode);
    } else {
      handleLanguageChange("en");
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
