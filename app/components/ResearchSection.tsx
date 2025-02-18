"use client"
import { motion } from "framer-motion"
import { FaDatabase, FaBrain, FaChartLine } from "react-icons/fa"

export default function ResearchSection() {
  const research = [
    {
      title: "Daily Research & Analysis",
      icon: <FaChartLine />,
      items: [
        "Latest medical imaging datasets from Stanford AIMI, TCIA",
        "AI-driven tumor detection and segmentation techniques",
        "Real-world surgical cases alignment with AI models"
      ]
    },
    {
      title: "Deep Learning & AI Integration",
      icon: <FaBrain />,
      items: [
        "CNNs for high-precision tumor segmentation",
        "Transformer-based architectures for 3D reconstruction",
        "Pre-operative simulations for surgical pathways"
      ]
    },
    {
      title: "Dataset Collection",
      icon: <FaDatabase />,
      items: [
        "500-600 GB of brain and neck medical imaging data",
        "MRI, CT, and PET scans from trusted sources",
        "Open-source and proprietary clinical datasets"
      ]
    }
  ]

  return (
    <motion.section 
      className="relative w-full py-12 md:py-20 px-4 md:px-0 bg-gradient-to-b from-[#0c1322] via-[#0f1724] to-[#0f1724]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Study & Research
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {research.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl md:text-3xl text-purple-400 mb-3 md:mb-4">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.items.map((listItem, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-gray-300">{listItem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
