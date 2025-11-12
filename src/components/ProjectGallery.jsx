import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'FoodShare Platform',
    tags: ['React', 'Tailwind', 'Maps'],
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    code: '#',
  },
  {
    title: 'Corporate Website',
    tags: ['Next.js', 'Design'],
    img: 'https://images.unsplash.com/photo-1529429612778-7a3b2b0504be?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    code: '#',
  },
  {
    title: 'Automation Scripts',
    tags: ['Python', 'Selenium'],
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    code: '#',
  },
]

export default function ProjectGallery() {
  const [hover, setHover] = useState(null)

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            layout
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-slate-100 text-slate-700 px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hover === i ? 1 : 0 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/50 flex items-center justify-center gap-3"
            >
              <a href={p.live} className="inline-flex items-center gap-1 rounded-lg bg-white text-slate-900 px-3 py-1.5 text-sm font-semibold">
                <ExternalLink size={16} /> Live
              </a>
              <a href={p.code} className="inline-flex items-center gap-1 rounded-lg bg-white text-slate-900 px-3 py-1.5 text-sm font-semibold">
                <Github size={16} /> Code
              </a>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
