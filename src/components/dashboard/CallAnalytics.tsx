import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts'

const CallAnalytics = () => {
  // Mock data
  const callsByDay = [
    { day: 'Mon', total: 156, aiHandled: 142 },
    { day: 'Tue', total: 189, aiHandled: 168 },
    { day: 'Wed', total: 178, aiHandled: 158 },
    { day: 'Thu', total: 203, aiHandled: 185 },
    { day: 'Fri', total: 234, aiHandled: 208 },
    { day: 'Sat', total: 98, aiHandled: 87 },
    { day: 'Sun', total: 76, aiHandled: 68 }
  ]

  const callOutcomes = [
    { name: 'Handled by AI', value: 89, color: '#a855f7' },
    { name: 'Forwarded to Staff', value: 8, color: '#ec4899' },
    { name: 'Missed → Texted', value: 3, color: '#06b6d4' }
  ]

  const peakHours = [
    { hour: '6AM', calls: 12 },
    { hour: '7AM', calls: 28 },
    { hour: '8AM', calls: 45 },
    { hour: '9AM', calls: 78 },
    { hour: '10AM', calls: 156 },
    { hour: '11AM', calls: 134 },
    { hour: '12PM', calls: 198 },
    { hour: '1PM', calls: 203 },
    { hour: '2PM', calls: 189 },
    { hour: '3PM', calls: 167 },
    { hour: '4PM', calls: 145 },
    { hour: '5PM', calls: 123 },
    { hour: '6PM', calls: 89 },
    { hour: '7PM', calls: 67 },
    { hour: '8PM', calls: 45 },
    { hour: '9PM', calls: 34 },
    { hour: '10PM', calls: 23 }
  ]

  const durationTrend = [
    { day: 'Mon', duration: 2.8 },
    { day: 'Tue', duration: 2.6 },
    { day: 'Wed', duration: 2.4 },
    { day: 'Thu', duration: 2.5 },
    { day: 'Fri', duration: 2.3 },
    { day: 'Sat', duration: 2.1 },
    { day: 'Sun', duration: 2.3 }
  ]

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold mb-6 gradient-text"
      >
        Call Analytics
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calls by Day */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Calls by Day</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={callsByDay}>
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
              <Bar dataKey="total" fill="#a855f7" name="Total Calls" />
              <Bar dataKey="aiHandled" fill="#ec4899" name="AI Handled" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Call Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Call Outcomes</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={callOutcomes}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {callOutcomes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#000',
                  border: '1px solid #a855f7',
                  borderRadius: '8px',
                  fontFamily: 'sans-serif',
                  fontSize: '12px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {callOutcomes.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-300">{item.name}</span>
                </div>
                <span className="text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Peak Call Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Peak Call Hours</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={peakHours} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                type="number"
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
              />
              <YAxis
                type="category"
                dataKey="hour"
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                width={50}
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
              <Bar dataKey="calls" fill="url(#gradient1)" />
              <defs>
                <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Avg Call Duration Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Avg Call Duration Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={durationTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                dataKey="day"
              />
              <YAxis
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                domain={['dataMin - 0.2', 'dataMax + 0.2']}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#000',
                  border: '1px solid #a855f7',
                  borderRadius: '8px',
                  fontFamily: 'sans-serif',
                  fontSize: '12px'
                }}
                formatter={(value) => [`${value} min`, 'Duration']}
              />
              <Line
                type="monotone"
                dataKey="duration"
                stroke="#06b6d4"
                strokeWidth={3}
                dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#06b6d4', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  )
}

export default CallAnalytics