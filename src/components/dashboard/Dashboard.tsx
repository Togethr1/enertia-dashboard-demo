import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Phone,
  Zap,
  Clock,
  DollarSign,
  Activity,
  Settings,
  Calendar,
  MessageSquare,
  CreditCard,
  BarChart3
} from 'lucide-react'

import DashboardBackground from './DashboardBackground'
import KPICard from './KPICard'
import CallAnalytics from './CallAnalytics'
import RealTimeFeed from './RealTimeFeed'
import AppointmentAutomation from './AppointmentAutomation'
import AutomationPerformance from './AutomationPerformance'
import FinancialAnalytics from './FinancialAnalytics'
import SystemAnalytics from './SystemAnalytics'
import CallsChat from './CallsChat'
import Appointments from './Appointments'
import Feedback from './Feedback'
import Billing from './Billing'
import Analytics from './Analytics'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard')
  const [timeFilter, setTimeFilter] = useState('Today')

  const tabs = [
    { name: 'Dashboard', icon: BarChart3, active: true },
    { name: 'Calls & Chat', icon: Phone, active: true },
    { name: 'Appointments', icon: Calendar, active: true },
    { name: 'Feedback', icon: MessageSquare, active: true },
    { name: 'Billing', icon: CreditCard, active: true },
    { name: 'Analytics', icon: Activity, active: true },
  ]

  const timeFilters = ['Today', '7 Days', '30 Days']

  const kpiData = [
    {
      icon: Phone,
      title: 'Total Calls',
      value: '1,234',
      subtext: 'vs last period',
      trend: { value: '12%', isPositive: true }
    },
    {
      icon: Zap,
      title: 'AI Success Rate',
      value: '89%',
      subtext: 'automated handling',
      trend: { value: '4%', isPositive: true }
    },
    {
      icon: Clock,
      title: 'Avg Resolution',
      value: '2.3 min',
      subtext: 'per interaction',
      trend: { value: '8%', isPositive: false }
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      value: '$1,240',
      subtext: 'this month',
      trend: { value: '15%', isPositive: true }
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated Background */}
      <DashboardBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
              <div>
                <div className="font-bold text-lg gradient-text">ENERTIA</div>
                <div className="text-xs text-gray-400">AI SYSTEMS</div>
              </div>
            </Link>

            {/* System Status */}
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">System Online</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-300">99.8% Uptime</span>
            </div>

            {/* Time Filter */}
            <div className="flex space-x-1">
              {timeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTimeFilter(filter)}
                  className={`px-3 py-1 rounded text-sm transition-all ${
                    timeFilter === filter
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-8 -mb-px">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 text-sm transition-colors ${
                    activeTab === tab.name
                      ? 'border-purple-500 text-purple-400'
                      : 'border-transparent text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'Dashboard' && (
          <div className="space-y-12">
            {/* KPI Overview */}
            <section>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold mb-6 gradient-text"
              >
                KPI Overview
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpiData.map((kpi, index) => (
                  <KPICard
                    key={kpi.title}
                    {...kpi}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </section>

            {/* Call Analytics */}
            <CallAnalytics />

            {/* Real-Time Feed */}
            <RealTimeFeed />

            {/* Appointment Automation */}
            <AppointmentAutomation />

            {/* Automation Performance */}
            <AutomationPerformance />

            {/* Financial Analytics */}
            <FinancialAnalytics />

            {/* System Analytics */}
            <SystemAnalytics />
          </div>
        )}

        {activeTab === 'Calls & Chat' && <CallsChat />}
        {activeTab === 'Appointments' && <Appointments />}
        {activeTab === 'Feedback' && <Feedback />}
        {activeTab === 'Billing' && <Billing />}
        {activeTab === 'Analytics' && <Analytics />}

        {/* Footer */}
        <footer className="border-t border-purple-500/30 pt-8 mt-12">
          <div className="text-center text-purple-400/60 space-y-2">
            <div>──────────────────────────────────────────────</div>
            <div>ENERTIA SYSTEMS v1.7.2 | DEMO MODE</div>
            <div>──────────────────────────────────────────────</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Dashboard