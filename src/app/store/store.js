import { configureStore } from '@reduxjs/toolkit'
import recordingReducer from '../../features/recording/recordingSlice'

export default configureStore({
  reducer: {
    recording: recordingReducer,
  },
})