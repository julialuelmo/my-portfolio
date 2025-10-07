import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { useLanguageKey } from "@/hooks/useLanguageKey";

const About: React.FC = () => {
  const { t } = useTranslation();
  const key = useLanguageKey();

  const isCatalanOrSpanish = i18n.language === "ca" || i18n.language === "es";
  const paragraph1 = t("about.paragraph1");

  return (
    <section
      key={key}
      id="about"
      className="pb-6 pt-0 md:pb-8 md:pt-4 mlg:pb-9 mlg:pt-6 lg:pb-10 lg:pt-7"
    >
      <h2 className="text-2xl font-semibold mb-2">{t("about.title")}</h2>
      <div className="opacity-90">
        <p className="space-y-4">
          {isCatalanOrSpanish ? (
            <>
              {paragraph1.split(" responsive")[0]}
              <em> responsive</em>.{paragraph1.split(" responsive")[1]}
            </>
          ) : (
            paragraph1
          )}
        </p>
        <p>{t("about.paragraph2")}</p>
      </div>
    </section>
  );
};

export default About;
