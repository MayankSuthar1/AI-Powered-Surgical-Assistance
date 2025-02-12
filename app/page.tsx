"use client"

import { motion } from "framer-motion"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Button from "./components/Button"
import HeroSection from "./components/HeroSection"
import FeatureCard from "./components/FeatureCard"
import { FaBrain, FaCube, FaVrCardboard, FaRobot } from "react-icons/fa"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />

        <motion.section className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Complex head and neck anatomy"
              className="rounded-lg shadow-lg"
            />
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Complex anatomy in the head and neck region</li>
              <li>Limited pre-surgical visualization</li>
              <li>Unexpected challenges during surgery</li>
              <li>High risk of complications</li>
              <li>Lack of effective training tools for surgeons</li>
            </ul>
          </div>
        </motion.section>

        <motion.section className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Our Solution</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<FaBrain className="text-4xl text-purple-400" />}
              title="AI Analysis of Medical Scans"
              description="Process CT/MRI scans to create detailed 3D models of patient anatomy"
            />
            <FeatureCard
              icon={<FaCube className="text-4xl text-purple-400" />}
              title="Interactive 3D Visualization"
              description="Explore virtual models of the surgical area for better planning"
            />
            <FeatureCard
              icon={<FaVrCardboard className="text-4xl text-purple-400" />}
              title="Surgical Simulation"
              description="Practice procedures in a realistic virtual environment"
            />
            <FeatureCard
              icon={<FaRobot className="text-4xl text-purple-400" />}
              title="AI-Driven Guidance"
              description="Receive real-time assistance during surgery to avoid complications"
            />
          </div>
        </motion.section>

        <motion.section className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="AI-powered surgical assistance workflow"
              className="rounded-lg shadow-lg"
            />
            <ol className="list-decimal list-inside space-y-4 text-lg">
              <li>AI processes medical images to create a 3D model</li>
              <li>Surgeons interact with the virtual model for planning</li>
              <li>Real-time AI assistance during surgery</li>
              <li>Training mode for new surgeons to practice safely</li>
            </ol>
          </div>
        </motion.section>

        <motion.section className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>More accurate surgeries</li>
              <li>Lower complication rates</li>
              <li>Better training for new surgeons</li>
              <li>Improved surgeon confidence</li>
            </ul>
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Improved surgical outcomes"
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.section>

        <motion.section id="contact" className="text-center" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-4 text-purple-400">Ready to Transform Cancer Surgery?</h2>
          <p className="mb-8 text-lg">Contact us to learn more about our AI-powered surgical assistance platform.</p>
          <Button href="mailto:info@ai-surgery.com">Contact Us</Button>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}

