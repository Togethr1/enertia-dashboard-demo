import { motion } from 'framer-motion'
import { FileText, CheckCircle, Clock, Calendar } from 'lucide-react'
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

const FinancialAnalytics = () => {
  // Financial metrics
  const financialMetrics = [
    {
      icon: FileText,
      title: 'Invoices',
      value: '48',
      subtext: 'total this month',
      trend: { value: '12%', isPositive: true }
    },
    {
      icon: CheckCircle,
      title: 'Paid',
      value: '39',
      subtext: 'completed payments',
      trend: { value: '8%', isPositive: true }
    },
    {
      icon: Clock,
      title: 'Pending',
      value: '9',
      subtext: 'awaiting payment',
      trend: { value: '2%', isPositive: false }
    },
    {
      icon: Calendar,
      title: 'Avg Payment Time',
      value: '2.4d',
      subtext: 'days to payment',
      trend: { value: '0.3d', isPositive: false }
    }
  ]

  // Revenue impact data
  const revenueData = [
    { day: 'Mon', captured: 2400, recovered: 800 },
    { day: 'Tue', captured: 3200, recovered: 1200 },
    { day: 'Wed', captured: 2800, recovered: 900 },
    { day: 'Thu', captured: 3600, recovered: 1400 },
    { day: 'Fri', captured: 4200, recovered: 1800 },
    { day: 'Sat', captured: 1800, recovered: 600 },
    { day: 'Sun', captured: 1200, recovered: 400 }
  ]

  // Invoice table data
  const invoiceData = [
    {
      client: 'TechCorp Solutions',
      amount: '$4,850',
      status: 'Paid',
      sentDate: '2024-11-08',
      method: 'ACH'
    },
    {
      client: 'Creative Agency',
      amount: '$2,340',
      status: 'Pending',
      sentDate: '2024-11-09',
      method: 'Credit Card'
    },
    {
      client: 'StartupXYZ',
      amount: '$1,875',
      status: 'Overdue',
      sentDate: '2024-11-05',
      method: 'Wire Transfer'
    },
    {
      client: 'Enterprise Ltd',
      amount: '$6,200',
      status: 'Paid',
      sentDate: '2024-11-07',
      method: 'ACH'
    },
    {
      client: 'Local Business',
      amount: '$950',
      status: 'Pending',
      sentDate: '2024-11-10',
      method: 'Credit Card'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'text-green-400 bg-green-400/20 border-green-400/30'
      case 'Pending':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30'
      case 'Overdue':
        return 'text-red-400 bg-red-400/20 border-red-400/30'
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30'
    }
  }

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl  font-bold mb-6 gradient-text"
      >
        FINANCIAL ANALYTICS
      </motion.h2>

      {/* Financial Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {financialMetrics.map((metric, index) => (
          <KPICard
            key={metric.title}
            {...metric}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Revenue Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cyberpunk-card p-6"
        >
          <h3 className=" text-lg mb-4 text-purple-400">REVENUE IMPACT</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
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
                formatter={(value) => [`$${value}`, '']}
              />
              <Bar dataKey="captured" fill="#3b82f6" name="Captured Revenue" />
              <Bar dataKey="recovered" fill="#06b6d4" name="Recovered Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recovered Revenue Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="cyberpunk-card p-6 flex flex-col justify-center items-center text-center"
        >
          <h3 className=" text-lg mb-4 text-purple-400">RECOVERED REVENUE</h3>

          <div className="mb-6">
            <div className="text-5xl  font-bold gradient-text mb-2">
              $7,840
            </div>
            <p className=" text-sm text-gray-400">
              Revenue automatically recovered
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="text-center">
              <div className=" text-2xl text-cyan-400 mb-1">$39.2K</div>
              <div className=" text-xs text-gray-400">Total Captured</div>
            </div>
            <div className="text-center">
              <div className=" text-2xl text-pink-400 mb-1">21%</div>
              <div className=" text-xs text-gray-400">Recovery Rate</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Invoice Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="cyberpunk-card overflow-hidden"
      >
        <div className="p-6 border-b border-purple-500/30">
          <h3 className=" text-lg text-purple-400">RECENT INVOICES</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="text-left py-3 px-6  text-sm text-purple-400 uppercase tracking-wider">CLIENT</th>
                <th className="text-left py-3 px-6  text-sm text-purple-400 uppercase tracking-wider">AMOUNT</th>
                <th className="text-left py-3 px-6  text-sm text-purple-400 uppercase tracking-wider">STATUS</th>
                <th className="text-left py-3 px-6  text-sm text-purple-400 uppercase tracking-wider">SENT DATE</th>
                <th className="text-left py-3 px-6  text-sm text-purple-400 uppercase tracking-wider">METHOD</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((invoice, index) => (
                <motion.tr
                  key={invoice.client}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="border-b border-gray-800 hover:bg-purple-500/5 transition-colors"
                >
                  <td className="py-4 px-6  text-sm text-gray-300">
                    {invoice.client}
                  </td>
                  <td className="py-4 px-6  text-sm font-bold text-white">
                    {invoice.amount}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full  text-xs border ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-4 px-6  text-sm text-gray-400">
                    {new Date(invoice.sentDate).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6  text-sm text-gray-400">
                    {invoice.method}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  )
}

export default FinancialAnalytics