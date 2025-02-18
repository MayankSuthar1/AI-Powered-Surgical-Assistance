"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
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

// Update fadeInUp animation with improved viewport options
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { 
    duration: 0.5,
    ease: "easeOut"
  }
}

export default function Home() {
  const isMobile = useIsMobile()

  // Update section variants
  const sectionVariants = isMobile ? {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  } : fadeInUp

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 max-w-[100vw] overflow-x-hidden">
      <Header />
      <main className="relative w-full">
        <CustomCursor />
        <HeroSection />
        <AISection />
        <VisionSection />
        <MissionSection />
        <ResearchSection />
        <ProcessSection />
        <FeaturesSection />
        <GoalsSection />
      </main>
      <Footer />
    </div>
  )
}

