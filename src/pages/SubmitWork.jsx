import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { submitWork } from '../features/reviews/reviewsSlice'

export default function SubmitWork() {
  const dispatch = useDispatch()
  const user = useSelector(s => s.auth.user)
  const [title, setTitle] = useState('')
  const [files, setFiles] = useState([])

  function onFileChange(e) {
    const next = Array.from(e.target.files || [])
    setFiles(next)
  }

  function onSubmit(e) {
    e.preventDefault()
    dispatch(submitWork({ title, ownerId: user.id, files: files.map(f => ({ name: f.name })) }))
    setTitle('')
    setFiles([])
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Submit Work</h1>
      <form onSubmit={onSubmit} className="bg-white rounded shadow p-4 space-y-4">
        <label className="block">
          <span className="text-sm">Title</span>
          <input aria-label="Title" className="mt-1 w-full border rounded px-3 py-2" value={title} onChange={e => setTitle(e.target.value)} required />
        </label>
        <label className="block">
          <span className="text-sm">Files</span>
          <input aria-label="Files" type="file" multiple onChange={onFileChange} className="mt-1" />
        </label>
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Submit</button>
      </form>
    </div>
  )
}


