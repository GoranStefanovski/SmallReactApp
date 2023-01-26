import { configureStore } from '@reduxjs/toolkit'
import recordingReducer from '../../features/recording/recordingSlice'
import isMessageReducer from '../../features/message/messageSlice'
import isCountingReducer from '../../features/counting/countingSlice'

export default configureStore({
  reducer: {
    recording: recordingReducer,
    message: isMessageReducer,
    counting: isCountingReducer
  },
})