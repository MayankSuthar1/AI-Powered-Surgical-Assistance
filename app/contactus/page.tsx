"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaHome } from "react-icons/fa"

// Add hook for detecting mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

export default function ContactUsPage() {
  const [mounted, setMounted] = useState(false)
  const isMobile = useIsMobile()
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null

  if (isMobile) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
        {/* Mobile Header */}
        <div className="bg-gray-900/80 backdrop-blur-sm px-4 py-6 sticky top-0 z-50">
          <h1 className="text-4xl font-bold text-purple-400 text-center">Get in Touch</h1>
        </div>

        {/* Mobile Content */}
        <div className="px-4 py-6 space-y-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border-l-4 border-purple-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold text-purple-400 mb-2">Our Office</h2>
              <p className="text-gray-300">GEC Modasa, Gujarat, India</p>
              {/* <p className="text-gray-300">Gujarat, India</p> */}
            </motion.div>

            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border-l-4 border-purple-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-purple-400 mb-2">Email</h2>
              <p className="text-gray-300">vaidyanetraai@gmail.com</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border-2 border-purple-500/30 mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button 
                type="submit" 
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <nav className="fixed bottom-2 left-1/2 -translate-x-1/2 bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 shadow-lg z-50">
          <motion.a
            href="/"
            className="flex items-center space-x-2 text-purple-400"
            whileTap={{ scale: 0.95 }}
          >
            <FaHome className="text-xl" />
            <span className="text-sm font-medium">Back Home</span>
          </motion.a>
        </nav>
      </main>
    )
  }

  // Return desktop layout
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 p-8">
      <h1 className="text-5xl font-bold mb-6 text-purple-400 text-center">Get in Touch</h1>
      
      <motion.div 
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
      >
        {/* Left Panel: Info Cards */}
        <div className="flex flex-col justify-center items-center space-y-6">
          <motion.div 
            className="p-6 bg-gray-800 rounded-xl shadow-2xl border-l-4 border-purple-500"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Our Office</h2>
            <p className="text-gray-300">GEC Modasa, Gujarat, India</p>
            {/* <p className="text-gray-300">Gujarat, India</p> */}
          </motion.div>
          <motion.div 
            className="p-6 bg-gray-800 rounded-xl shadow-2xl border-l-4 border-purple-500"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <p className="text-gray-300">vaidyanetraai@gmail.com</p>
          </motion.div>
        </div>
        
        {/* Right Panel: Contact Form */}
        <motion.div 
          className="bg-gray-800 rounded-xl shadow-2xl p-8 border-2 border-purple-500"
          whileHover={{ scale: 1.03 }}
        >
          <form className="space-y-6">
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input 
              type="email" 
              placeholder="Your Email"
              className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <div className="flex justify-center">
              <button 
                type="submit" 
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-10 rounded-full transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
          {/* Remove the animated blob block */}
          {/* (Previously present Framer Motion animated blob has been removed) */}
        </motion.div>
      </motion.div>
      
      {/* Updated Back Home section: positioned fixed at the bottom center */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <a href="/" className="flex items-center text-purple-400 hover:text-purple-600 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-xl font-semibold">Back Home</span>
        </a>
      </div>
    </main>
  )
}
