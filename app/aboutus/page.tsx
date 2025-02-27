"use client"
import { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"
import Button from "../components/Button"
import { FaArrowUp, FaHome, FaChevronDown, FaChevronUp } from "react-icons/fa"
import createScrollSnap from "scroll-snap"
import { Particles } from "@tsparticles/react"
import { type Container, type ISourceOptions } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"
import Link from "next/link"

// Add new hook for detecting mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is typical mobile breakpoint
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

// Add this SVG component at the top of the file after imports
const UserIcon = () => (
  <svg 
    className="w-full h-full text-purple-400"
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
    />
  </svg>
)

export default function AboutUsPage() {
  const containerRef = useRef(null)
  const [showFooter, setShowFooter] = useState(false)
  const isMobile = useIsMobile()

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional: Add any initialization after particles are loaded
  }, [])

  const particlesOptions: ISourceOptions = {
    background: {
      color: "transparent",
    },
    particles: {
      number: { value: 40, density: { enable: true, value_area: 800 } },
      color: { value: "#a855f7" },
      shape: { type: "circle" },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.5,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#a855f7",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.5 } },
        push: { particles_nb: 4 },
      },
    },
  }

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const isNearBottom = scrollTop + clientHeight >= scrollHeight - 50;
        setShowFooter(isNearBottom);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const snapConfig = {
        snapDestinationY: '100vh',
        timeout: 100,
        duration: 800,
        easing: (t: number) => t * (2 - t), // easeOutQuad
        threshold: 0.1
      }
      
      const scrollSnap = createScrollSnap(container, snapConfig, () => {
        // Optional callback after snap
      })

      return () => scrollSnap.unbind()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-900 text-white overflow-y-auto">
        {/* Mobile Hero Section */}
        <section className="min-h-[100svh] relative px-4 py-16 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-purple-900/30 to-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={particlesOptions}
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
          </div>
          
          <motion.h1 
            className="text-6xl sm:text-7xl font-light mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 text-center relative z-10"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
          >
            About Us
          </motion.h1>
        </section>

        {/* Mobile Project Section */}
        <section className="px-4 py-12 bg-gray-900">
          <motion.h2 
            className="text-2xl font-medium mb-6 text-center text-purple-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Vaidya Scan
          </motion.h2>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square"
                >
                  <img 
                    src={`/project-image-${i}.jpg`}
                    alt={`Vaidya Scan Overview ${i}`}
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <p className="text-base leading-relaxed">
                Vaidya Scan is our revolutionary project aimed at transforming cancer diagnosis and surgical planning.
              </p>
              <p className="text-base leading-relaxed text-purple-400 font-semibold">
                We are driven by a clear vision to reduce cancer mortality rates.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mobile Company Section */}
        <section className="px-4 py-12 bg-gray-800">
          <motion.h2 
            className="text-2xl font-medium mb-6 text-center text-purple-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            VaidyaNetra AI
          </motion.h2>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-2">
              {[1, 2].map((i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square"
                >
                  <img 
                    src={`/company-image-${i}.jpg`}
                    alt={`VaidyaNetra AI Overview ${i}`}
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <p className="text-base leading-relaxed">
                <span className="text-purple-400 font-semibold">VaidyaNetra AI</span> empowers medical professionals with visionary AI solutions.
              </p>
              <p className="text-base leading-relaxed">
                Our focus is on enabling surgeons to visualize complex brain structures before surgery.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mobile Team Section */}
        <section className="px-4 py-12 bg-gray-900">
          <motion.h2 
            className="text-2xl font-medium mb-6 text-center text-purple-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Our Team
          </motion.h2>

          <div className="space-y-6 mb-24">
            {[
              {
                name: "Om Patel",
                role: "Founder & CEO",
                description: "I.T. Student at GEC Modasa"
              },
              {
                name: "Mayank Suthar",
                role: "Co-Founder, AI Researcher & Developer",
                description: "I.T. Student at GEC Modasa"
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-4 shadow-lg border-l-4 border-purple-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-400 bg-gray-700 flex items-center justify-center">
                    <img
                      src={`/team-member-${index + 1}.jpg`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('p-3');
                        const svg = document.createElement('div');
                        svg.className = 'w-full h-full';
                        svg.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-full h-full text-purple-400">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                        </svg>`;
                        e.currentTarget.parentElement?.appendChild(svg);
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400">{member.name}</h3>
                    <p className="text-sm text-gray-400">{member.role}</p>
                    <p className="text-sm text-gray-300 mt-1">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mobile Navigation */}
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 shadow-lg z-50">
          <motion.a
            href="/"
            className="flex items-center space-x-2 text-purple-400"
            whileTap={{ scale: 0.95 }}
          >
            <FaHome className="text-xl" />
            <span className="text-sm font-medium">Back Home</span>
          </motion.a>
        </nav>
      </div>
    )
  }

  return (
    <>
      {/* Add fixed header */}
      <header className="fixed top-0 right-2 z-50 p-4">
        <Link 
          href="/" 
          className="text-purple-400 hover:text-purple-600 transition-colors duration-300 text-lg font-medium"
        >
          Home
        </Link>
      </header>

      {/* Rest of the content */}
      <div 
        ref={containerRef}
        className="h-screen overflow-y-auto bg-gray-900 text-white scrollbar-hide"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {/* Section 1: Hero */}
        <section 
          id="section1" 
          className="h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900"
          style={{ scrollSnapAlign: 'start' }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={particlesOptions}
              className="h-full w-full"
            />
            {/* Add gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
          </div>

          {/* Content with enhanced styling - Updated structure */}
          <div className="relative z-10 flex flex-col items-center justify-between h-full w-full px-4 py-20">
            <div className="flex-1 flex flex-col items-center justify-center">
              <motion.div
                className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
              >
                About Us
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.5 }}
              >
                <Button href="#section2">Learn More</Button>
              </motion.div>
            </div>

            {/* Down arrow - Fixed positioning */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <FaChevronDown 
                className="text-4xl text-purple-400 hover:text-purple-600 animate-bounce cursor-pointer" 
                onClick={() => scrollToSection("section2")}
              />
            </motion.div>
          </div>
        </section>

        {/* Section 2: Project Info */}
        <section 
          id="section2" 
          className="h-screen flex flex-col items-center justify-center relative px-4 md:px-8"
          style={{ scrollSnapAlign: 'start' }}
        >
          {/* Up arrow remains the same */}
          <motion.div 
            className="absolute top-8 cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FaChevronUp 
              className="text-4xl text-purple-400 hover:text-purple-600 animate-bounce"
              onClick={() => scrollToSection("section1")}
            />
          </motion.div>

          <motion.h2 
            className="text-3xl font-medium mb-8 text-center text-purple-400"
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            Vaidya Scan
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
            {/* Images Grid - Left side on desktop, top on mobile */}
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src={`/project-image-${i}.jpg`}
                      alt={`Vaidya Scan Overview ${i}`}
                      className="rounded-xl shadow-lg object-cover w-full h-40 md:h-48 transition-all duration-300 hover:shadow-2xl"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Content - Right side on desktop, bottom on mobile */}
            <div className="w-full md:w-1/2">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.3 }}
              >
                <p className="text-lg leading-relaxed">
                  Vaidya Scan is our revolutionary project aimed at transforming cancer diagnosis and surgical planning. We are developing the world's most accurate 3D brain simulation system, powered by advanced AI and radiological imaging.
                </p>
                <p className="text-lg leading-relaxed">
                  Our mission is to save lives by enabling surgeons to visualize complex brain structures before surgery, minimizing risks and preventing complications.
                </p>
                <p className="text-lg leading-relaxed text-purple-400 font-semibold">
                  We are driven by a clear vision to reduce cancer mortality rates by providing precise tumor detection and surgical guidance.
                </p>
                <p className="text-lg leading-relaxed italic">
                  Vaidya Scan is not just technology—it's hope for a cancer-free future.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Down arrow remains the same */}
          <motion.div 
            className="absolute bottom-8 cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FaChevronDown 
              className="text-4xl text-purple-400 hover:text-purple-600 animate-bounce"
              onClick={() => scrollToSection("section3")}
            />
          </motion.div>
        </section>

        {/* Section 3: Company Info */}
        <section 
          id="section3" 
          className="h-screen flex flex-col items-center justify-center relative px-4 md:px-8"
          style={{ scrollSnapAlign: 'start' }}
        >
          {/* Up arrow */}
          <motion.div 
            className="absolute top-8 cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FaChevronUp 
              className="text-4xl text-purple-400 hover:text-purple-600 animate-bounce"
              onClick={() => scrollToSection("section2")}
            />
          </motion.div>

          <motion.h2 
            className="text-3xl font-medium mb-8 text-center text-purple-400"
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            VaidyaNetra AI
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src={`/company-image-${i}.jpg`}
                      alt={`VaidyaNetra AI Overview ${i}`}
                      className="rounded-xl shadow-lg object-cover w-full h-40 md:h-48 transition-all duration-300 hover:shadow-2xl"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.3 }}
              >
                <p className="text-lg leading-relaxed">
                  <span className="text-purple-400 font-semibold">VaidyaNetra AI</span>, inspired by the Sanskrit words "Vaidya" meaning "doctor" and "Netra" meaning "vision," represents our mission to empower medical professionals with visionary AI solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  We specialize in advanced cancer detection and 3D brain simulation, using cutting-edge deep learning algorithms to deliver highly accurate medical imaging analysis.
                </p>
                <p className="text-lg leading-relaxed">
                  Our main focus is on enabling surgeons to visualize complex brain structures before surgery, reducing risks and enhancing patient outcomes.
                </p>
                <p className="text-lg leading-relaxed text-purple-400 italic">
                  Looking ahead, we aim to revolutionize healthcare by expanding into multi-cancer detection and real-time surgical assistance, ensuring precision and safety for every patient.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bottom up arrow */}
          <motion.div 
            className="absolute bottom-8 cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FaChevronDown 
              className="text-4xl text-purple-400 hover:text-purple-600 animate-bounce"
              onClick={() => scrollToSection("section4")}
            />
          </motion.div>
        </section>

        {/* Section 4: Team */}
        <section 
          id="section4" 
          className="h-screen flex flex-col items-center justify-center relative px-4 md:px-8"
          style={{ scrollSnapAlign: 'start' }}
        >
          {/* Up arrow */}
          <motion.div 
            className="absolute top-8 cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FaChevronUp 
              className="text-4xl text-purple-400 hover:text-purple-600 animate-bounce"
              onClick={() => scrollToSection("section3")}
            />
          </motion.div>

          <motion.h2 
            className="text-3xl font-medium mb-8 text-center text-purple-400"
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full">
            {[
              {
                name: "Om Patel",
                role: "Founder & CEO",
                description: "I.T. Student at GEC Modasa"
              },
              {
                name: "Mayank Suthar",
                role: "Co-Founder, AI Researcher & Developer",
                description: "I.T. Student at GEC Modasa"
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-purple-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center mb-4">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-purple-400 bg-gray-700 flex items-center justify-center">
                    <img
                      src={`/team-member-${index + 1}.jpg`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const container = target.parentElement;
                        if (container) {
                          container.classList.add('p-6');
                          const UserIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-full h-full text-purple-400">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                          </svg>`;
                          container.insertAdjacentHTML('beforeend', UserIcon);
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400">{member.name}</h3>
                  <p className="text-gray-400 font-medium">{member.role}</p>
                </div>
                <p className="text-gray-300 text-center">{member.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom up arrow - to go back to top */}
          <motion.div 
            className="absolute bottom-8 cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FaArrowUp 
              className="text-4xl text-purple-400 hover:text-purple-600 animate-bounce"
              onClick={() => scrollToSection("section1")}
            />
          </motion.div>
        </section>
      </div>
    </>
  )
}
