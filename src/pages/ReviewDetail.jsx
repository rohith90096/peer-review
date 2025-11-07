import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { addReview } from '../features/reviews/reviewsSlice'

export default function ReviewDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const submission = useSelector(s => s.reviews.submissions.find(x => x.id === id))
  const user = useSelector(s => s.auth.user)
  const [ratings, setRatings] = useState({ clarity: 3, completeness: 3, originality: 3 })
  const [comments, setComments] = useState('')

  if (!submission) return <div className="max-w-3xl mx-auto p-4">Submission not found.</div>

  function onSubmit(e) {
    e.preventDefault()
    dispatch(addReview({ submissionId: submission.id, reviewerId: user.id, ratings, comments }))
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-2">Review: {submission.title}</h1>
      <form onSubmit={onSubmit} className="bg-white rounded shadow p-4 space-y-4">
        {['clarity','completeness','originality'].map(key => (
          <label key={key} className="block">
            <span className="capitalize text-sm">{key}</span>
            <input aria-label={`${key} rating`} type="range" min="1" max="5" value={ratings[key]} onChange={e => setRatings(prev => ({ ...prev, [key]: Number(e.target.value) }))} className="w-full" />
          </label>
        ))}
        <label className="block">
          <span className="text-sm">Comments</span>
          <textarea aria-label="Review comments" value={comments} onChange={e => setComments(e.target.value)} className="mt-1 w-full border rounded p-2" rows={5} />
        </label>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit Review</button>
      </form>
    </div>
  )
}


