"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"
import { useCursor } from "../context/CursorContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { setIsHovering, setActiveCursor } = useCursor();

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('resize', checkIsMobile)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 cursor-hidden ${
        scrolled 
          ? 'py-2 bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'py-4 bg-transparent'
      }`}
      onMouseEnter={() => setActiveCursor(true)}
      onMouseLeave={() => setActiveCursor(false)}
    >
      <div className="max-w-[100vw] w-full px-4 mx-auto">
        <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
          {/* Logo */}
          <Link href="/" className="interactive">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center">
                <span className="text-white font-bold">VS</span>
              </div>
              <span 
                className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent"
              >
                Vaidya Scan
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { href: "/aboutus", label: "About" },
              { href: "/contactus", label: "Contact" }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="interactive relative px-4 py-2 rounded-lg group hover:bg-gray-800/50 transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10 text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                  {link.label}
                </span>
                <motion.div
                  className="absolute inset-0 rounded-lg bg-purple-500/10 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="interactive md:hidden relative z-50 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300" 
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="text-2xl text-purple-400" />
            ) : (
              <FaBars className="text-2xl text-purple-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 w-full bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 md:hidden"
        >
          <nav className="max-w-screen-2xl mx-auto px-4">
            <ul className="space-y-2 py-4">
              {[
                { href: "/aboutus", label: "About" },
                { href: "/contactus", label: "Contact" }
              ].map((link) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="interactive flex items-center space-x-2 p-3 rounded-lg hover:bg-purple-500/10 text-gray-300 hover:text-purple-400 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <span>{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  )
}