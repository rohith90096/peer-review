import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { registerSuccess } from '../features/auth/authSlice'

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')

  function onSubmit(e) {
    e.preventDefault()
    dispatch(registerSuccess({ id: 'u2', name, email, role }))
    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm">Name</span>
          <input aria-label="Name" value={name} onChange={e => setName(e.target.value)} required className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm">Email</span>
          <input aria-label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm">Password</span>
          <input aria-label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm">Role</span>
          <select aria-label="Role" value={role} onChange={e => setRole(e.target.value)} className="mt-1 w-full border rounded px-3 py-2">
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        </label>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Create account</button>
      </form>
      <p className="text-sm mt-4">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
    </div>
  )
}


