import React, { useRef, useState, useEffect } from "react";

interface ScrollableContentProps {
  children: React.ReactNode;
  maxHeight?: string;
}

const ScrollableContent: React.FC<ScrollableContentProps> = ({
  children,
  maxHeight = "11rem",
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(false);

  const checkScroll = () => {
    const element = contentRef.current;
    if (element) {
      const isScrollable = element.scrollHeight > element.clientHeight;
      const isScrolledToTop = element.scrollTop === 0;
      const isScrolledToBottom =
        Math.abs(
          element.scrollHeight - element.scrollTop - element.clientHeight
        ) < 1;

      setShowTopFade(isScrollable && !isScrolledToTop);
      setShowBottomFade(isScrollable && !isScrolledToBottom);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  return (
    <div className="relative">
      {showTopFade && (
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-background dark:from-[#1F242E] to-transparent pointer-events-none z-10" />
      )}
      <div
        ref={contentRef}
        className="overflow-y-auto"
        style={{ maxHeight }}
        onScroll={checkScroll}
      >
        {children}
      </div>
      {showBottomFade && (
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background dark:from-[#1F242E] to-transparent pointer-events-none z-10" />
      )}
    </div>
  );
};

export default ScrollableContent;
