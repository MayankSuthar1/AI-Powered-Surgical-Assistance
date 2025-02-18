import { useState, useEffect } from 'react';
import { useSpring } from 'framer-motion';

export const useCursor = (sectionActive: boolean) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useSpring(0, { stiffness: 1000, damping: 50 });
  const cursorY = useSpring(0, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionActive) return;
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY, sectionActive]);

  return {
    mousePosition,
    isHovering,
    setIsHovering,
    cursorX,
    cursorY,
  };
};

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
