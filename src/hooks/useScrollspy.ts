import { useState, useEffect } from "react";

export function useScrollspy(ids: string[]) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const sections = ids.map((id) => {
        const element = document.getElementById(id);
        if (!element) return { id, top: 0, bottom: 0 };
        const rect = element.getBoundingClientRect();
        return {
          id,
          top: rect.top + scroll,
          bottom: rect.bottom + scroll,
        };
      });

      const currentSection = sections.reduce((active, section) => {
        if (section.top <= scroll + 100) {
          return section;
        }
        return active;
      });

      setActiveId(currentSection?.id || "");
    };

    listener();
    window.addEventListener("scroll", listener);
    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("scroll", listener);
      window.removeEventListener("resize", listener);
    };
  }, [ids]);

  return activeId;
}
