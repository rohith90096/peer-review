import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  submissions: [], // {id, title, ownerId, status, reviewers: [userId], files: [], createdAt}
  reviews: [], // {id, submissionId, reviewerId, ratings: {}, comments: '', createdAt}
}

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    submitWork: {
      reducer(state, action) {
        state.submissions.unshift(action.payload)
      },
      prepare({ title, ownerId, files }) {
        return {
          payload: {
            id: nanoid(),
            title,
            ownerId,
            status: 'pending',
            reviewers: [],
            files: files || [],
            createdAt: new Date().toISOString(),
          },
        }
      },
    },
    assignReviewers(state, action) {
      const { submissionId, reviewerIds } = action.payload
      const sub = state.submissions.find(s => s.id === submissionId)
      if (sub) sub.reviewers = reviewerIds
    },
    addReview: {
      reducer(state, action) {
        state.reviews.unshift(action.payload)
        const sub = state.submissions.find(s => s.id === action.payload.submissionId)
        if (sub) sub.status = 'reviewed'
      },
      prepare({ submissionId, reviewerId, ratings, comments }) {
        return {
          payload: {
            id: nanoid(),
            submissionId,
            reviewerId,
            ratings,
            comments,
            createdAt: new Date().toISOString(),
          },
        }
      },
    },
  },
})

export const { submitWork, assignReviewers, addReview } = reviewsSlice.actions
export default reviewsSlice.reducer


