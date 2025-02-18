"use client"
import { motion } from "framer-motion"
import { FaBrain, FaMicroscope, FaGlobe, FaCube } from "react-icons/fa"

export default function GoalsSection() {
  const goals = [
    {
      icon: <FaBrain />,
      title: "Enhanced AI Detection",
      description: "Advancing AI-powered cancer detection with deep learning-based microscopic tumor identification"
    },
    {
      icon: <FaMicroscope />,
      title: "Real-time Detection",
      description: "Achieving real-time cancer detection at a cellular level, integrated with AI-powered microscopes"
    },
    {
      icon: <FaGlobe />,
      title: "Expanded Applications",
      description: "Extending AI applications to multiple cancer types beyond head & neck tumors"
    },
    {
      icon: <FaCube />,
      title: "User-friendly Tools",
      description: "Developing intuitive 3D simulation tools for widespread medical adoption"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-600/5 backdrop-blur-3xl"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Our Goals & Future Vision
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-3xl text-purple-400 mb-4">{goal.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-purple-300">{goal.title}</h3>
              <p className="text-gray-300">{goal.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <blockquote className="text-xl text-gray-300 italic">
            "With continuous innovation, we aim to redefine cancer care and save millions of lives."
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
