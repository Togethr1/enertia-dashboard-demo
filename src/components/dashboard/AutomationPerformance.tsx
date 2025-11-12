import { motion } from 'framer-motion'
import { MessageSquare, Star, TrendingUp, Mail, Smartphone } from 'lucide-react'
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
  Cell
} from 'recharts'

const AutomationPerformance = () => {
  // Mock data for Follow-up Efficiency
  const followUpData = [
    { day: 'Mon', triggered: 45, responses: 32 },
    { day: 'Tue', triggered: 52, responses: 38 },
    { day: 'Wed', triggered: 41, responses: 29 },
    { day: 'Thu', triggered: 48, responses: 35 },
    { day: 'Fri', triggered: 55, responses: 42 },
    { day: 'Sat', triggered: 28, responses: 18 },
    { day: 'Sun', triggered: 21, responses: 15 }
  ]

  // SMS vs Email breakdown
  const messageChannels = [
    { name: 'SMS', value: 60, color: '#06b6d4' },
    { name: 'Email', value: 40, color: '#a855f7' }
  ]

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl  font-bold mb-6 gradient-text"
      >
        AUTOMATION PERFORMANCE
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Automated Reminders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="cyberpunk-card p-6"
        >
          <div className="flex items-center space-x-2 mb-4">
            <MessageSquare className="w-5 h-5 text-purple-400" />
            <h3 className=" text-lg text-purple-400">AUTOMATED REMINDERS</h3>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className=" text-sm text-gray-300">Messages Sent</span>
              <span className=" text-2xl font-bold gradient-text">33</span>
            </div>

            <div className="flex justify-between items-center">
              <span className=" text-sm text-gray-300">Open Rate</span>
              <span className=" text-xl text-cyan-400">82%</span>
            </div>

            <div className="flex justify-between items-center">
              <span className=" text-sm text-gray-300">Response Rate</span>
              <span className=" text-xl text-cyan-400">47%</span>
            </div>

            {/* Channel Breakdown */}
            <div className="mt-6">
              <h4 className=" text-sm text-purple-400 mb-3">CHANNEL BREAKDOWN</h4>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={messageChannels}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {messageChannels.map((entry, index) => (
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
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center space-x-4 mt-2">
                {messageChannels.map((channel) => (
                  <div key={channel.name} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: channel.color }} />
                    <span className=" text-xs text-gray-300">{channel.name} {channel.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Review Requests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="cyberpunk-card p-6"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-purple-400" />
            <h3 className=" text-lg text-purple-400">REVIEW REQUESTS</h3>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className=" text-sm text-gray-300">Requests Sent</span>
              <span className=" text-2xl font-bold gradient-text">22</span>
            </div>

            <div className="flex justify-between items-center">
              <span className=" text-sm text-gray-300">Reviews Received</span>
              <span className=" text-xl text-cyan-400">17</span>
            </div>

            <div className="flex justify-between items-center">
              <span className=" text-sm text-gray-300">Avg Rating</span>
              <div className="flex items-center space-x-1">
                <span className=" text-xl text-yellow-400">4.8</span>
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className=" text-sm text-gray-300">Response Rate</span>
              <span className=" text-xl text-cyan-400">77%</span>
            </div>

            {/* Progress Bar for Response Rate */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className=" text-xs text-purple-400">RESPONSE PROGRESS</span>
                <span className=" text-xs text-gray-400">17/22</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '77%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Follow-Up Efficiency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="cyberpunk-card p-6"
        >
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <h3 className=" text-lg text-purple-400">FOLLOW-UP EFFICIENCY</h3>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={followUpData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                stroke="#666"
                style={{ fontSize: '10px', fontFamily: 'monospace' }}
                dataKey="day"
              />
              <YAxis
                stroke="#666"
                style={{ fontSize: '10px', fontFamily: 'monospace' }}
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
              <Bar dataKey="triggered" fill="#666" name="Triggered" />
              <Bar dataKey="responses" fill="#06b6d4" name="Responses" />
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-4 pt-4 border-t border-purple-500/30">
            <div className="flex justify-between items-center">
              <span className=" text-sm text-purple-400">AI Success Rate</span>
              <span className=" text-xl font-bold gradient-text">63%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AutomationPerformance