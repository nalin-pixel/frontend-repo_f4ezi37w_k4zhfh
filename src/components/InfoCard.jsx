export default function InfoCard({ title, items }) {
  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200/60 shadow-sm p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-slate-700 text-sm">
        {items.map((item, idx) => (
          <li key={idx} className="leading-relaxed">{item}</li>
        ))}
      </ul>
    </div>
  )
}
