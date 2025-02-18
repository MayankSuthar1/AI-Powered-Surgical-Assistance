"use client"
import { motion } from "framer-motion"
import { FaDatabase, FaRobot, FaCube, FaVrCardboard } from "react-icons/fa"

export default function ProcessSection() {
  const processes = [
    {
      icon: <FaDatabase />,
      title: "Data Collection & Preprocessing",
      steps: [
        "High-resolution CT, MRI, and PET scans",
        "Image enhancement using SimpleITK and OpenCV",
        "Skull-stripping and intensity normalization"
      ]
    },
    {
      icon: <FaRobot />,
      title: "AI-Driven Segmentation",
      steps: [
        "U-Net and MONAI models for segmentation",
        "Dice Score & Jaccard Index validation",
        "Post-processing for anatomical accuracy"
      ]
    },
    {
      icon: <FaCube />,
      title: "3D Reconstruction",
      steps: [
        "2D slices to 3D models conversion",
        "Detailed mapping of vessels and nerves",
        "Texture rendering and shading"
      ]
    },
    {
      icon: <FaVrCardboard />,
      title: "Interactive Training",
      steps: [
        "Real-time 3D interaction",
        "Multi-touch controls & slicing",
        "AI-driven risk assessment"
      ]
    }
  ]

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-[#0f1724] via-[#121926] to-[#121926]">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              className="group relative min-h-[300px] md:h-[380px] perspective-1000"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute inset-2 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              <div className="relative h-full transform-gpu transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-gray-900/90 rounded-xl"></div>
                <div className="absolute inset-0.5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl"></div>
                
                <div className="relative h-full p-4 md:p-6 flex flex-col">
                  <div className="flex items-center space-x-4 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl md:text-2xl">
                      {process.icon}
                    </div>
                    <span className="text-base md:text-lg font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                      {process.title}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 md:space-y-3 relative">
                    {process.steps.map((step, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (i * 0.1) }}
                        className="text-sm md:text-base text-gray-300 flex items-start group/item"
                        viewport={{ once: true }}
                      >
                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-purple-400 mr-2 md:mr-3 flex-shrink-0 group-hover/item:bg-pink-400 transition-colors"></span>
                        <span className="group-hover/item:text-white transition-colors">{step}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-purple-400/50 text-lg md:text-xl">0{index + 1}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
