function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Thundey Track</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Job application tracker</h1>
          </div>
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">Foundation</span>
        </header>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-950/20">
          <p className="text-lg text-slate-300">Your workspace for organizing applications, tracking progress, and learning REST API integration.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {['Applications', 'Interviews', 'Offers'].map((label) => (
              <div key={label} className="rounded-xl border border-slate-800 bg-slate-950/70 p-5">
                <p className="text-sm text-slate-400">{label}</p>
                <p className="mt-2 text-3xl font-semibold">0</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
