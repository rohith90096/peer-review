import { createSlice } from '@reduxjs/toolkit'

const storedUser = (() => {
  try {
    const raw = localStorage.getItem('auth:user')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
})()

const initialState = {
  user: storedUser, // { id, name, email, role }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload
      localStorage.setItem('auth:user', JSON.stringify(action.payload))
    },
    logout(state) {
      state.user = null
      localStorage.removeItem('auth:user')
    },
    registerSuccess(state, action) {
      state.user = action.payload
      localStorage.setItem('auth:user', JSON.stringify(action.payload))
    },
  },
})

export const { loginSuccess, logout, registerSuccess } = authSlice.actions
export default authSlice.reducer


