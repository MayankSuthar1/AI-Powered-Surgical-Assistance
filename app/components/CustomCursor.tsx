"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

// Add this CSS at the top of your component's styles or in your global CSS
const cursorStyles = `
  @media (max-width: 768px) {
    .custom-cursor {
      display: none;
    }
    * {
      cursor: auto !important;
    }
  }
`

export const cursorVariants = {
  default: {
    scale: 1,
    backgroundColor: "rgba(168, 85, 247, 0.1)",
    mixBlendMode: "difference",
  },
  hover: {
    scale: 1.8,
    backgroundColor: "rgba(168, 85, 247, 0.15)",
    mixBlendMode: "screen",
  }
};

export default function CustomCursor() {
  const { cursorX, cursorY, isHovering, isActive } = useCursor();
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  if (!isActive || !isHeroVisible) return null;

  return (
    <>
      <style>{cursorStyles}</style>
      <div className="custom-cursor">
        <motion.div
          className="cursor-main"
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
            zIndex: 999,
            pointerEvents: "none",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: "rgba(168, 85, 247, 0.2)",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(168, 85, 247, 0.3)",
          }}
          variants={cursorVariants}
          animate={isHovering ? "hover" : "default"}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        />

        {/* Cursor trails */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
              zIndex: 998 - i,
              pointerEvents: "none",
              width: `${12 - i * 2}px`,
              height: `${12 - i * 2}px`,
              borderRadius: "50%",
              backgroundColor: `rgba(168, 85, 247, ${0.2 - i * 0.04})`,
              transition: `all ${0.1 + i * 0.04}s ease`,
            }}
          />
        ))}
      </div>
    </>
  );
}
