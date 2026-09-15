import { Plus } from 'lucide-react'

function DashboardHeader() {
  return (
    <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm text-slate-500">Tuesday, September 15, 2026</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Good morning, Tunde.</h1>
        <p className="mt-2 text-slate-400">Keep your job search moving forward.</p>
      </div>
      <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:bg-cyan-300" type="button"><Plus size={18} />Add application</button>
    </header>
  )
}

export default DashboardHeader
