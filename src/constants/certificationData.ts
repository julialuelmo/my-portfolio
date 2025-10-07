import placeholderLogo from "@/assets/images/placeholder-logo.svg";
import placeholderSkill from "@/assets/images/placeholder-skill.svg";

const certificationData = [
  {
    id: "dataAnalysis",
    issuer: "Open Learning Lab",
    credentialId: "TEMPLATE-001",
    credentialLink: "https://example.com/certificates/data-visualization",
    logo: placeholderLogo,
    skillLogo: placeholderSkill,
    translate: "translate-x-2 translate-y-2 -rotate-12",
    size: "w-24 h-24 ss:w-28 ss:h-28 sm:w-32 sm:h-32",
    padding: "py-[6px]",
  },
  {
    id: "google1",
    issuer: "Design Playground",
    credentialId: "TEMPLATE-002",
    credentialLink: "https://example.com/certificates/html-css",
    logo: placeholderLogo,
    skillLogo: placeholderSkill,
    translate: "translate-x-1 translate-y-3 -rotate-8",
    size: "w-24 h-24 ss:w-28 ss:h-28 sm:w-32 sm:h-32",
  },
  {
    id: "google2",
    issuer: "Design Playground",
    credentialId: "TEMPLATE-003",
    credentialLink: "https://example.com/certificates/responsive-design",
    logo: placeholderLogo,
    skillLogo: placeholderSkill,
    translate: "translate-x-1 translate-y-3 -rotate-8",
    size: "w-24 h-24 ss:w-28 ss:h-28 sm:w-32 sm:h-32",
  },
  {
    id: "pcep",
    issuer: "Code Institute",
    credentialId: "TEMPLATE-004",
    credentialLink: "https://example.com/certificates/python",
    logo: placeholderLogo,
    skillLogo: placeholderSkill,
    translate: "translate-x-3 translate-y-4 -rotate-10",
    size: "w-28 h-28 sm:w-36 sm:h-36",
  },
  {
    id: "b2",
    issuer: "Language Lab",
    logo: placeholderLogo,
    skillLogo: placeholderSkill,
    translate: "-translate-x-1 translate-y-3 -rotate-6",
    size: "w-24 h-24 ss:w-[90px] ssm:w-[100px]",
  },
];

export default certificationData;
