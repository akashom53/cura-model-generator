import { createSlice } from "@reduxjs/toolkit";

export const jsonModeSlice = createSlice({
  name: 'jsonMode',
  initialState: { value: true },
  reducers: {
    setJsonMode: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setJsonMode } = jsonModeSlice.actions
export default jsonModeSlice.reducer