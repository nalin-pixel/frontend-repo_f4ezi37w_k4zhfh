import { useState } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40">
      <div className="backdrop-blur supports-backdrop-blur:bg-white/60 bg-white/70 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-slate-900">Sheekha Mahapatro</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-700 hover:text-indigo-700 transition-colors">{l.label}</a>
            ))}
            <div className="h-5 w-px bg-slate-300/70" />
            <a href="https://github.com/Sheekhamahapatro" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-indigo-700"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/sheekhamahapatro-72a7191b5" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-indigo-700"><Linkedin size={18} /></a>
          </nav>
          <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200/60 px-6 pb-4">
            <div className="grid gap-2 py-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-indigo-700">{l.label}</a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
