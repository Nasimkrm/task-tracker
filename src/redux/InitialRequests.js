import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTasks } from "./tasksSlice";

export default function InitialProvider() {
  const dispatch = useDispatch();

  const { reset: tasksReset } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch, tasksReset]);

  return null;
}
