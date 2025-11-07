import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { loginSuccess } from '../features/auth/authSlice'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    const role = email.includes('instructor') ? 'instructor' : 'student'
    dispatch(loginSuccess({ id: 'u1', name: 'User', email, role }))
    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm">Email</span>
          <input aria-label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm">Password</span>
          <input aria-label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Sign in</button>
      </form>
      <p className="text-sm mt-4">No account? <Link to="/register" className="text-blue-600">Register</Link></p>
    </div>
  )
}


