import { useEffect, useState } from 'react'
import { createApplication, fetchApplications } from './api/applications'
import ApplicationForm from './components/ApplicationForm'
import ApplicationsPanel from './components/ApplicationsPanel'
import DashboardHeader from './components/DashboardHeader'
import Sidebar from './components/Sidebar'
import StatsCards from './components/StatsCards'

function App() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchApplications()
      .then(setApplications)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false))
  }, [])

  async function handleCreate(application) {
    setSaving(true)
    try {
      const created = await createApplication(application)
      setApplications((current) => [created, ...current])
      setShowForm(false)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-375 flex-col lg:flex-row">
        <Sidebar />
        <section className="flex-1 px-6 py-8 sm:px-10 lg:px-12">
          <DashboardHeader onAdd={() => setShowForm(true)} />
          <StatsCards applications={applications} />
          <ApplicationsPanel applications={applications} error={error} loading={loading} onAdd={() => setShowForm(true)} />
        </section>
      </div>
      {showForm && <ApplicationForm onClose={() => setShowForm(false)} onSubmit={handleCreate} saving={saving} />}
    </main>
  )
}

export default App
