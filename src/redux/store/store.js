import { configureStore } from '@reduxjs/toolkit'
import commentSlice from '../actions/commentSlice'
import postSlice from '../actions/postSlice'
import userSlice from '../actions/userSlice'

export default configureStore({
  reducer: {
    comment: commentSlice,
    post: postSlice,
    user: userSlice,
  },
})