"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Button from "./components/Button"
import HeroSection from "./components/HeroSection"
import MissionSection from "./components/MissionSection"
import ResearchSection from "./components/ResearchSection"
import ProcessSection from "./components/ProcessSection"
import FeaturesSection from "./components/FeaturesSection"
import AISection from "./components/AISection"
import VisionSection from "./components/VisionSection"
import GoalsSection from "./components/GoalsSection"
import CustomCursor from './components/CustomCursor'

// Add mobile detection hook
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}

// Optimize fadeInUp animation
const fadeInUp = {
  initial: { opacity: 0, y: 20 }, // Reduced y distance
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 } // Reduced duration
}

export default function Home() {
  const isMobile = useIsMobile()

  // Optimize section rendering with reduced motion for mobile
  const sectionVariants = isMobile ? {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  } : fadeInUp

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 max-w-[100vw] overflow-x-hidden">
      <Header />
      <main className="relative w-full">
        <CustomCursor />
        <HeroSection />
        <VisionSection />
        <MissionSection />
        <ResearchSection />
        <ProcessSection />
        <FeaturesSection />
        <GoalsSection />
        <AISection />
      </main>
      <Footer />
    </div>
  )
}

