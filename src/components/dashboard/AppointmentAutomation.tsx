import { motion } from 'framer-motion'
import { Calendar, TrendingDown, Clock } from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import KPICard from './KPICard'

const AppointmentAutomation = () => {
  // Mock data
  const appointmentMetrics = [
    {
      icon: Calendar,
      title: 'Bookings This Week',
      value: '58',
      subtext: 'appointments scheduled',
      trend: { value: '23%', isPositive: true }
    },
    {
      icon: TrendingDown,
      title: 'No-Show Rate',
      value: '4%',
      subtext: 'vs 6% last week',
      trend: { value: '2%', isPositive: false }
    },
    {
      icon: Clock,
      title: 'Time Saved',
      value: '12.3h',
      subtext: 'automation efficiency',
      trend: { value: '18%', isPositive: true }
    }
  ]

  const appointmentsPerDay = [
    { day: 'Mon', appointments: 12 },
    { day: 'Tue', appointments: 8 },
    { day: 'Wed', appointments: 15 },
    { day: 'Thu', appointments: 10 },
    { day: 'Fri', appointments: 9 },
    { day: 'Sat', appointments: 3 },
    { day: 'Sun', appointments: 1 }
  ]

  const funnelData = [
    { stage: 'Calls', value: 100, color: '#a855f7', actual: '1,234' },
    { stage: 'Booked', value: 55, color: '#ec4899', actual: '678' },
    { stage: 'Confirmed', value: 47, color: '#3b82f6', actual: '583' },
    { stage: 'Arrived', value: 45, color: '#06b6d4', actual: '560' }
  ]

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold mb-6 gradient-text"
      >
        Appointment Automation
      </motion.h2>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {appointmentMetrics.map((metric, index) => (
          <KPICard
            key={metric.title}
            {...metric}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appointments Booked Per Day */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Appointments Booked Per Day</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={appointmentsPerDay}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                dataKey="day"
              />
              <YAxis
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#000',
                  border: '1px solid #a855f7',
                  borderRadius: '8px',
                  fontFamily: 'sans-serif',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="appointments" fill="url(#appointmentGradient)" />
              <defs>
                <linearGradient id="appointmentGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Booking Funnel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Booking Funnel</h3>
          <div className="space-y-4">
            {funnelData.map((stage, index) => (
              <div key={stage.stage} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">{stage.stage}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-bold">{stage.actual}</span>
                    <span className="text-gray-400">({stage.value}%)</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-8 bg-gray-800 rounded-lg overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${stage.value}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full rounded-lg relative overflow-hidden"
                      style={{ backgroundColor: stage.color }}
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conversion Summary */}
          <div className="mt-6 pt-4 border-t border-purple-500/30">
            <div className="flex justify-between items-center text-sm">
              <span className="text-purple-400">Overall Conversion:</span>
              <span className="text-cyan-400 font-bold">45.4%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AppointmentAutomation