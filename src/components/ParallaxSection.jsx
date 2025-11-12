import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxSection({ id, title, subtitle, children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])

  return (
    <section id={id} ref={ref} className="relative py-20">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-cyan-50" />
      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
          {subtitle && <p className="text-slate-600 mt-2 max-w-2xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
