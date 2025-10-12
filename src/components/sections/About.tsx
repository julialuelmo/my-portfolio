import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguageKey } from "@/hooks/useLanguageKey";

const About: React.FC = () => {
  const { t } = useTranslation();
  const key = useLanguageKey();
  const paragraphs = [t("about.paragraph1"), t("about.paragraph2")];

  return (
    <section
      key={key}
      id="about"
      className="pb-6 pt-0 md:pb-8 md:pt-4 mlg:pb-9 mlg:pt-6 lg:pb-10 lg:pt-7"
    >
      <h2 className="text-2xl font-semibold mb-2">{t("about.title")}</h2>
      <div className="space-y-4 opacity-90">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
