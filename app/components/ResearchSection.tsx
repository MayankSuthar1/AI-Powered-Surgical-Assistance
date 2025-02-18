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
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Study & Research
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {research.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-3xl text-purple-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
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
    </section>
  )
}
