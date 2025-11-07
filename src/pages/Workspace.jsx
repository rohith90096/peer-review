import { useDispatch, useSelector } from 'react-redux'
import { setDocumentContent, addComment, addFile } from '../features/workspace/workspaceSlice'
import { useState } from 'react'

export default function Workspace() {
  const dispatch = useDispatch()
  const { documentContent, comments, files } = useSelector(s => s.workspace)
  const [comment, setComment] = useState('')

  function onAddComment() {
    if (!comment.trim()) return
    dispatch(addComment({ id: Date.now().toString(), userId: 'u1', text: comment, selection: null, createdAt: new Date().toISOString() }))
    setComment('')
  }

  function onFileChange(e) {
    const file = e.target.files?.[0]
    if (file) {
      dispatch(addFile({ name: file.name, url: URL.createObjectURL(file) }))
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <section className="md:col-span-2 bg-white rounded shadow p-4">
        <h2 className="font-semibold mb-2">Document</h2>
        <textarea aria-label="Document editor" className="w-full h-80 border rounded p-2" value={documentContent} onChange={e => dispatch(setDocumentContent(e.target.value))} />
        <div className="mt-3">
          <label className="text-sm font-medium">Upload file</label>
          <input aria-label="Upload file" type="file" className="block mt-1" onChange={onFileChange} />
          <ul className="text-sm mt-2 space-y-1">
            {files.map((f, i) => <li key={i} className="truncate">{f.name}</li>)}
          </ul>
        </div>
      </section>
      <section className="bg-white rounded shadow p-4">
        <h2 className="font-semibold mb-2">Comments</h2>
        <div className="space-y-2 max-h-64 overflow-auto">
          {comments.map(c => (
            <div key={c.id} className="text-sm border rounded p-2">
              <div className="text-gray-600 text-xs">{new Date(c.createdAt).toLocaleString()}</div>
              <div>{c.text}</div>
            </div>
          ))}
          {comments.length === 0 && <div className="text-sm text-gray-500">No comments yet.</div>}
        </div>
        <div className="mt-3">
          <label className="sr-only" htmlFor="comment-input">Add comment</label>
          <textarea id="comment-input" aria-label="Add comment" value={comment} onChange={e => setComment(e.target.value)} className="w-full border rounded p-2" rows={3} />
          <button onClick={onAddComment} className="mt-2 px-3 py-2 bg-blue-600 text-white rounded">Add Comment</button>
        </div>
      </section>
    </div>
  )
}


