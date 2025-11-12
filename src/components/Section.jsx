export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
          {subtitle && (
            <p className="text-slate-600 mt-2 max-w-2xl">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
