import { db } from "../firebase";
import { collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Box, Button, Typography } from "@mui/material";
import tasksSlice, { taskActions } from "../redux/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const { setReset } = taskActions;
  const { setTasks } = taskActions;
  const { deleteTask } = taskActions;
  const tasks = useSelector((state) => state.tasks);

  const handleMarkComplete = async () => {
    const docRef = doc(db, "nasim-tasks", task.id);

    await updateDoc(docRef, { complete: !task.complete });
    dispatch(setReset());
  };

  // const handleDelete = async (id) => {
  //   dispatch(deleteTask());
  //   // setTasks(tasks);
  // };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "5px",
        backgroundColor: "#fff",
        color: "#555",
        py: 1,
      }}
      key={task.id}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          ml: "15px",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            py: "7px",
            boxShadow: "0 0 3px #aaa",
            bordeRadius: "5px",
            border: "none",
            backgroundColor: task.complete === false ? "#ff000f" : "#34b233",
            fontFamily: "inherit",
            "&:hover": {
              color: "#666666",
            },
          }}
          onClick={handleMarkComplete}
        >
          {task.complete === false ? "Mark Complete" : "Mark Incomplete "}
        </Button>
        <Box sx={{ ml: "15px" }}>
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <span>{task.taskName}</span>
            {task.taskDescription}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "60%",
          alignItems: "start",
          display: "flex",
          mr: "15px",
          color: "#555",
          textAlign: "left",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ width: "300px", overFlow: "hidden" }}
        >
          <b>Owner:</b>
          {task.userName}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ width: "300px", textALign: "left" }}
        >
          <b>Priority:</b>
          {task.priority}
        </Typography>
        <Typography variant="subtitle1">
          <b>Due:</b>
          {task.dueDate}
        </Typography>
      </Box>
      <Button
        sx={{
          width: "120px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => dispatch(deleteTask(task.id))}
      >
        Delete
      </Button>
    </Box>
  );
};

export default Task;
