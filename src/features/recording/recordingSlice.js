import { createSlice } from '@reduxjs/toolkit'

export const recordingSlice = createSlice({
  name: 'recording',
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
        state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = recordingSlice.actions

export default recordingSlice.reducer