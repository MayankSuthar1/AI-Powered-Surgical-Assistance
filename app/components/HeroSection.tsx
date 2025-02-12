"use client"

import { motion } from "framer-motion"
import Button from "./Button"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/placeholder.svg?height=1080&width=1920" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI-Powered Assistance for
          <br />
          <span className="text-purple-400">Head and Neck Cancer Surgery</span>
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Enhancing surgical precision and training with AI and 3D simulations
        </motion.p>
        
      </div>
    </section>
  )
}

