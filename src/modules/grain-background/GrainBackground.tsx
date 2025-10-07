import React, { useEffect, useRef, useCallback } from "react";
import { Gradient, applyGrain } from "@prodbyeagle/grainient";
import { useTheme } from "@/contexts/ThemeContext";

const GrainBackground: React.FC = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  const renderBackground = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (theme === "light") {
      // Light theme
      Gradient(canvas, {
        colors: ["#F5E6D3", "#FAF3E8"],
        type: "linear",
        angle: 50,
      });
      applyGrain(ctx, canvas.width, canvas.height, 30);
    } else {
      // Dark theme
      Gradient(canvas, {
        colors: ["#1e2632", "#171D26", "#171926"],
        type: "linear",
        angle: 55,
      });
      applyGrain(ctx, canvas.width, canvas.height, 5);
    }
  }, [theme]);

  useEffect(() => {
    renderBackground();

    const handleResize = () => {
      renderBackground();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [renderBackground]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
});

GrainBackground.displayName = "GrainBackground";

export default GrainBackground;
