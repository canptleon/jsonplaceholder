import { createSlice } from '@reduxjs/toolkit'

export const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    value: [],
  },
  reducers: {
    setComment: (state, action) => {
      state.value = action.payload;
    },
    getComment: (state) => {
      return state.value;
    }
  },
})

export const { setComment, getComment } = commentSlice.actions

export default commentSlice.reducer