import { University, MapPin, ExternalLink } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";
import educationData from "@/constants/educationData";
import { EducationItem } from "@/types/education";

const Education: React.FC = () => {
  const { t } = useTranslation();

  const educationList = educationData.map((item) => ({
    ...item,
    ...(t(`education.degrees.${item.id}`, { returnObjects: true }) as Omit<
      EducationItem,
      keyof typeof item
    >),
  }));

  return (
    <section id="education" className="py-6 sm:py-7 md:py-8 mlg:py-9 lg:py-10">
      <h2 className="text-2xl font-bold mb-6">{t("education.title")}</h2>
      <div className="space-y-8">
        {educationList.map((edu) => (
          <div
            key={edu.id}
            className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4"
          >
            <header
              className="z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-zinc-600/90 sm:col-span-2 dark:text-slate-200/60"
              aria-label={edu.dateRange}
            >
              {edu.dateRange}
            </header>
            <div className="z-10 sm:col-span-6 flex items-center">
              <a
                href={edu.website}
                target="_blank"
                rel="noopener noreferrer"
                className="relative hidden ss:block"
              >
                <Avatar className="group h-[4.5rem] w-[4.5rem] mr-4 border-2 bg-background/80 dark:bg-slate-100 border-borderLight dark:border-borderDark relative">
                  <AvatarImage
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className={`object-contain ${edu.padding} transition-all duration-300 group-hover:blur-sm group-hover:scale-105`}
                    loading="lazy"
                  />
                  <AvatarFallback>{edu.institution[0]}</AvatarFallback>
                  <ExternalLink
                    className="absolute inset-0 m-auto h-6 w-6 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    strokeWidth={2}
                  />
                </Avatar>
              </a>
              <div>
                <div className="flex items-center">
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block ss:hidden"
                  >
                    <Avatar className="group h-[4.5rem] w-[4.5rem] mr-4 border-2 bg-background/80 dark:bg-slate-100 border-borderLight dark:border-borderDark relative">
                      <AvatarImage
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className={`object-contain ${edu.padding} transition-all duration-300 group-hover:blur-sm group-hover:scale-105`}
                        loading="lazy"
                      />
                      <AvatarFallback>{edu.institution[0]}</AvatarFallback>
                      <ExternalLink
                        className="absolute inset-0 m-auto h-6 w-6 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        strokeWidth={2}
                      />
                    </Avatar>
                  </a>
                  <h3 className="font-medium leading-[1.3] text-black/85 dark:text-slate-100">
                    <div>{edu.degree}</div>
                  </h3>
                </div>
                <div className="mt-[10px] leading-tight font-normal text-opaqueTextLight dark:text-opaqueTextDark/95">
                  <div className="flex items-center">
                    <University
                      className="mr-[9px] -mt-[3px] h-[17px] w-[17px] min-w-[17px]"
                      strokeWidth={2}
                    />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <MapPin
                      className="mr-[9px] -mt-[2px] h-[17px] w-[17px] min-w-[17px]"
                      strokeWidth={2}
                    />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
