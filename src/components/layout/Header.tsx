import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useScrollspy } from "@/hooks/useScrollspy";
import {
  Home,
  Briefcase,
  GraduationCap,
  Code,
  FolderOpen,
  User,
  Mail,
  Linkedin,
  Award,
} from "lucide-react";
import ThemeToggle from "@/modules/theme-toggle/ThemeToggle";
import { LanguageSelector } from "@/modules/language-selector/LanguageSelector";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const activeSection = useScrollspy([
    "home",
    "about",
    "education",
    "experience",
    "certifications",
    "skills",
    "projects",
  ]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -50;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "home", icon: Home, label: t("header.home") },
    { id: "about", icon: User, label: t("header.about") },
    { id: "education", icon: GraduationCap, label: t("header.education") },
    { id: "experience", icon: Briefcase, label: t("header.experience") },
    { id: "certifications", icon: Award, label: t("header.certifications") },
    { id: "skills", icon: Code, label: t("header.skills") },
    { id: "projects", icon: FolderOpen, label: t("header.projects") },
  ];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-fit max-w-6xl px-4">
      <Card className="p-2 flex items-center bg-background/80 dark:bg-backgroundPrimaryDark/90 backdrop-blur-sm border-borderLight dark:border-0 drop-shadow-md">
        <nav className="flex items-center space-x-1">
          {navItems.map((item, index) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "flex items-center space-x-1",
                index === 0 ? "" : "hidden sm:flex",
                activeSection !== item.id &&
                  "hover:bg-hoverBackgroundLight/60 dark:hover:bg-hoverBackgroundDark"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span className="sr-only lg:not-sr-only">
                <p className="whitespace-nowrap">{item.label}</p>
              </span>
            </Button>
          ))}
        </nav>
        <div className="flex items-center">
          <Separator
            orientation="vertical"
            className="h-6 mx-2 bg-borderLight/60 dark:bg-zinc-700 rounded"
          />
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-hoverBackgroundLight/60 dark:hover:bg-hoverBackgroundDark"
            asChild
          >
            <a href="mailto:julialuelmorodriguez@gmail.com" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-hoverBackgroundLight/60 dark:hover:bg-hoverBackgroundDark"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/júlia-luelmo-rodríguez-0157aa341"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Separator
            orientation="vertical"
            className="h-6 mx-2 bg-borderLight/60 dark:bg-zinc-700 rounded"
          />
          <ThemeToggle />
          <Separator
            orientation="vertical"
            className="h-6 mx-2 bg-borderLight/60 dark:bg-zinc-700 rounded"
          />
          <LanguageSelector />
        </div>
      </Card>
    </header>
  );
};

export default Header;
