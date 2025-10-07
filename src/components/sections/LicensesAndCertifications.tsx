import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Signature } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import certificationData from "@/constants/certificationData";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialLink?: string;
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
                <Avatar className="h-12 w-12 border-2 border-borderLight dark:border-borderDark aspect-square">
                  {cert.logo ? (
                    <AvatarImage src={cert.logo} alt={cert.issuer} />
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
              <h3 className="text-lg font-semibold mb-3.5 leading-tight mr-0 md:mr-6">
                {cert.title}
              </h3>
              {cert.credentialId && (
                <div
                  className={`flex items-center text-opaqueTextLight dark:text-opaqueTextDark/95 ${cert.padding}`}
                >
                  <Signature
                    className="h-[22px] w-[22px] mr-2"
                    strokeWidth={2}
                  />
                  <p className="font-medium leading-tight w-2/3">
                    {cert.credentialId}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="relative p-5 pt-0 pb-4">
              {cert.credentialLink && (
                <Button
                  variant="default"
                  className="w-full mr-0 sss:mr-[27%] ss:mr-[24%] md:mr-[20%] mlg:mr-[17%] lg:mr-[27%]"
                  asChild
                >
                  <a
                    className="flex items-center"
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("certifications.credentialButton")}
                  </a>
                </Button>
              )}
              {cert.skillLogo && (
                <div
                  className={`hidden sss:block absolute -bottom-1 -right-2 ${cert.size}`}
                >
                  <img
                    src={cert.skillLogo}
                    alt={`Skill for ${cert.title}`}
                    className={`w-full h-full transform ${cert.translate}`}
                    loading="lazy"
                  />
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LicensesAndCertifications;
