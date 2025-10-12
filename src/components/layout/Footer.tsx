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
                    href="https://www.linkedin.com/in/júlia-luelmo-rodríguez-0157aa341"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-amber-500 transition-colors dark:text-white/70 dark:hover:text-amber-500"
                  >
                    <Linkedin size={22} strokeWidth={1.8} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("home.linkedinTooltip")}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="mailto:julialuelmorodriguez@gmail.com"
                    className="text-gray-600 hover:text-amber-500 transition-colors dark:text-white/70 dark:hover:text-amber-500"
                  >
                    <Mail size={22} strokeWidth={1.8} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("home.emailTooltip")}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
