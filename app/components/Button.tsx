import Link from "next/link"
import type React from "react"

interface ButtonProps {
  href: string
  children: React.ReactNode
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300 transform hover:scale-105"
    >
      {children}
    </Link>
  )
}

