import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Users, Zap, Clock, Target } from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ComposedChart
} from 'recharts'
import KPICard from './KPICard'

const Analytics = () => {
  const analyticsMetrics = [
    {
      icon: BarChart3,
      title: 'Total Interactions',
      value: '15,742',
      subtext: 'this month',
      trend: { value: '23%', isPositive: true }
    },
    {
      icon: TrendingUp,
      title: 'Growth Rate',
      value: '+45%',
      subtext: 'month over month',
      trend: { value: '12%', isPositive: true }
    },
    {
      icon: Users,
      title: 'Active Users',
      value: '2,341',
      subtext: 'unique clients',
      trend: { value: '18%', isPositive: true }
    },
    {
      icon: Target,
      title: 'Goal Achievement',
      value: '87%',
      subtext: 'targets met',
      trend: { value: '5%', isPositive: true }
    }
  ]

  const performanceData = [
    { month: 'Jan', interactions: 8420, users: 1680, revenue: 18500, satisfaction: 4.2 },
    { month: 'Feb', interactions: 9150, users: 1780, revenue: 19200, satisfaction: 4.3 },
    { month: 'Mar', interactions: 10200, users: 1920, revenue: 20100, satisfaction: 4.4 },
    { month: 'Apr', interactions: 11800, users: 2050, revenue: 21800, satisfaction: 4.5 },
    { month: 'May', interactions: 13500, users: 2180, revenue: 22900, satisfaction: 4.6 },
    { month: 'Jun', interactions: 15742, users: 2341, revenue: 24750, satisfaction: 4.7 }
  ]

  const channelPerformance = [
    { channel: 'Phone Calls', volume: 4200, success: 89, efficiency: 95 },
    { channel: 'Live Chat', volume: 6800, success: 92, efficiency: 88 },
    { channel: 'Email', volume: 2100, success: 85, efficiency: 91 },
    { channel: 'Social Media', volume: 1500, success: 78, efficiency: 82 },
    { channel: 'Mobile App', volume: 1142, success: 94, efficiency: 96 }
  ]

  const timeDistribution = [
    { hour: '6 AM', volume: 45 },
    { hour: '7 AM', volume: 89 },
    { hour: '8 AM', volume: 156 },
    { hour: '9 AM', volume: 234 },
    { hour: '10 AM', volume: 298 },
    { hour: '11 AM', volume: 342 },
    { hour: '12 PM', volume: 389 },
    { hour: '1 PM', volume: 365 },
    { hour: '2 PM', volume: 421 },
    { hour: '3 PM', volume: 398 },
    { hour: '4 PM', volume: 356 },
    { hour: '5 PM', volume: 289 },
    { hour: '6 PM', volume: 198 },
    { hour: '7 PM', volume: 123 },
    { hour: '8 PM', volume: 67 }
  ]

  const conversionFunnel = [
    { stage: 'Initial Contact', value: 100, color: '#a855f7' },
    { stage: 'Qualified Lead', value: 75, color: '#ec4899' },
    { stage: 'Proposal Sent', value: 58, color: '#06b6d4' },
    { stage: 'Contract Signed', value: 42, color: '#10b981' },
    { stage: 'Onboarded', value: 38, color: '#f59e0b' }
  ]

  const satisfactionTrend = [
    { week: 'Week 1', satisfaction: 4.3, responses: 156 },
    { week: 'Week 2', satisfaction: 4.4, responses: 178 },
    { week: 'Week 3', satisfaction: 4.5, responses: 192 },
    { week: 'Week 4', satisfaction: 4.7, responses: 201 }
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
        Advanced Analytics Dashboard
      </motion.h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsMetrics.map((metric, index) => (
          <KPICard
            key={metric.title}
            {...metric}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Performance Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="cyberpunk-card p-6"
      >
        <h3 className="text-lg font-semibold mb-4 text-purple-400">Performance Overview</h3>
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis
              stroke="#666"
              style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
              dataKey="month"
            />
            <YAxis
              yAxisId="left"
              stroke="#666"
              style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
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
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="interactions"
              fill="url(#interactionGradient)"
              stroke="#a855f7"
              strokeWidth={2}
              name="Interactions"
            />
            <Bar yAxisId="left" dataKey="users" fill="#06b6d4" name="Users" />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="satisfaction"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
              name="Satisfaction"
            />
            <defs>
              <linearGradient id="interactionGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
              </linearGradient>
            </defs>
          </ComposedChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Channel Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Channel Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={channelPerformance} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                type="number"
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
              />
              <YAxis
                type="category"
                dataKey="channel"
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                width={80}
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
              <Bar dataKey="volume" fill="#a855f7" name="Volume" />
              <Bar dataKey="success" fill="#06b6d4" name="Success Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Hourly Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Hourly Activity Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={timeDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                dataKey="hour"
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
              <Area
                type="monotone"
                dataKey="volume"
                stroke="#ec4899"
                fill="url(#hourlyGradient)"
                strokeWidth={2}
              />
              <defs>
                <linearGradient id="hourlyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Conversion Funnel & Satisfaction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Funnel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Conversion Funnel</h3>
          <div className="space-y-4">
            {conversionFunnel.map((stage, index) => (
              <div key={stage.stage} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">{stage.stage}</span>
                  <span className="text-sm text-white font-semibold">{stage.value}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stage.value}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: stage.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Customer Satisfaction Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Satisfaction Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={satisfactionTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                dataKey="week"
              />
              <YAxis
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                domain={[4.0, 5.0]}
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
              <Line
                type="monotone"
                dataKey="satisfaction"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: '#10b981', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Key Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="cyberpunk-card p-6"
      >
        <h3 className="text-lg font-semibold mb-6 text-purple-400">Key Insights & Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Performance</span>
            </div>
            <p className="text-gray-300 text-sm">Live chat shows highest efficiency at 92% success rate. Consider expanding chat support hours.</p>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Peak Hours</span>
            </div>
            <p className="text-gray-300 text-sm">Peak activity between 12 PM - 3 PM. Consider staff scheduling optimization during these hours.</p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Conversion</span>
            </div>
            <p className="text-gray-300 text-sm">38% final conversion rate suggests strong lead quality. Focus on proposal optimization.</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Analytics