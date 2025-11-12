import { useEffect, useRef } from 'react'

const DashboardBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Binary rain effect
    const chars = ['0', '1']
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)

    const draw = () => {
      // Clear with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw binary characters
      ctx.fillStyle = '#a855f7'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    // Animation loop
    const interval = setInterval(draw, 100)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <>
      {/* Binary Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="binary-rain"
        style={{ position: 'fixed', top: 0, left: 0, zIndex: -2 }}
      />

      {/* Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          zIndex: -1,
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Corner System Text */}
      <div className="fixed top-4 right-4  text-xs text-purple-400/50 pointer-events-none space-y-1" style={{ zIndex: -1 }}>
        <div>AI_ENGINE: STABLE</div>
        <div>PROCESSING REQUESTS...</div>
        <div>MODEL DRIFT: 0.3%</div>
      </div>

      <div className="fixed bottom-4 left-4  text-xs text-cyan-400/50 pointer-events-none space-y-1" style={{ zIndex: -1 }}>
        <div>SYSTEM UPTIME: 99.8%</div>
        <div>CONNECTIONS: SECURE</div>
        <div className="terminal-cursor">STATUS: OPERATIONAL</div>
      </div>
    </>
  )
}

export default DashboardBackground