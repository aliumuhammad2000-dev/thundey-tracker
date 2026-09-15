import { X } from 'lucide-react'
import { useState } from 'react'

const initialForm = { company: '', role: '', status: 'Applied', notes: '' }

function ApplicationForm({ onClose, onSubmit, saving }) {
  const [form, setForm] = useState(initialForm)

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(form)
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="form-title">
      <form className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl" onSubmit={handleSubmit}>
        <div className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">New entry</p><h2 className="mt-2 text-xl font-semibold" id="form-title">Add application</h2></div><button aria-label="Close form" className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100" onClick={onClose} type="button"><X size={18} /></button></div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-slate-300">Company<input className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400" name="company" onChange={handleChange} required value={form.company} /></label>
          <label className="text-sm text-slate-300">Role<input className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400" name="role" onChange={handleChange} required value={form.role} /></label>
          <label className="text-sm text-slate-300">Status<select className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400" name="status" onChange={handleChange} value={form.status}><option>Applied</option><option>Interview</option><option>Offer</option><option>Rejected</option></select></label>
          <label className="text-sm text-slate-300 sm:col-span-2">Notes<textarea className="mt-2 min-h-24 w-full resize-y rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400" name="notes" onChange={handleChange} placeholder="Add a helpful detail" value={form.notes} /></label>
        </div>
        <button className="mt-6 w-full rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60" disabled={saving} type="submit">{saving ? 'Saving...' : 'Save application'}</button>
      </form>
    </div>
  )
}

export default ApplicationForm
