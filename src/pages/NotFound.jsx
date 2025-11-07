import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="h-full flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="mt-2 text-gray-600">Page not found</p>
        <Link to="/" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded">Go Home</Link>
      </div>
    </div>
  )
}


