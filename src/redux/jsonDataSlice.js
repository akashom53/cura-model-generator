import { createSlice } from "@reduxjs/toolkit";

export const jsonDataSlice = createSlice({
  name: 'jsonData',
  initialState: { value: null },
  reducers: {
    setJsonData: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setJsonData } = jsonDataSlice.actions
export default jsonDataSlice.reducer