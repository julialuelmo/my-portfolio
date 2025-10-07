import React from "react";
import { useTranslation } from "react-i18next";
import { Linkedin, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = React.memo(() => {
  const { t } = useTranslation();

  return (
    <footer className="py-10">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/your-profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-amber-500 transition-colors dark:text-white/70 dark:hover:text-amber-500"
                  >
                    <Linkedin size={22} strokeWidth={1.8} />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="mr-12">
                  <p>{t("home.linkedinTooltip")}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="mailto:hello@example.com"
                    className="text-gray-600 hover:text-amber-500 transition-colors dark:text-white/70 dark:hover:text-amber-500"
                  >
                    <Mail size={22} strokeWidth={1.8} />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="mr-12">
                  <p>{t("home.emailTooltip")}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="font-medium text-center text-gray-600 dark:text-white/70 ss:flex">
            <p className="mr-1 mb-2">{t("footer.title")}</p>{" "}
            <p className="mr-1 hidden ss:block">·</p> {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
