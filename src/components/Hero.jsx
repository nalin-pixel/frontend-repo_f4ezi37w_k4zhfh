import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full px-6 sm:px-10 lg:px-14">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center rounded-full bg-indigo-600/10 text-indigo-700 px-3 py-1 text-xs font-semibold tracking-wide">
              Full Stack Developer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              Sheekha Mahapatro
            </h1>
            <p className="text-base sm:text-lg text-slate-700 max-w-xl">
              Passionate Web Developer with expertise in JavaScript, React Hooks, and Tailwind CSS. Focused on crafting user‑centric, responsive interfaces and seamless web experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-lg bg-indigo-600 text-white px-5 py-2.5 font-semibold shadow-sm hover:bg-indigo-700 transition">
                Get in Touch
              </a>
              <a href="#experience" className="inline-flex items-center rounded-lg bg-white/80 text-slate-900 px-5 py-2.5 font-semibold shadow hover:bg-white">
                View Experience
              </a>
            </div>
          </motion.div>
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* floating orbs */}
      <motion.div
        className="absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-indigo-400/30 blur-2xl"
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute right-10 top-10 h-32 w-32 rounded-full bg-cyan-400/30 blur-2xl"
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />
    </section>
  )
}
