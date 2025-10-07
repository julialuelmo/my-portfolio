import React from "react";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import skills from "@/constants/skills";

const Skills = React.memo(() => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-6 sm:py-7 md:py-8 mlg:py-9 lg:py-10">
      <h2 className="text-2xl font-bold mb-6">{t("skills.title")}</h2>
      <div className="flex flex-wrap gap-x-4 gap-y-3 mlg:gap-y-4">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="default"
            className="hover:cursor-default hover:bg-primary/100"
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
});

export default Skills;
