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
    <section className="relative w-full py-12 md:py-20 bg-gradient-to-b from-black via-gray-900 to-gray-900 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Our Vision
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-3 md:space-x-4 bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border-l-4 border-purple-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-2xl md:text-3xl text-purple-400 mt-1">{point.icon}</div>
              <p className="text-base md:text-lg text-gray-300">{point.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          className="mt-12 text-xl text-center text-gray-300 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          "By leveraging the power of AI, medical imaging, and 3D surgical simulation, we are setting a new standard in precision-driven healthcare."
        </motion.blockquote>
      </div>
    </section>
  )
}
