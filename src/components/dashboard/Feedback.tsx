import { motion } from 'framer-motion'
import { Star, MessageSquare, TrendingUp, Users, ThumbsUp, ThumbsDown } from 'lucide-react'
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
  PieChart,
  Pie,
  Cell
} from 'recharts'
import KPICard from './KPICard'

const Feedback = () => {
  const feedbackMetrics = [
    {
      icon: Star,
      title: 'Average Rating',
      value: '4.7/5',
      subtext: 'from 234 reviews',
      trend: { value: '0.3', isPositive: true }
    },
    {
      icon: MessageSquare,
      title: 'Total Reviews',
      value: '234',
      subtext: 'this month',
      trend: { value: '18%', isPositive: true }
    },
    {
      icon: ThumbsUp,
      title: 'Satisfaction Rate',
      value: '92%',
      subtext: 'positive feedback',
      trend: { value: '5%', isPositive: true }
    },
    {
      icon: TrendingUp,
      title: 'Response Rate',
      value: '87%',
      subtext: 'customers responding',
      trend: { value: '12%', isPositive: true }
    }
  ]

  const ratingDistribution = [
    { rating: '5 Star', count: 142, percentage: 61 },
    { rating: '4 Star', count: 58, percentage: 25 },
    { rating: '3 Star', count: 21, percentage: 9 },
    { rating: '2 Star', count: 9, percentage: 4 },
    { rating: '1 Star', count: 4, percentage: 1 }
  ]

  const weeklyTrends = [
    { week: 'Week 1', rating: 4.5, reviews: 52 },
    { week: 'Week 2', rating: 4.6, reviews: 61 },
    { week: 'Week 3', rating: 4.7, reviews: 58 },
    { week: 'Week 4', rating: 4.8, reviews: 63 }
  ]

  const sentimentData = [
    { name: 'Very Positive', value: 61, color: '#10b981' },
    { name: 'Positive', value: 25, color: '#06b6d4' },
    { name: 'Neutral', value: 9, color: '#6b7280' },
    { name: 'Negative', value: 4, color: '#f59e0b' },
    { name: 'Very Negative', value: 1, color: '#ef4444' }
  ]

  const recentFeedback = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Excellent service! The AI assistant was very helpful and resolved my issue quickly.',
      date: '2 hours ago',
      category: 'Service Quality'
    },
    {
      name: 'Mike Chen',
      rating: 4,
      comment: 'Good experience overall. The response time could be improved slightly.',
      date: '5 hours ago',
      category: 'Response Time'
    },
    {
      name: 'Emma Wilson',
      rating: 5,
      comment: 'Amazing! The booking process was seamless and the staff was very professional.',
      date: '1 day ago',
      category: 'Booking Experience'
    },
    {
      name: 'John Smith',
      rating: 3,
      comment: 'Average experience. The service was okay but nothing exceptional.',
      date: '1 day ago',
      category: 'General Experience'
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold gradient-text"
      >
        Customer Feedback & Reviews
      </motion.h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {feedbackMetrics.map((metric, index) => (
          <KPICard
            key={metric.title}
            {...metric}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rating Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Rating Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ratingDistribution} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                type="number"
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
              />
              <YAxis
                type="category"
                dataKey="rating"
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                width={60}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#000',
                  border: '1px solid #a855f7',
                  borderRadius: '8px',
                  fontFamily: 'sans-serif',
                  fontSize: '12px'
                }}
                formatter={(value) => [`${value} reviews`, '']}
              />
              <Bar dataKey="count" fill="url(#ratingGradient)" />
              <defs>
                <linearGradient id="ratingGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Weekly Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Weekly Rating Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyTrends}>
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
                dataKey="rating"
                stroke="#06b6d4"
                strokeWidth={3}
                dot={{ fill: '#06b6d4', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: '#06b6d4', strokeWidth: 2 }}
                name="Average Rating"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Sentiment Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="cyberpunk-card p-6"
      >
        <h3 className="text-lg font-semibold mb-4 text-purple-400">Sentiment Analysis</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
              >
                {sentimentData.map((entry, index) => (
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
                formatter={(value) => [`${value}%`, '']}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-3">
            {sentimentData.map((sentiment) => (
              <div key={sentiment.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: sentiment.color }} />
                  <span className="text-gray-300">{sentiment.name}</span>
                </div>
                <span className="text-white font-semibold">{sentiment.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Recent Feedback */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="cyberpunk-card overflow-hidden"
      >
        <div className="p-6 border-b border-purple-500/30">
          <h3 className="text-lg font-semibold text-purple-400">Recent Feedback</h3>
        </div>

        <div className="divide-y divide-gray-800">
          {recentFeedback.map((feedback, index) => (
            <motion.div
              key={feedback.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="p-6 hover:bg-purple-500/5 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="font-semibold text-gray-200">{feedback.name}</h4>
                    <div className="flex space-x-1">
                      {renderStars(feedback.rating)}
                    </div>
                  </div>
                  <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                    {feedback.category}
                  </span>
                </div>
                <span className="text-sm text-gray-400">{feedback.date}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{feedback.comment}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Feedback