import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import notificationsReducer from '../features/notifications/notificationsSlice'
import reviewsReducer from '../features/reviews/reviewsSlice'
import workspaceReducer from '../features/workspace/workspaceSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notifications: notificationsReducer,
    reviews: reviewsReducer,
    workspace: workspaceReducer,
  },
})


