import { ChevronDown, Plus, Sparkles } from 'lucide-react'

function ApplicationsPanel() {
  return (
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60" id="applications">
      <div className="flex flex-col gap-4 border-b border-slate-800 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div><h2 className="text-lg font-semibold">Recent applications</h2><p className="mt-1 text-sm text-slate-500">Your latest applications will appear here.</p></div>
        <div className="flex gap-3">
          <input className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 outline-none placeholder:text-slate-600 focus:border-cyan-400 sm:w-52" placeholder="Search applications" type="search" />
          <div className="relative">
            <select aria-label="Filter applications by status" className="w-full appearance-none rounded-lg border border-slate-700 bg-slate-900 py-2 pl-3 pr-9 text-sm font-medium text-slate-300 outline-none transition hover:border-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 sm:w-36" defaultValue="all">
              <option className="bg-slate-900 text-slate-200" value="all">All statuses</option>
              <option className="bg-slate-900 text-slate-200" value="applied">Applied</option>
              <option className="bg-slate-900 text-slate-200" value="interview">Interview</option>
              <option className="bg-slate-900 text-slate-200" value="offer">Offer</option>
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          </div>
        </div>
      </div>
      <div className="px-5 py-16 text-center sm:py-24">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300" aria-hidden="true"><Sparkles size={24} /></div>
        <h3 className="mt-5 text-base font-semibold">No applications yet</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-500">When you add an application, you'll be able to track its status, notes, and next steps from this dashboard.</p>
        <button className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300" type="button"><Plus size={16} />Add your first application</button>
      </div>
    </section>
  )
}

export default ApplicationsPanel
