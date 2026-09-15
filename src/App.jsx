import { useEffect, useState } from 'react'
import { fetchApplications } from './api/applications'
import ApplicationsPanel from './components/ApplicationsPanel'
import DashboardHeader from './components/DashboardHeader'
import Sidebar from './components/Sidebar'
import StatsCards from './components/StatsCards'

function App() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchApplications()
      .then(setApplications)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-375 flex-col lg:flex-row">
        <Sidebar />
        <section className="flex-1 px-6 py-8 sm:px-10 lg:px-12">
          <DashboardHeader />
          <StatsCards applications={applications} />
          <ApplicationsPanel applications={applications} error={error} loading={loading} />
        </section>
      </div>
    </main>
  )
}

export default App
