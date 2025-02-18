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
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Our Vision
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border-l-4 border-purple-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-3xl text-purple-400">{point.icon}</div>
              <p className="text-lg text-gray-300">{point.text}</p>
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
