import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser(state, action) {
      state.value = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
