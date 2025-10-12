import cibernariumLogo from "@/assets/images/cibernarium.webp";
import firstLogo from "@/assets/images/first.webp";
import googleAdsSkill from "@/assets/images/google-ads.webp";
import seoSkill from "@/assets/images/seo.webp";
import linkedinSkill from "@/assets/images/linkedin.webp";
import cambridgeSkill from "@/assets/images/cambridge.webp";

const certificationData = [
  {
    id: "googleAds",
    issuer: "Cibernàrium",
    logo: cibernariumLogo,
    skillLogo: googleAdsSkill,
    translate: "translate-x-2 translate-y-4 lg:translate-y-9 -rotate-12",
    size: "w-24 h-24 ss:w-28 ss:h-28 sm:w-32 sm:h-32 scale-90",
    padding: "p-1 scale-[123%]",
  },
  {
    id: "seo",
    issuer: "Cibernàrium",
    logo: cibernariumLogo,
    skillLogo: seoSkill,
    translate:
      "translate-x-2.5 translate-y-3.5 -rotate-3 rounded-2xl scale-[77%]",
    size: "w-24 h-24 ss:w-28 ss:h-28 sm:w-32 sm:h-32",
    padding: "p-1 scale-[123%]",
  },
  {
    id: "linkedinAds",
    issuer: "Cibernàrium",
    logo: cibernariumLogo,
    skillLogo: linkedinSkill,
    translate:
      "translate-x-2.5 translate-y-3.5 -rotate-3 rounded-2xl scale-[77%]",
    size: "w-24 h-24 ss:w-28 ss:h-28 sm:w-32 sm:h-32",
    padding: "p-1 scale-[123%]",
  },
  {
    id: "firstCertificate",
    issuer: "Escola d'Idiomes de Montgat",
    logo: firstLogo,
    skillLogo: cambridgeSkill,
    translate:
      "translate-x-1.5 translate-y-2 lg:translate-y-6 -rotate-12 scale-125",
    size: "w-24 h-24 ss:w-[90px] ssm:w-[100px]",
    padding: "p-1",
  },
];

export default certificationData;
