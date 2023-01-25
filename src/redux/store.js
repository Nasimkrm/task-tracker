import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";
import authSlice from "./authSlice";

export default configureStore({
  reducer: { tasks: tasksSlice.reducer, auth: authSlice.reducer },
});
