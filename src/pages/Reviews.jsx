import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Reviews() {
  const submissions = useSelector(s => s.reviews.submissions)
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Reviews</h1>
      <ul className="bg-white rounded shadow divide-y">
        {submissions.map(s => (
          <li key={s.id} className="p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{s.title}</div>
              <div className="text-xs text-gray-600">Status: {s.status}</div>
            </div>
            <Link to={`/reviews/${s.id}`} className="text-blue-600">Open</Link>
          </li>
        ))}
        {submissions.length === 0 && <li className="p-3 text-sm text-gray-500">No submissions yet.</li>}
      </ul>
    </div>
  )
}


