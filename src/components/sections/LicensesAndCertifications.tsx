import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import certificationData from "@/constants/certificationData";
import { List } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  logo?: string;
  skillLogo?: string;
  translate?: string;
  size?: string;
  padding?: string;
}

const LicensesAndCertifications: React.FC = () => {
  const { t } = useTranslation();

  const certificationList = certificationData.map((item) => ({
    ...item,
    ...(t(`certifications.certificates.${item.id}`, {
      returnObjects: true,
    }) as Omit<Certification, keyof typeof item>),
  }));

  const additionalCertifications: string[] = t(
    "certifications.additionalList",
    { returnObjects: true }
  ) as string[];

  return (
    <section
      id="certifications"
      className="py-6 sm:py-7 md:py-8 mlg:py-9 lg:py-10"
    >
      <h2 className="text-2xl font-bold mb-6">{t("certifications.title")}</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {certificationList.map((cert, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-5 pt-4 pb-0">
              <CardTitle className="flex items-center justify-between">
                <Avatar className="h-12 w-12 border-2 border-borderLight dark:border-borderDark aspect-square bg-white dark:bg-white">
                  {cert.logo ? (
                    <AvatarImage
                      src={cert.logo}
                      alt={cert.issuer}
                      className={cert.padding}
                    />
                  ) : (
                    <AvatarFallback>{cert.issuer[0]}</AvatarFallback>
                  )}
                </Avatar>
                <p className="text-right text-base font-normal text-opaqueTextLight dark:text-opaqueTextDark/95 ml-4">
                  {t("certifications.dateTitle")}{" "}
                  {t(`certifications.certificates.${cert.id}.date`)}
                </p>
              </CardTitle>
              <CardDescription className="text-base font-normal text-opaqueTextLight dark:text-opaqueTextDark/95 pt-4">
                {cert.issuer}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-5 pb-5 pt-0">
              <h3 className="text-lg font-semibold leading-tight mr-0 ss:mr-20">
                {cert.title}
              </h3>
            </CardContent>
            <CardFooter className="relative p-5 pt-0 pb-4">
              {cert.skillLogo && (
                <div
                  className={`hidden ss:block absolute -bottom-1 -right-2 ${cert.size}`}
                >
                  <img
                    src={cert.skillLogo}
                    alt={`Skill for ${cert.title}`}
                    className={`w-full h-full object-contain transform ${cert.translate}`}
                    loading="lazy"
                  />
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-6 max-w-2xl mx-auto">
        <Accordion
          type="single"
          collapsible
          className="border border-borderLight dark:border-0 bg-background/80 dark:bg-backgroundPrimaryDark/75 text-card-foreground shadow-md dark:shadow-lg px-5 rounded-xl"
        >
          <AccordionItem value="additional-certs">
            <AccordionTrigger className="text-base font-semibold h-12 text-black/90 dark:text-white/90">
              <div className="flex items-center gap-3">
                <List size={19} strokeWidth={1.8} />
                {t("certifications.viewAllButton")}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {additionalCertifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-sm text-opaqueTextLight dark:text-opaqueTextDark/95 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-textLight dark:before:text-textDark"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default LicensesAndCertifications;
