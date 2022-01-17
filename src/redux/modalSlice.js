import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    rootModelName: '',
    showModal: false,
  },
  reducers: {
    setRootModelName: (state, action) => {
      state.rootModelName = action.payload
    },
    showModal: (state) => {
      state.showModal = true
    },
    hideModal: (state) => {
      state.showModal = false
    }
  }
})

export const { setRootModelName, showModal, hideModal } = modalSlice.actions
export default modalSlice.reducer