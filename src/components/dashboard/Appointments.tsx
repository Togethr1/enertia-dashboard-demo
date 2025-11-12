import { motion } from 'framer-motion'
import { Calendar, Clock, Users, CheckCircle, AlertCircle } from 'lucide-react'
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
import KPICard from './KPICard'

const Appointments = () => {
  const appointmentMetrics = [
    {
      icon: Calendar,
      title: 'Scheduled',
      value: '127',
      subtext: 'this week',
      trend: { value: '15%', isPositive: true }
    },
    {
      icon: CheckCircle,
      title: 'Completed',
      value: '95',
      subtext: '74.8% completion rate',
      trend: { value: '5%', isPositive: true }
    },
    {
      icon: AlertCircle,
      title: 'No-Shows',
      value: '8',
      subtext: '6.3% no-show rate',
      trend: { value: '2%', isPositive: false }
    },
    {
      icon: Clock,
      title: 'Avg Duration',
      value: '32 min',
      subtext: 'per appointment',
      trend: { value: '3 min', isPositive: true }
    }
  ]

  const weeklyAppointments = [
    { day: 'Mon', scheduled: 22, completed: 18, noShow: 2, cancelled: 2 },
    { day: 'Tue', scheduled: 25, completed: 20, noShow: 3, cancelled: 2 },
    { day: 'Wed', scheduled: 28, completed: 24, noShow: 2, cancelled: 2 },
    { day: 'Thu', scheduled: 24, completed: 19, noShow: 3, cancelled: 2 },
    { day: 'Fri', scheduled: 26, completed: 22, noShow: 2, cancelled: 2 },
    { day: 'Sat', scheduled: 12, completed: 10, noShow: 1, cancelled: 1 },
    { day: 'Sun', scheduled: 8, completed: 7, noShow: 0, cancelled: 1 }
  ]

  const appointmentTypes = [
    { name: 'Consultation', value: 42, color: '#a855f7' },
    { name: 'Follow-up', value: 28, color: '#ec4899' },
    { name: 'New Client', value: 20, color: '#06b6d4' },
    { name: 'Emergency', value: 10, color: '#f59e0b' }
  ]

  const upcomingAppointments = [
    {
      time: '3:00 PM',
      client: 'John Smith',
      type: 'Consultation',
      duration: '45 min',
      status: 'Confirmed'
    },
    {
      time: '3:45 PM',
      client: 'Lisa Johnson',
      type: 'Follow-up',
      duration: '30 min',
      status: 'Confirmed'
    },
    {
      time: '4:15 PM',
      client: 'Michael Brown',
      type: 'New Client',
      duration: '60 min',
      status: 'Pending'
    },
    {
      time: '5:00 PM',
      client: 'Sarah Davis',
      type: 'Consultation',
      duration: '45 min',
      status: 'Confirmed'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'text-green-400 bg-green-400/20 border-green-400/30'
      case 'Pending':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30'
      case 'Cancelled':
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
        Appointment Management
      </motion.h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        {/* Weekly Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Weekly Schedule Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyAppointments}>
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
              <Bar dataKey="scheduled" fill="#a855f7" name="Scheduled" />
              <Bar dataKey="completed" fill="#06b6d4" name="Completed" />
              <Bar dataKey="noShow" fill="#f59e0b" name="No-Show" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Appointment Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="cyberpunk-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Appointment Types</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={appointmentTypes}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {appointmentTypes.map((entry, index) => (
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
            {appointmentTypes.map((type) => (
              <div key={type.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: type.color }} />
                  <span className="text-gray-300">{type.name}</span>
                </div>
                <span className="text-white">{type.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Today's Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="cyberpunk-card overflow-hidden"
      >
        <div className="p-6 border-b border-purple-500/30">
          <h3 className="text-lg font-semibold text-purple-400">Today's Schedule</h3>
          <p className="text-sm text-gray-400 mt-1">Wednesday, November 11, 2025</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Time</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Client</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Type</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Duration</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-6 text-sm text-purple-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {upcomingAppointments.map((appointment, index) => (
                <motion.tr
                  key={appointment.client}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="border-b border-gray-800 hover:bg-purple-500/5 transition-colors"
                >
                  <td className="py-4 px-6 text-sm text-cyan-400 font-semibold">{appointment.time}</td>
                  <td className="py-4 px-6 text-sm text-gray-300">{appointment.client}</td>
                  <td className="py-4 px-6 text-sm text-gray-300">{appointment.type}</td>
                  <td className="py-4 px-6 text-sm text-gray-400">{appointment.duration}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded text-xs text-purple-300 transition-all">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded text-xs text-red-300 transition-all">
                        Cancel
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

export default Appointments