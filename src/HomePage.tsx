import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-6xl font-mono font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              ENERTIA
            </span>
          </h1>
          <h2 className="text-2xl font-mono text-gray-300">AI SYSTEMS</h2>
          <p className="text-gray-400 font-mono max-w-md mx-auto">
            &gt; Computational intelligence for consumer businesses_
          </p>
        </div>

        <Link
          to="/dashboard"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-black font-mono font-bold px-8 py-4 rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
        >
          ACCESS DASHBOARD
        </Link>

        <div className="font-mono text-xs text-gray-500 space-y-1">
          <div>&gt; System Status: ONLINE</div>
          <div>&gt; AI Engine: OPERATIONAL</div>
          <div>&gt; Demo Mode: ACTIVE_</div>
        </div>
      </motion.div>
    </div>
  )
}

export default HomePage