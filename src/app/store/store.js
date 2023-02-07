import { configureStore } from '@reduxjs/toolkit'
import recordingReducer from '../../features/recording/recordingSlice'
import isMessageReducer from '../../features/message/messageSlice'
import isCountingReducer from '../../features/counting/countingSlice'
import isCountdownReducer from '../../features/countdown/countdownSlice'
import logger from 'redux-logger'

export default configureStore({
  reducer: {
    recording: recordingReducer,
    message: isMessageReducer,
    counting: isCountingReducer,
    countdown: isCountdownReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})