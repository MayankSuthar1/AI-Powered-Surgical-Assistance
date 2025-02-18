"use client"
import { motion } from "framer-motion"
import { FaBrain, FaRobot, FaGlobe } from "react-icons/fa"

export default function AISection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-600/5 backdrop-blur-3xl"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          AI & Intelligence in Medical Imaging
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
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
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl text-purple-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
