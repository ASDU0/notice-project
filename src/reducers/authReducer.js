import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    firstname: '',
    logged: true,
    surnames: '',
  },
  reducers: {
    login: (state, action) => {
      state = { ...action.payload };
      state.logged = true;
    },
    logout: (state) => {
      state.email = state.firstname = state.surnames = '';
      state.logged = false;
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;