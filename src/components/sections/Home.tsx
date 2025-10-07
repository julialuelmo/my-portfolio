import { Linkedin, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslation } from "react-i18next";
import { TooltipSectionProps } from "@/types/tooltipSectionProps";
import profileImage from "@/assets/images/me.webp";

const TooltipSection: React.FC<TooltipSectionProps> = ({ t }) => (
  <div className="flex justify-center md:justify-start mb-5">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="mr-8" asChild>
          <a
            href="mailto:julialuelmorodriguez@gmail.com"
            className="text-gray-600 hover:text-amber-500 transition-colors dark:text-white/70 dark:hover:text-amber-500"
          >
            <Mail size={24} />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("home.emailTooltip")}</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://www.linkedin.com/in/júlia-luelmo-rodríguez-0157aa341"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-amber-500 transition-colors dark:text-white/70 dark:hover:text-amber-500"
          >
            <Linkedin size={24} />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("home.linkedinTooltip")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
);

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="pt-32 pb-10 relative">
      <div className="flex flex-col-reverse mlg:flex-row items-center md:-mt-48 mlg:mt-0">
        <div className="w-full mlg:w-[55%] text-center md:text-left relative z-10 mr-0 mlg:mr-10">
          {/* Tooltips for md and larger screens */}
          <div className="hidden md:block">
            <TooltipSection t={t} />
          </div>
          <h1 className="text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-snug lg:!leading-normal tracking-tight text-center md:text-left mt-3 md:mt-0">
            <span className="text-amber-500">{t("home.greeting")}</span>
            <br /> {t("home.name")}
          </h1>
          <p className="text-lg mb-6 text-black/80 dark:text-white/80">
            {t("home.intro")}
          </p>
          {/* Tooltips for screens smaller than md */}
          <div className="md:hidden">
            <TooltipSection t={t} />
          </div>
        </div>
        <div className="md:translate-y-44 md:translate-x-52 mlg:translate-y-0 mlg:translate-x-0 mlg:ml-auto relative">
          <img
            src={profileImage}
            alt="Portrait of Júlia Luelmo"
            className="h-full w-52 sm:w-56 md:w-56 mlg:w-80 lg:w-96 rounded-full z-10 relative"
          />
          <div className="absolute top-[0px] right-[0px] w-6 h-6 ssm:w-8 ssm:h-8 mlg:w-11 mlg:h-11 bg-accentPrimary rounded-full z-0"></div>
          <div className="absolute right-[200px] top-[85px] ssm:right-[250px] mlg:right-[285px] ssm:top-[100px] lg:top-[160px] lg:right-[345px] w-5 h-5 ssm:w-7 ssm:h-7 mlg:w-9 mlg:h-9 bg-accentSecondary rounded-full z-0"></div>
          <div className="absolute top-[0px] left-[0px] w-3 h-3 ssm:w-4 ssm:h-4 bg-black/80 rounded-full z-0 dark:invert"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
