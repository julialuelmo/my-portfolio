import { useState, useEffect } from "react";
import i18n from "@/i18n";

export const useLanguageKey = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleLanguageChange = () => {
      setKey((prevKey) => prevKey + 1);
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return key;
};
