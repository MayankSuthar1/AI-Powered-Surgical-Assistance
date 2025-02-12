import type React from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-2xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

