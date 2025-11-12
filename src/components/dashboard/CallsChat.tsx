import { motion } from 'framer-motion'
import { Phone, MessageSquare, Clock, Users } from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts'
import KPICard from './KPICard'

const CallsChat = () => {
  // Mock data for calls & chat
  const callChatMetrics = [
    {
      icon: Phone,
      title: 'Total Calls',
      value: '1,247',
      subtext: 'this week',
      trend: { value: '12%', isPositive: true }
    },
    {
      icon: MessageSquare,
      title: 'Chat Sessions',
      value: '892',
      subtext: 'active conversations',
      trend: { value: '8%', isPositive: true }
    },
    {
      icon: Clock,
      title: 'Avg Response Time',
      value: '2.1 min',
      subtext: 'for chat',
      trend: { value: '0.3 min', isPositive: false }
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      value: '4.7/5',
      subtext: 'average rating',
      trend: { value: '0.2', isPositive: true }
    }
  ]

  const callVolumeData = [
    { time: '9 AM', calls: 12, chats: 8 },
    { time: '10 AM', calls: 25, chats: 15 },
    { time: '11 AM', calls: 35, chats: 22 },
    { time: '12 PM', calls: 42, chats: 28 },
    { time: '1 PM', calls: 38, chats: 31 },
    { time: '2 PM', calls: 45, chats: 33 },
    { time: '3 PM', calls: 32, chats: 25 },
    { time: '4 PM', calls: 28, chats: 19 },
    { time: '5 PM', calls: 18, chats: 12 }
  ]

  const responseTimeData = [
    { day: 'Mon', calls: 2.3, chats: 1.8 },
    { day: 'Tue', calls: 2.1, chats: 2.1 },
    { day: 'Wed', calls: 2.4, chats: 1.9 },
    { day: 'Thu', calls: 2.2, chats: 2.0 },
    { day: 'Fri', calls: 2.0, chats: 2.2 },
    { day: 'Sat', calls: 1.8, chats: 1.7 },
    { day: 'Sun', calls: 1.9, chats: 1.8 }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold gradient-text"
      >
        Calls & Chat Management
      </motion.h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {callChatMetrics.map((metric, index) => (
          <KPICard
            key={metric.title}
            {...metric}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Call Volume Throughout Day */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Daily Volume Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={callVolumeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                dataKey="time"
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
              <Bar dataKey="calls" fill="#a855f7" name="Calls" />
              <Bar dataKey="chats" fill="#06b6d4" name="Chats" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Response Time Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Response Time Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={responseTimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                dataKey="day"
              />
              <YAxis
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#000',
                  border: '1px solid #a855f7',
                  borderRadius: '8px',
                  fontFamily: 'sans-serif',
                  fontSize: '12px'
                }}
                formatter={(value) => [`${value} min`, '']}
              />
              <Line
                type="monotone"
                dataKey="calls"
                stroke="#a855f7"
                strokeWidth={3}
                dot={{ fill: '#a855f7', strokeWidth: 2, r: 4 }}
                name="Call Response"
              />
              <Line
                type="monotone"
                dataKey="chats"
                stroke="#06b6d4"
                strokeWidth={3}
                dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
                name="Chat Response"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Activity Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="cyberpunk-card overflow-hidden"
      >
        <div className="p-6 border-b border-purple-500/30">
          <h3 className="text-lg font-semibold text-purple-400">Recent Communications</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Time</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Type</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Customer</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Subject</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800 hover:bg-purple-500/5 transition-colors">
                <td className="py-4 px-6 text-sm text-cyan-400">2:34 PM</td>
                <td className="py-4 px-6 text-sm text-gray-300">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Call
                </td>
                <td className="py-4 px-6 text-sm text-gray-300">Sarah Johnson</td>
                <td className="py-4 px-6 text-sm text-gray-300">Appointment Scheduling</td>
                <td className="py-4 px-6">
                  <span className="px-2 py-1 rounded-full text-xs text-green-400 bg-green-400/20 border border-green-400/30">
                    Completed
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-400">3m 42s</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-purple-500/5 transition-colors">
                <td className="py-4 px-6 text-sm text-cyan-400">2:28 PM</td>
                <td className="py-4 px-6 text-sm text-gray-300">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Chat
                </td>
                <td className="py-4 px-6 text-sm text-gray-300">Mike Chen</td>
                <td className="py-4 px-6 text-sm text-gray-300">Service Inquiry</td>
                <td className="py-4 px-6">
                  <span className="px-2 py-1 rounded-full text-xs text-yellow-400 bg-yellow-400/20 border border-yellow-400/30">
                    Active
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-400">12m 15s</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-purple-500/5 transition-colors">
                <td className="py-4 px-6 text-sm text-cyan-400">2:22 PM</td>
                <td className="py-4 px-6 text-sm text-gray-300">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Call
                </td>
                <td className="py-4 px-6 text-sm text-gray-300">Emma Wilson</td>
                <td className="py-4 px-6 text-sm text-gray-300">Billing Question</td>
                <td className="py-4 px-6">
                  <span className="px-2 py-1 rounded-full text-xs text-green-400 bg-green-400/20 border border-green-400/30">
                    Completed
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-400">5m 18s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default CallsChat