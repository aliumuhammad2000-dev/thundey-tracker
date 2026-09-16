import { useEffect, useState } from 'react'
import { createApplication, deleteApplication, fetchApplications, updateApplication } from './api/applications'
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
  const [editingApplication, setEditingApplication] = useState(null)
  const [saving, setSaving] = useState(false)
  const [deletingId, setDeletingId] = useState(null)

  useEffect(() => {
    fetchApplications()
      .then(setApplications)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false))
  }, [])

  function openCreateForm() {
    setEditingApplication(null)
    setShowForm(true)
  }

  function openEditForm(application) {
    setEditingApplication(application)
    setShowForm(true)
  }

  async function handleSave(application) {
    setSaving(true)
    try {
      if (editingApplication) {
        const updated = await updateApplication(editingApplication.id, application)
        setApplications((current) => current.map((item) => item.id === updated.id ? updated : item))
      } else {
        const created = await createApplication(application)
        setApplications((current) => [created, ...current])
      }
      setShowForm(false)
      setEditingApplication(null)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this application?')) return
    setDeletingId(id)
    try {
      await deleteApplication(id)
      setApplications((current) => current.filter((application) => application.id !== id))
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-375 flex-col lg:flex-row">
        <Sidebar />
        <section className="flex-1 px-6 py-8 sm:px-10 lg:px-12">
          <DashboardHeader onAdd={openCreateForm} />
          <StatsCards applications={applications} />
          <ApplicationsPanel applications={applications} deletingId={deletingId} error={error} loading={loading} onAdd={openCreateForm} onDelete={handleDelete} onEdit={openEditForm} />
        </section>
      </div>
      {showForm && <ApplicationForm application={editingApplication} onClose={() => { setShowForm(false); setEditingApplication(null) }} onSubmit={handleSave} saving={saving} />}
    </main>
  )
}

export default App
