import { motion } from 'framer-motion'
import React from 'react'

interface KPICardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  subtext: string
  trend: {
    value: string
    isPositive: boolean
  }
  delay?: number
}

const KPICard = ({ icon: Icon, title, value, subtext, trend, delay = 0 }: KPICardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="cyberpunk-card p-6 relative overflow-hidden group"
    >

      {/* Icon */}
      <div className="flex items-start justify-between mb-4">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-2 rounded-lg">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>

        {/* Trend badge */}
        <div className={`px-2 py-1 rounded-full text-xs  ${
          trend.isPositive
            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
            : 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
        }`}>
          {trend.isPositive ? '+' : ''}{trend.value}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-gray-300  text-sm uppercase tracking-wide">
          {title}
        </h3>
        <div className="text-3xl  font-bold gradient-text">
          {value}
        </div>
        <p className="text-gray-400  text-xs">
          {subtext}
        </p>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

export default KPICard