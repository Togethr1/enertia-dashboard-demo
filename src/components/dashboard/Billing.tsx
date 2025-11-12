import { motion } from 'framer-motion'
import { CreditCard, DollarSign, TrendingUp, Download, FileText, AlertCircle } from 'lucide-react'
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

const Billing = () => {
  const billingMetrics = [
    {
      icon: DollarSign,
      title: 'Monthly Revenue',
      value: '$24,750',
      subtext: 'current month',
      trend: { value: '18%', isPositive: true }
    },
    {
      icon: CreditCard,
      title: 'Active Subscriptions',
      value: '147',
      subtext: 'paying clients',
      trend: { value: '7%', isPositive: true }
    },
    {
      icon: TrendingUp,
      title: 'Avg Revenue per User',
      value: '$168',
      subtext: 'monthly ARPU',
      trend: { value: '12%', isPositive: true }
    },
    {
      icon: AlertCircle,
      title: 'Churn Rate',
      value: '2.3%',
      subtext: 'monthly churn',
      trend: { value: '0.5%', isPositive: false }
    }
  ]

  const monthlyRevenue = [
    { month: 'Jan', revenue: 18500, subscriptions: 125 },
    { month: 'Feb', revenue: 19200, subscriptions: 128 },
    { month: 'Mar', revenue: 20100, subscriptions: 132 },
    { month: 'Apr', revenue: 21800, subscriptions: 138 },
    { month: 'May', revenue: 22900, subscriptions: 142 },
    { month: 'Jun', revenue: 24750, subscriptions: 147 }
  ]

  const planDistribution = [
    { name: 'Basic Plan', value: 45, color: '#06b6d4', price: '$99/mo' },
    { name: 'Professional', value: 35, color: '#a855f7', price: '$199/mo' },
    { name: 'Enterprise', value: 15, color: '#ec4899', price: '$399/mo' },
    { name: 'Custom', value: 5, color: '#f59e0b', price: '$999/mo' }
  ]

  const recentTransactions = [
    {
      id: 'TXN-2024-1156',
      client: 'Acme Corp',
      plan: 'Enterprise',
      amount: '$399.00',
      date: 'Nov 10, 2025',
      status: 'Paid'
    },
    {
      id: 'TXN-2024-1155',
      client: 'TechStart Inc',
      plan: 'Professional',
      amount: '$199.00',
      date: 'Nov 10, 2025',
      status: 'Paid'
    },
    {
      id: 'TXN-2024-1154',
      client: 'Digital Agency Co',
      plan: 'Basic Plan',
      amount: '$99.00',
      date: 'Nov 9, 2025',
      status: 'Pending'
    },
    {
      id: 'TXN-2024-1153',
      client: 'StartupXYZ',
      plan: 'Professional',
      amount: '$199.00',
      date: 'Nov 9, 2025',
      status: 'Failed'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'text-green-400 bg-green-400/20 border-green-400/30'
      case 'Pending':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30'
      case 'Failed':
        return 'text-red-400 bg-red-400/20 border-red-400/30'
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30'
    }
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
        Billing & Revenue Management
      </motion.h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {billingMetrics.map((metric, index) => (
          <KPICard
            key={metric.title}
            {...metric}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Revenue Growth Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                dataKey="month"
              />
              <YAxis
                stroke="#666"
                style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#000',
                  border: '1px solid #a855f7',
                  borderRadius: '8px',
                  fontFamily: 'sans-serif',
                  fontSize: '12px'
                }}
                formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#06b6d4"
                strokeWidth={3}
                dot={{ fill: '#06b6d4', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: '#06b6d4', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Plan Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Subscription Plans</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={planDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
              >
                {planDistribution.map((entry, index) => (
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
          <div className="space-y-2 mt-4">
            {planDistribution.map((plan) => (
              <div key={plan.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: plan.color }} />
                  <span className="text-gray-300">{plan.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white">{plan.value}%</span>
                  <span className="text-gray-400 text-xs">{plan.price}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Billing Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="cyberpunk-card p-6"
      >
        <h3 className="text-lg font-semibold mb-4 text-purple-400">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg transition-all">
            <FileText className="w-5 h-5 text-purple-400" />
            <span className="text-white">Generate Invoice</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-lg transition-all">
            <Download className="w-5 h-5 text-cyan-400" />
            <span className="text-white">Export Transactions</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 rounded-lg transition-all">
            <CreditCard className="w-5 h-5 text-pink-400" />
            <span className="text-white">Payment Methods</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/30 rounded-lg transition-all">
            <TrendingUp className="w-5 h-5 text-yellow-400" />
            <span className="text-white">Revenue Report</span>
          </button>
        </div>
      </motion.div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="cyberpunk-card overflow-hidden"
      >
        <div className="p-6 border-b border-purple-500/30">
          <h3 className="text-lg font-semibold text-purple-400">Recent Transactions</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Transaction ID</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Client</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Plan</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Amount</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Date</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction, index) => (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="border-b border-gray-800 hover:bg-purple-500/5 transition-colors"
                >
                  <td className="py-4 px-6 text-sm text-cyan-400 font-semibold">{transaction.id}</td>
                  <td className="py-4 px-6 text-sm text-gray-300">{transaction.client}</td>
                  <td className="py-4 px-6 text-sm text-gray-300">{transaction.plan}</td>
                  <td className="py-4 px-6 text-sm text-white font-semibold">{transaction.amount}</td>
                  <td className="py-4 px-6 text-sm text-gray-400">{transaction.date}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded text-xs text-purple-300 transition-all">
                        View
                      </button>
                      <button className="px-3 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded text-xs text-cyan-300 transition-all">
                        Download
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default Billing