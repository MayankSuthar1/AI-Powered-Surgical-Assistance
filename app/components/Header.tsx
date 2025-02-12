"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white py-4 fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-400">
          AI Surgery
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-purple-400 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:text-purple-400 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="hover:text-purple-400 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <motion.nav
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" className="hover:text-purple-400 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:text-purple-400 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="hover:text-purple-400 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  )
}

