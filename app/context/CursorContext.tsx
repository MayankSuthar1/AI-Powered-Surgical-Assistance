"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useSpring } from 'framer-motion';

interface CursorContextType {
  cursorX: any;
  cursorY: any;
  isHovering: boolean;
  setIsHovering: (value: boolean) => void;
  setActiveCursor: (value: boolean) => void;
  isActive: boolean;
  mousePosition: { x: number; y: number };
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setActiveCursor] = useState(false);
  const cursorX = useSpring(0, { stiffness: 1000, damping: 50 });
  const cursorY = useSpring(0, { stiffness: 1000, damping: 50 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <CursorContext.Provider value={{ 
      cursorX, 
      cursorY, 
      isHovering, 
      setIsHovering,
      isActive,
      setActiveCursor,
      mousePosition
    }}>
      {children}
    </CursorContext.Provider>
  );
}

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) throw new Error('useCursor must be used within a CursorProvider');
  return context;
};
