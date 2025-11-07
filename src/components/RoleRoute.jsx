import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function RoleRoute({ allowed }) {
  const user = useSelector(state => state.auth.user)
  if (!user) return <Navigate to="/login" replace />
  if (allowed && !allowed.includes(user.role)) return <Navigate to="/" replace />
  return <Outlet />
}


