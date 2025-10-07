import React from "react";
import { useTranslation } from "react-i18next";
import projectsData from "@/constants/projectsData";
import { Project } from "@/types/project";
import ProjectCard from "@/modules/project-card/ProjectCard";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projectList = projectsData.map((item) => ({
    ...item,
    ...(t(`projects.projectsData.${item.id}`, { returnObjects: true }) as Omit<
      Project,
      keyof typeof item
    >),
  }));

  return (
    <section id="projects" className="py-6 sm:py-7 md:py-8 mlg:py-9 lg:py-10">
      <h2 className="text-2xl font-bold mb-6">{t("projects.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 mlg:gap-y-8 lg:gap-y-10 gap-x-6">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
