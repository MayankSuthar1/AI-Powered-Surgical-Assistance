"use client"
import { motion } from "framer-motion"
import ParticleBackground from "./ParticleBackground"
import { useCursor } from "../context/CursorContext"

export default function HeroSection() {
  const { setIsHovering, setActiveCursor, mousePosition } = useCursor();

  return (
    <motion.section 
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-900/10 to-black overflow-hidden cursor-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onMouseEnter={() => setActiveCursor(true)}
      onMouseLeave={() => setActiveCursor(false)}
    >
      <div className="absolute inset-0">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" 
             style={{
               transform: `translate(${mousePosition?.x * 0.02 || 0}px, ${mousePosition?.y * 0.02 || 0}px)`,
             }}
        />
        <video autoPlay loop muted className="w-full h-full object-cover opacity-40">
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      <div 
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(168, 85, 247, 0)",
                "0 0 0 10px rgba(168, 85, 247, 0.1)",
                "0 0 0 20px rgba(168, 85, 247, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block rounded-full p-2"
          >
            <span className="text-purple-400 text-lg font-medium">AI-Powered Innovation</span>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bringing Clarity to Care
          <motion.span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            animate={{
              backgroundPosition: ["0%", "100%"],
              opacity: [0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            #DetectToDefeat
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Harnessing AI and 3D surgical simulation to redefine neurosurgical precision
        </motion.p>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
    </motion.section>
  )
}

