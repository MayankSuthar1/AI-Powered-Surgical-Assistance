"use client"
import { motion } from "framer-motion"
import { FaBrain, FaUserMd, FaShieldAlt, FaRobot } from "react-icons/fa"

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaBrain />,
      title: "AI-Powered Planning",
      description: "3D modeling of brain tumors and surgical pathways for risk-free exploration"
    },
    {
      icon: <FaUserMd />,
      title: "Medical Education",
      description: "Virtual simulations for studying complex brain anatomy"
    },
    {
      icon: <FaRobot />,
      title: "Deep Learning Integration",
      description: "AI-enhanced MRI and CT analysis for ultra-precise tumor detection"
    },
    {
      icon: <FaShieldAlt />,
      title: "Data Security",
      description: "GDPR & HIPAA compliant encryption and anonymization"
    }
  ]

  return (
    <section className="relative w-full py-12 md:py-20 px-4 md:px-0 bg-gradient-to-b from-[#121926] via-[#151c28] to-[#151c28]">
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
          transition={{ duration: 0.5 }}
        >
          Key Features
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-2xl md:text-3xl text-purple-400 mb-3 md:mb-4">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
