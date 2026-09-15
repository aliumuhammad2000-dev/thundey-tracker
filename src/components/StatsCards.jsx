function StatsCards({ applications }) {
  const stats = [
    { label: 'Total applications', value: applications.length, accent: 'text-cyan-300' },
    { label: 'In progress', value: applications.filter(({ status }) => ['Applied', 'Interview'].includes(status)).length, accent: 'text-amber-300' },
    { label: 'Offers', value: applications.filter(({ status }) => status === 'Offer').length, accent: 'text-emerald-300' },
  ]

  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5" key={stat.label}>
          <p className="text-sm text-slate-400">{stat.label}</p>
          <p className={`mt-4 text-3xl font-semibold ${stat.accent}`}>{stat.value}</p>
        </article>
      ))}
    </div>
  )
}

export default StatsCards
