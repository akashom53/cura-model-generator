import { createSlice } from "@reduxjs/toolkit";

export const dartClassesSlice = createSlice({
  name: 'dartClasses',
  initialState: { classes: [], selectedIndex: 0 },
  reducers: {
    setDartClasses: (state, action) => {
      state.classes = action.payload
    },
    clearDartClasses: (state) => {
      state.classes = []
    },
    setSelectedIndex: (state, action) => {
      state.selectedIndex = action.payload
    }
  }
})

export const { setDartClasses, clearDartClasses, setSelectedIndex } = dartClassesSlice.actions
export default dartClassesSlice.reducer