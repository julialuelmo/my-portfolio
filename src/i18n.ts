import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en.json";
import esTranslations from "./locales/es.json";
import caTranslations from "./locales/ca.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    es: { translation: esTranslations },
    ca: { translation: caTranslations },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// Document title
export function updateDocumentTitle() {
  const portfolioText = i18n.t("common.portfolio", "Portfolio");
  document.title = `Júlia Luelmo - ${portfolioText}`;
}

i18n.on("languageChanged", updateDocumentTitle);

updateDocumentTitle();

export default i18n;
