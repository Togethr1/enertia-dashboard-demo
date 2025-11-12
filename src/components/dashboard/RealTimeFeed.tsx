import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, Check, ArrowRight, Zap, X } from 'lucide-react'

interface CallRecord {
  id: string
  time: string
  caller: string
  intent: string
  outcome: string
  transcript: string
  status: 'success' | 'forwarded' | 'recovered'
}

const RealTimeFeed = () => {
  const [selectedCall, setSelectedCall] = useState<CallRecord | null>(null)

  const callData: CallRecord[] = [
    {
      id: '1',
      time: '14:23:15',
      caller: 'Sarah Johnson',
      intent: 'Appointment Booking',
      outcome: 'Booked for Tuesday 2PM',
      transcript: 'Hi, I\'d like to schedule an appointment for a consultation. Tuesday afternoon would be perfect if you have anything available.',
      status: 'success'
    },
    {
      id: '2',
      time: '14:18:42',
      caller: 'Mike Chen',
      intent: 'Service Inquiry',
      outcome: 'Info provided',
      transcript: 'I\'m interested in your premium package. Can you tell me more about what\'s included and the pricing?',
      status: 'success'
    },
    {
      id: '3',
      time: '14:15:31',
      caller: 'Unlisted',
      intent: 'Complex Query',
      outcome: 'Transferred to specialist',
      transcript: 'I have a very specific technical question about your advanced features that requires specialized knowledge.',
      status: 'forwarded'
    },
    {
      id: '4',
      time: '14:12:08',
      caller: 'Jennifer Martinez',
      intent: 'Billing Question',
      outcome: 'Resolved via SMS follow-up',
      transcript: 'I missed your call about my billing question, but I got the SMS with the answer. Thank you!',
      status: 'recovered'
    },
    {
      id: '5',
      time: '14:09:17',
      caller: 'David Wilson',
      intent: 'Cancellation',
      outcome: 'Retention successful',
      transcript: 'I was thinking about canceling, but after discussing the new features, I\'d like to stay. Thanks for the help.',
      status: 'success'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <Check className="w-4 h-4 text-green-400" />
      case 'forwarded':
        return <ArrowRight className="w-4 h-4 text-yellow-400" />
      case 'recovered':
        return <Zap className="w-4 h-4 text-cyan-400" />
      default:
        return <Check className="w-4 h-4 text-green-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400'
      case 'forwarded':
        return 'text-yellow-400'
      case 'recovered':
        return 'text-cyan-400'
      default:
        return 'text-green-400'
    }
  }

  return (
    <>
      <section>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-6 gradient-text"
        >
          Real-Time Feed
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="cyberpunk-card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="text-left py-3 px-4 text-sm text-purple-400 uppercase tracking-wider">TIME</th>
                  <th className="text-left py-3 px-4 text-sm text-purple-400 uppercase tracking-wider">CALLER</th>
                  <th className="text-left py-3 px-4 text-sm text-purple-400 uppercase tracking-wider">INTENT</th>
                  <th className="text-left py-3 px-4 text-sm text-purple-400 uppercase tracking-wider">OUTCOME</th>
                  <th className="text-left py-3 px-4 text-sm text-purple-400 uppercase tracking-wider">TRANSCRIPT</th>
                  <th className="text-left py-3 px-4 text-sm text-purple-400 uppercase tracking-wider">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {callData.map((call, index) => (
                  <motion.tr
                    key={call.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-b border-gray-800 hover:bg-purple-500/5 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm text-cyan-400">{call.time}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{call.caller}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{call.intent}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{call.outcome}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => setSelectedCall(call)}
                        className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border border-purple-500/30 rounded px-3 py-1 text-sm transition-all"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Transcript</span>
                      </button>
                    </td>
                    <td className="py-3 px-4">
                      <div className={`flex items-center space-x-2 ${getStatusColor(call.status)}`}>
                        {getStatusIcon(call.status)}
                        <span className="text-sm capitalize">{call.status}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Terminal cursor animation */}
          <div className="px-4 py-3 border-t border-purple-500/30 bg-black/40">
            <div className="text-sm text-purple-400/60">
              System running...
            </div>
          </div>
        </motion.div>
      </section>

      {/* Transcript Modal */}
      {selectedCall && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-black border-2 border-purple-500/50 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-purple-500/30">
              <div>
                <h3 className="text-xl font-bold gradient-text">Call Transcript</h3>
                <p className="text-sm text-gray-400 mt-1">{selectedCall.time} | {selectedCall.caller}</p>
              </div>
              <button
                onClick={() => setSelectedCall(null)}
                className="p-2 hover:bg-purple-500/20 rounded transition-colors"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-purple-400 uppercase tracking-wide">Intent</div>
                  <div className="text-gray-300">{selectedCall.intent}</div>
                </div>
                <div>
                  <div className="text-sm text-purple-400 uppercase tracking-wide">Outcome</div>
                  <div className="text-gray-300">{selectedCall.outcome}</div>
                </div>
              </div>

              <div>
                <div className="text-sm  text-purple-400 uppercase tracking-wide mb-2">Status</div>
                <div className={`flex items-center space-x-2 ${getStatusColor(selectedCall.status)}`}>
                  {getStatusIcon(selectedCall.status)}
                  <span className="capitalize">{selectedCall.status}</span>
                </div>
              </div>

              <div>
                <div className="text-sm  text-purple-400 uppercase tracking-wide mb-2">Transcript</div>
                <div className="bg-gray-900/50 border border-purple-500/30 rounded p-4">
                  <p className="text-gray-300 leading-relaxed">{selectedCall.transcript}</p>
                </div>
              </div>

              <div>
                <div className="text-sm  text-purple-400 uppercase tracking-wide mb-2">Next Step</div>
                <div className="text-sm text-gray-400">
                  {selectedCall.status === 'success' && '✓ Call completed successfully'}
                  {selectedCall.status === 'forwarded' && '→ Follow-up required by specialist'}
                  {selectedCall.status === 'recovered' && '⚡ Customer re-engaged via SMS'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default RealTimeFeed