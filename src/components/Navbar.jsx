import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold">PeerCollab</Link>
        <div className="flex items-center gap-4">
          {user && (
            <>
              <Link to="/" className="text-sm text-gray-700 hover:text-gray-900">Dashboard</Link>
              <Link to="/workspace" className="text-sm text-gray-700 hover:text-gray-900">Workspace</Link>
              <Link to="/reviews" className="text-sm text-gray-700 hover:text-gray-900">Reviews</Link>
              <button aria-label="Logout" className="text-sm text-red-600" onClick={() => dispatch(logout())}>Logout</button>
            </>
          )}
          {!user && (
            <>
              <Link to="/login" className="text-sm text-gray-700 hover:text-gray-900">Login</Link>
              <Link to="/register" className="text-sm text-gray-700 hover:text-gray-900">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}


