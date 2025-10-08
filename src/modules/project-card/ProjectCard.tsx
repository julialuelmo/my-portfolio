import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import ScrollableContent from "@/modules/scrollable-content/ScrollableContent";
import { Project } from "@/types/project";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import github from "../../../assets/images/github.svg";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="h-64 mx-2 -mb-3 relative z-10">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover rounded-xl border border-borderLight dark:border-0 shadow-md dark:shadow-lg"
          loading="lazy"
        />
      </div>
      <Card className="overflow-hidden bg-[#F8F3EB] dark:bg-[#1F242E] relative z-20">
        <CardHeader className="space-y-0.5 py-4 px-5">
          <div className="flex justify-between">
            <div>
              <CardTitle className="text-sm font-medium text-opaqueTextLight/75 dark:text-opaqueTextDark/80 tracking-wider">
                {project.type}
              </CardTitle>
              <CardTitle className="text-lg font-semibold mb-3.5 leading-tight">
                {project.title}
              </CardTitle>
            </div>
            {project.hasThesis && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={handleThesisClick(project.pdfUrl)}
                      variant="default"
                      className="w-fit ml-4 px-3"
                    >
                      <ExternalLink className="w-[17px] h-[17px]" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t(`projects.projectsData.${project.id}.viewThesis`)}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {project.hasGithub && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="default"
                      className="w-fit ml-4 px-3"
                      onClick={handleGithubClick}
                    >
                      <img
                        src={github}
                        alt="Github"
                        className="w-[17px] h-[17px] invert dark:invert-0"
                      />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t("projects.projectsData.portfolio.viewGithub")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </CardHeader>
        <CardContent className="px-5 pb-4">
          <ScrollableContent maxHeight="11rem">
            <p className="text-base font-normal text-opaqueTextLight dark:text-opaqueTextDark/95 leading-tight mr-2">
              {project.description}
            </p>
          </ScrollableContent>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 px-5 pb-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="default"
                className="hover:cursor-default hover:bg-primary/100"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

const handleThesisClick = (pdfUrl?: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  if (pdfUrl) {
    window.open(pdfUrl, "_blank");
  }
};

const handleGithubClick = (e: React.MouseEvent) => {
  e.preventDefault();
  window.open(
    "https://github.com/your-username/your-portfolio-template",
    "_blank"
  );
};

export default ProjectCard;
