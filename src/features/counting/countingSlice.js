import { createSlice } from '@reduxjs/toolkit'

export const countingSlice = createSlice({
  name: 'counting',
  initialState: {
    value: false,
    isCountingPaused: false,
  },
  reducers: {
    isCounting: (state) => {
        state.value = !state.value
    },
    isCountingPaused: (state) => {
      state.isCountingPaused = !state.isCountingPaused
    }
  },
})

// Action creators are generated for each case reducer function
export const { isCounting, isCountingPaused } = countingSlice.actions

export default countingSlice.reducer