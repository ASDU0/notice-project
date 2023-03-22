import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from '../reducers/authReducer'

// retorn store
export default configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [ thunk ],
});