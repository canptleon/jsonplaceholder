import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    value: [],
  },
  reducers: {
    setPost: (state, action) => {
      state.value = action.payload;
    },
    getPost: (state) => {
      return state.value;
    }
  },
})

export const { setPost, getPost } = postSlice.actions

export default postSlice.reducer