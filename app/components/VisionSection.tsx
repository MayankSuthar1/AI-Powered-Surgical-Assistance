"use client"
import { motion } from "framer-motion"
import { FaSearch, FaBrain, FaRocket, FaGlobe } from "react-icons/fa"

export default function VisionSection() {
  const visionPoints = [
    {
      icon: <FaSearch />,
      text: "No life lost due to late cancer detection or surgical uncertainty"
    },
    {
      icon: <FaBrain />,
      text: "Empowering surgeons with AI-driven 3D anatomical simulations"
    },
    {
      icon: <FaRocket />,
      text: "Bridging the gap between medical imaging and real-time surgical planning"
    },
    {
      icon: <FaGlobe />,
      text: "Ensuring accessibility to world-class cancer detection technologies"
    }
  ]

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-[#0f1724] via-[#121926] to-[#121926]">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Vision
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-4 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border-l-4 border-purple-500 hover:bg-gray-700/50 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl text-purple-400">{point.icon}</div>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          className="mt-12 text-lg md:text-xl text-center text-gray-300 italic px-4 md:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          "By leveraging the power of AI, medical imaging, and 3D surgical simulation, we are setting a new standard in precision-driven healthcare."
        </motion.blockquote>
      </motion.div>
    </section>
  )
}
