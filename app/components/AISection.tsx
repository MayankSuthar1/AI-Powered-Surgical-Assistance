"use client"
import { motion } from "framer-motion"
import { FaBrain, FaRobot, FaGlobe } from "react-icons/fa"

export default function AISection() {
  return (
    <section className="relative w-full py-12 md:py-20 bg-gradient-to-b from-black via-gray-900 to-gray-900 px-4 md:px-0">
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          AI & Intelligence in Medical Imaging
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[
            {
              icon: <FaBrain />,
              title: "Deep Learning",
              description: "AI-driven tumor detection, segmentation, and classification for precise diagnosis"
            },
            {
              icon: <FaRobot />,
              title: "Surgical Simulations",
              description: "Interactive 3D models for surgical exploration and risk prediction"
            },
            {
              icon: <FaGlobe />,
              title: "Global Impact",
              description: "Making advanced surgical tools accessible worldwide"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl text-purple-400 mb-3 md:mb-4">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
