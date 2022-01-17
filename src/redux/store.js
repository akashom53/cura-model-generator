import { configureStore } from "@reduxjs/toolkit";
import jsonDataReducer from "./jsonDataSlice";
import jsonModeReducer from './jsonModeSlice'
import dartClassesReducer from "./dartClassesSlice";
import modalReducer from "./modalSlice";

export default configureStore({
  reducer: {
    jsonMode: jsonModeReducer,
    jsonData: jsonDataReducer,
    dartClasses: dartClassesReducer,
    modal: modalReducer
  }
})