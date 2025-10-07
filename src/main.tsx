/* eslint-disable react-refresh/only-export-components */
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { setScrollbarWidth } from "@/utils/scrollbarWidth";
import App from "./app/App";

function Root() {
  useEffect(() => {
    setScrollbarWidth();
    window.addEventListener("resize", setScrollbarWidth);
    return () => window.removeEventListener("resize", setScrollbarWidth);
  }, []);

  return (
    <StrictMode>
      <Router basename={import.meta.env.BASE_URL}>
        <App />
      </Router>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
