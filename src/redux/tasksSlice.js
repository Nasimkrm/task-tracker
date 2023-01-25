import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: null,
    reset: false,
  },
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    setReset(state) {
      state.reset = !state.reset;
    },
  },
});

export const getAllTasks = () => {
  return async (dispatch) => {
    const getTasks = async () => {
      const colRef = collection(db, "nasim-tasks");
      const snapshot = await getDocs(colRef);
      const tempResults = [];
      snapshot.forEach((row) => {
        tempResults.push({ ...row.data(), id: row.id });
      });
      console.log(tempResults);
      return tempResults;
    };
    try {
      const tempTasks = await getTasks();
      dispatch(taskActions.setTasks(tempTasks));
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const taskActions = tasksSlice.actions;

export default tasksSlice;
