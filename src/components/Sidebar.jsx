import { BriefcaseBusiness, LayoutDashboard, Menu, Settings } from 'lucide-react'

const navItems = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Applications', icon: BriefcaseBusiness },
  { label: 'Settings', icon: Settings },
]

function Sidebar() {
  return (
    <aside className="border-b border-slate-800 bg-slate-900/60 px-6 py-6 lg:min-h-screen lg:w-64 lg:border-b-0 lg:border-r">
      <div className="flex items-center justify-between lg:block">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">Thundey</p>
          <p className="mt-1 text-xs text-slate-500">Track your next move</p>
        </div>
        <button aria-label="Open menu" className="rounded-lg border border-slate-700 p-2 text-slate-300 lg:hidden" type="button"><Menu size={18} /></button>
      </div>
      <nav className="mt-10 hidden space-y-2 lg:block" aria-label="Main navigation">
        {navItems.map(({ label, icon: Icon, active }) => (
          <a className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${active ? 'bg-cyan-400/10 font-medium text-cyan-300' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}`} href={`#${label.toLowerCase()}`} key={label}>
            <Icon aria-hidden="true" size={18} />{label}
          </a>
        ))}
      </nav>
      <div className="mt-12 hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-4 lg:block">
        <p className="text-xs font-medium text-slate-300">Your progress</p>
        <p className="mt-2 text-xs leading-relaxed text-slate-500">Add your first application to start building a clear picture of your search.</p>
      </div>
    </aside>
  )
}

export default Sidebar
