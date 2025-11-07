import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const user = useSelector(s => s.auth.user)
  const submissions = useSelector(s => s.reviews.submissions)
  const reviews = useSelector(s => s.reviews.reviews)
  const notifications = useSelector(s => s.notifications)

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-semibold">Welcome{user ? `, ${user.name}` : ''}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <section className="bg-white rounded shadow p-4">
          <h2 className="font-semibold mb-2">Pending Reviews</h2>
          <ul className="space-y-2">
            {submissions.filter(s => s.status === 'pending').slice(0,5).map(s => (
              <li key={s.id} className="text-sm flex justify-between">
                <span>{s.title}</span>
                <Link className="text-blue-600" to={`/reviews/${s.id}`}>Open</Link>
              </li>
            ))}
            {submissions.length === 0 && <li className="text-sm text-gray-500">No submissions yet.</li>}
          </ul>
        </section>
        <section className="bg-white rounded shadow p-4">
          <h2 className="font-semibold mb-2">Recent Activity</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            {reviews.slice(0,5).map(r => (
              <li key={r.id}>Reviewed submission {r.submissionId}</li>
            ))}
            {reviews.length === 0 && <li className="text-sm text-gray-500">No recent reviews.</li>}
          </ul>
        </section>
        <section className="bg-white rounded shadow p-4">
          <h2 className="font-semibold mb-2">Notifications</h2>
          <p className="text-sm">Unread: {notifications.unreadCount}</p>
          <ul className="text-sm mt-2 space-y-1 max-h-48 overflow-auto">
            {notifications.items.slice(0,6).map(n => (
              <li key={n.id} className="truncate">{n.message}</li>
            ))}
            {notifications.items.length === 0 && <li className="text-sm text-gray-500">No notifications.</li>}
          </ul>
        </section>
      </div>
      <div className="mt-6 flex gap-3">
        <Link to="/workspace" className="px-4 py-2 bg-indigo-600 text-white rounded">Open Workspace</Link>
        <Link to="/submit" className="px-4 py-2 bg-green-600 text-white rounded">Submit Work</Link>
      </div>
    </div>
  )
}


