import { createSlice } from '@reduxjs/toolkit'

export const messageSlide = createSlice({
  name: 'message',
  initialState: {
    value: false,
  },
  reducers: {
    isMessage: (state) => {
        state.value = !state.value
    },
    isMessageTrue: (state) => {
        state.value = true;
    }
  },
})

// Action creators are generated for each case reducer function
export const { isMessage, isMessageTrue } = messageSlide.actions

export default messageSlide.reducer