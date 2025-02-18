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
    <section className="relative w-full py-12 md:py-20 px-4 md:px-0 bg-gradient-to-b from-gray-900 via-[#0c1322] to-[#0c1322]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Our Mission
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-3 md:space-x-4 p-4 md:p-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-2xl md:text-3xl text-purple-400 mt-1">{mission.icon}</div>
              <p className="text-base md:text-lg flex-1">{mission.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
