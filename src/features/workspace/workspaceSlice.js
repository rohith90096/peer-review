import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  documentContent: '',
  comments: [], // {id, userId, text, selection, createdAt}
  files: [], // {name, url}
}

const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    setDocumentContent(state, action) {
      state.documentContent = action.payload
    },
    addComment(state, action) {
      state.comments.push(action.payload)
    },
    addFile(state, action) {
      state.files.push(action.payload)
    },
  },
})

export const { setDocumentContent, addComment, addFile } = workspaceSlice.actions
export default workspaceSlice.reducer


