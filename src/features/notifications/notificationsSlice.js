import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  unreadCount: 0,
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: {
      reducer(state, action) {
        state.items.unshift(action.payload)
        state.unreadCount += 1
      },
      prepare({ type, message, link }) {
        return {
          payload: {
            id: nanoid(),
            type, // 'review' | 'comment' | 'invite'
            message,
            link: link || null,
            createdAt: new Date().toISOString(),
            read: false,
          },
        }
      },
    },
    markAllRead(state) {
      state.items = state.items.map(n => ({ ...n, read: true }))
      state.unreadCount = 0
    },
  },
})

export const { addNotification, markAllRead } = notificationsSlice.actions
export default notificationsSlice.reducer


