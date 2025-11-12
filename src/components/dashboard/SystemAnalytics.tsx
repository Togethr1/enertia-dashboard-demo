import { motion } from 'framer-motion'
import { MessageSquare, Cpu, Clock, TrendingUp, Star, Phone, Smartphone, Monitor } from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import KPICard from './KPICard'

const SystemAnalytics = () => {
  // System metrics
  const systemMetrics = [
    {
      icon: MessageSquare,
      title: 'Conversations',
      value: '128',
      subtext: 'total interactions',
      trend: { value: '15%', isPositive: true }
    },
    {
      icon: Cpu,
      title: 'AI Handling',
      value: '86%',
      subtext: 'automation rate',
      trend: { value: '3%', isPositive: true }
    },
    {
      icon: Clock,
      title: 'Hours Saved',
      value: '48h',
      subtext: 'this week',
      trend: { value: '22%', isPositive: true }
    },
    {
      icon: TrendingUp,
      title: 'ROI',
      value: '+312%',
      subtext: 'return on investment',
      trend: { value: '18%', isPositive: true }
    },
    {
      icon: Star,
      title: 'CSAT',
      value: '4.8/5',
      subtext: 'customer satisfaction',
      trend: { value: '0.2', isPositive: true }
    }
  ]

  // Activity trends data
  const activityTrends = [
    { day: 'Mon', calls: 156, chats: 89, appointments: 12 },
    { day: 'Tue', calls: 189, chats: 102, appointments: 8 },
    { day: 'Wed', calls: 178, chats: 95, appointments: 15 },
    { day: 'Thu', calls: 203, chats: 118, appointments: 10 },
    { day: 'Fri', calls: 234, chats: 134, appointments: 9 },
    { day: 'Sat', calls: 98, chats: 67, appointments: 3 },
    { day: 'Sun', calls: 76, chats: 45, appointments: 1 }
  ]

  // Channel breakdown data
  const channelData = [
    { channel: 'Phone', percentage: 52, calls: 1234 },
    { channel: 'SMS', percentage: 31, calls: 734 },
    { channel: 'Web Chat', percentage: 17, calls: 402 }
  ]

  // ROI composition data
  const roiData = [
    { name: 'Time Saved', value: 42, color: '#a855f7' },
    { name: 'Revenue Gained', value: 38, color: '#ec4899' },
    { name: 'Cost Reduced', value: 20, color: '#06b6d4' }
  ]

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl  font-bold mb-6 gradient-text"
      >
        SYSTEM ANALYTICS & ROI
      </motion.h2>

      {/* System Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {systemMetrics.map((metric, index) => (
          <KPICard
            key={metric.title}
            {...metric}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Activity Trends - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="cyberpunk-card p-6 mb-8"
      >
        <h3 className=" text-lg mb-4 text-purple-400">ACTIVITY TRENDS</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={activityTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis
              stroke="#666"
              style={{ fontSize: '12px', fontFamily: 'monospace' }}
              dataKey="day"
            />
            <YAxis
              stroke="#666"
              style={{ fontSize: '12px', fontFamily: 'monospace' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#000',
                border: '1px solid #a855f7',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '12px'
              }}
            />
            <Line
              type="monotone"
              dataKey="calls"
              stroke="#a855f7"
              strokeWidth={3}
              dot={{ fill: '#a855f7', strokeWidth: 2, r: 4 }}
              name="Calls"
            />
            <Line
              type="monotone"
              dataKey="chats"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
              name="Chats"
            />
            <Line
              type="monotone"
              dataKey="appointments"
              stroke="#ec4899"
              strokeWidth={3}
              dot={{ fill: '#ec4899', strokeWidth: 2, r: 4 }}
              name="Appointments"
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full" />
            <span className=" text-sm text-gray-300">Calls</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-cyan-500 rounded-full" />
            <span className=" text-sm text-gray-300">Chats</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-pink-500 rounded-full" />
            <span className=" text-sm text-gray-300">Appointments</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Channel Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="cyberpunk-card p-6"
        >
          <h3 className=" text-lg mb-4 text-purple-400">CHANNEL BREAKDOWN</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={channelData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                type="number"
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'monospace' }}
              />
              <YAxis
                type="category"
                dataKey="channel"
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'monospace' }}
                width={80}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#000',
                  border: '1px solid #a855f7',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '12px'
                }}
                formatter={(value, name) => [name === 'percentage' ? `${value}%` : value, name === 'percentage' ? 'Share' : 'Total Calls']}
              />
              <Bar dataKey="percentage" fill="url(#channelGradient)" />
              <defs>
                <linearGradient id="channelGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* ROI Composition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="cyberpunk-card p-6"
        >
          <h3 className=" text-lg mb-4 text-purple-400">ROI COMPOSITION</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={roiData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {roiData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#000',
                  border: '1px solid #a855f7',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '12px'
                }}
                formatter={(value) => [`${value}%`, '']}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* ROI Legend */}
          <div className="space-y-2 mt-4">
            {roiData.map((item) => (
              <div key={item.name} className="flex items-center justify-between  text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-300">{item.name}</span>
                </div>
                <span className="text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* System Status Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="cyberpunk-card p-6 bg-gradient-to-r from-purple-500/10 to-cyan-500/10"
      >
        <div className="flex justify-center items-center space-x-8  text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400">Uptime: 99.8%</span>
          </div>
          <div className="text-purple-400">|</div>
          <div className="text-cyan-400">Automation Accuracy: 97.6%</div>
          <div className="text-purple-400">|</div>
          <div className="text-pink-400">Model Drift: 0.3%</div>
        </div>
      </motion.div>
    </section>
  )
}

export default SystemAnalytics