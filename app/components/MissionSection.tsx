"use client"
import { motion } from "framer-motion"
import { FaBrain, FaRocket, FaGlobe, FaHospital } from "react-icons/fa"

export default function MissionSection() {
  const missions = [
    {
      icon: <FaBrain />,
      text: "Transforming neurosurgical procedures through AI-powered 3D visualizations"
    },
    {
      icon: <FaRocket />,
      text: "Reducing surgical complications by improving pre-operative planning"
    },
    {
      icon: <FaGlobe />,
      text: "Accelerating early cancer detection with deep learning"
    },
    {
      icon: <FaHospital />,
      text: "Providing advanced medical education tools"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Our Mission
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-3xl text-purple-400">{mission.icon}</div>
              <p className="text-lg">{mission.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
