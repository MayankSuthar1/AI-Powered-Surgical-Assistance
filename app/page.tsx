"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Button from "./components/Button"
import HeroSection from "./components/HeroSection"
import { FaBrain, FaCube, FaVrCardboard, FaRobot } from "react-icons/fa"

// Add mobile detection hook
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}

// Optimize fadeInUp animation
const fadeInUp = {
  initial: { opacity: 0, y: 20 }, // Reduced y distance
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 } // Reduced duration
}

export default function Home() {
  const isMobile = useIsMobile()

  // Optimize section rendering with reduced motion for mobile
  const sectionVariants = isMobile ? {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  } : fadeInUp

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 max-w-[100vw] overflow-x-hidden">
      <Header />
      <main className="relative w-full">
        <HeroSection />
        
        {/* Challenge Section - Optimized for mobile */}
        <motion.section 
          className="relative w-full py-12 md:py-20 px-4 overflow-hidden"
          {...sectionVariants}
        >
          <div className="absolute inset-0 bg-purple-600/5 backdrop-blur-3xl"></div>
          <div className="max-w-screen-2xl mx-auto">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              The Challenge
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div 
                className="relative group perspective"
                whileHover={isMobile ? {} : { scale: 1.02 }}
              >
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <img
                    src="/challenges_img.jpg"
                    alt="Complex head and neck anatomy"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <div className="space-y-4 md:space-y-6">
                {[
                  "Complex anatomy in the head and neck region",
                  "Limited pre-surgical visualization",
                  "Unexpected challenges during surgery",
                  "High risk of complications",
                  "Lack of effective training tools"
                ].map((challenge, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm"
                    initial={isMobile ? { opacity: 0 } : { opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: isMobile ? index * 0.1 : index * 0.2 }}
                  >
                    <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                    <p className="text-base md:text-lg">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Solution Section - Optimized for mobile */}
        <section className="py-12 md:py-20 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Solution
          </h2>
          <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: <FaBrain />,
                title: "AI Analysis",
                description: "Process CT/MRI scans to create detailed 3D models"
              },
              {
                icon: <FaCube />,
                title: "3D Visualization",
                description: "Explore virtual models for better planning"
              },
              {
                icon: <FaVrCardboard />,
                title: "VR Simulation",
                description: "Practice procedures in virtual environment"
              },
              {
                icon: <FaRobot />,
                title: "AI Guidance",
                description: "Real-time assistance during surgery"
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? index * 0.1 : index * 0.2 }}
                whileHover={isMobile ? {} : { y: -10 }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 transition duration-1000 
                  ${isMobile ? "" : "group-hover:opacity-100 group-hover:blur-md"}`}
                ></div>
                <div className="relative bg-gray-900 p-4 md:p-6 rounded-xl h-full">
                  <div className="text-3xl md:text-4xl text-purple-400 mb-3 md:mb-4">{solution.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-sm md:text-base text-gray-400">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works Section with Timeline */}
        <section className="py-12 md:py-20 px-4 md:px-8 relative">
          <div className="absolute inset-0 bg-purple-600/5 backdrop-blur-3xl"></div>
          <div className="max-w-screen-2xl mx-auto relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <svg className="w-full h-[500px]" viewBox="0 0 400 400">
                  {/* Gradient definitions */}
                  <defs>
                    <linearGradient id="connectingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.1"/>
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Animated connection paths */}
                  {[
                    "M 200,80 C 280,80 320,140 320,200",  // Top to Right
                    "M 320,200 C 320,260 280,320 200,320", // Right to Bottom
                    "M 200,320 C 120,320 80,260 80,200",   // Bottom to Left
                    "M 80,200 C 80,140 120,80 200,80"      // Left to Top
                  ].map((path, index) => (
                    <g key={index}>
                      {/* Background glow path */}
                      <motion.path
                        d={path}
                        fill="none"
                        stroke="url(#connectingGradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        filter="url(#glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                      />
                      {/* Animated particles along the path */}
                      <motion.circle
                        r="4"
                        fill="#a855f7"
                        filter="url(#glow)"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          offsetDistance: ["0%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          delay: 2 + index * 0.2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{
                          offsetPath: `path("${path}")`,
                        }}
                      />
                    </g>
                  ))}

                  {/* Central pulsing circle */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="15"
                    className="fill-purple-500/30"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Workflow nodes with enhanced styling */}
                  {[
                    { cx: 200, cy: 80, icon: "🧠", label: "AI Analysis" },
                    { cx: 320, cy: 200, icon: "🔄", label: "Processing" },
                    { cx: 200, cy: 320, icon: "📊", label: "Results" },
                    { cx: 80, cy: 200, icon: "👨‍⚕️", label: "Doctor" }
                  ].map((node, index) => (
                    <motion.g
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.3 + 1, duration: 0.5 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {/* Node background with gradient */}
                      <circle
                        cx={node.cx}
                        cy={node.cy}
                        r="35"
                        className="fill-gray-800/80 stroke-purple-500"
                        strokeWidth="2"
                        filter="url(#glow)"
                      />
                      {/* Icon */}
                      <text
                        x={node.cx}
                        y={node.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-2xl"
                      >
                        {node.icon}
                      </text>
                      {/* Label */}
                      <motion.text
                        x={node.cx}
                        y={node.cy + 50}
                        textAnchor="middle"
                        className="fill-gray-300 text-sm font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 + 1.3 }}
                      >
                        {node.label}
                      </motion.text>
                    </motion.g>
                  ))}
                </svg>
              </motion.div>
              <div className="space-y-8">
                {[
                  "AI processes medical images to create a 3D model",
                  "Surgeons interact with the virtual model for planning",
                  "Real-time AI assistance during surgery",
                  "Training mode for new surgeons to practice safely"
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section with Animated Stats */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Benefits
          </h2>
          <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "95%", label: "Accuracy" },
                { value: "60%", label: "Faster Planning" },
                { value: "80%", label: "Risk Reduction" },
                { value: "3X", label: "Training Speed" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                "More accurate surgical procedures",
                "Significantly lower complication rates",
                "Enhanced training for new surgeons",
                "Improved surgeon confidence and performance"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                  <p className="text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          id="contact"
          className="py-12 md:py-20 px-4 md:px-8 text-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Cancer Surgery?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-300">
              Contact us to learn more about our AI-powered surgical assistance platform.
            </p>
            <Button href="/contactus">Contact Us</Button>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}

