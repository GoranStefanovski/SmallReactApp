import { configureStore } from '@reduxjs/toolkit'
import recordingReducer from '../../features/recording/recordingSlice'
import isMessageReducer from '../../features/message/messageSlice'

export default configureStore({
  reducer: {
    recording: recordingReducer,
    message: isMessageReducer,
  },
})