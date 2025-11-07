import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import RoleRoute from './components/RoleRoute'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Workspace from './pages/Workspace'
import Reviews from './pages/Reviews'
import ReviewDetail from './pages/ReviewDetail'
import SubmitWork from './pages/SubmitWork'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="workspace" element={<Workspace />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="reviews/:id" element={<ReviewDetail />} />
            <Route path="submit" element={<SubmitWork />} />
            <Route element={<RoleRoute allowed={["instructor"]} />}>
              {/* Instructor-only routes could go here */}
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
