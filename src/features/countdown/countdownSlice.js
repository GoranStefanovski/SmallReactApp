import { createSlice } from '@reduxjs/toolkit'

export const countdownSlice = createSlice({
  name: 'countdown',
  initialState: {
    value: false,
  },
  reducers: {
    isCountdownActive: (state) => {
        state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { isCountdownActive } = countdownSlice.actions

export default countdownSlice.reducer