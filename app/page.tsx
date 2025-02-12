"use client"

import { motion } from "framer-motion"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Button from "./components/Button"
import HeroSection from "./components/HeroSection"
import { FaBrain, FaCube, FaVrCardboard, FaRobot } from "react-icons/fa"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 max-w-[100vw] overflow-x-hidden">
      <Header />
      <main className="relative w-full">
        <HeroSection />

        {/* Challenge Section with 3D Tilt Effect */}
        <motion.section 
          className="relative w-full py-12 md:py-20 px-4 overflow-hidden"
          {...fadeInUp}
        >
          <div className="absolute inset-0 bg-purple-600/5 backdrop-blur-3xl"></div>
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Challenge
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="relative group perspective"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-full h-[400px] transform-gpu transition-transform duration-500 group-hover:rotate-y-12">
                  <img
                    src="/brain-scan.jpg"
                    alt="Complex head and neck anatomy"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl"></div>
                </div>
              </motion.div>
              <div className="space-y-6">
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
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                    <p className="text-lg">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Solution Section with Floating Cards */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Solution
          </h2>
          <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-gray-900 p-6 rounded-2xl h-full">
                  <div className="text-4xl text-purple-400 mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-gray-400">{solution.description}</p>
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
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src="/workflow.jpg"
                    alt="AI-powered surgical assistance workflow"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
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

