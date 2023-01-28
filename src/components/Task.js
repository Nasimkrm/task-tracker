import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Box, Button, Typography } from "@mui/material";
import { taskActions } from "../redux/tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const Task = ({ task, setTasks, tasks, setTasksReset, tasksReset }) => {
  const dispatch = useDispatch();
  // const { setReset } = taskActions.setReset;
  const handleMarkComplete = async () => {
    const docRef = doc(db, "nasim-tasks", task.id);

    await updateDoc(docRef, { complete: !task.complete });
    dispatch(taskActions.setReset());
    // setTasksReset(!tasksReset);
    // const tempArray = [...tasks];
    // console.log(tempArray);
    // tempArray.forEach((oldTask, index) => {
    //   if (oldTask.id === task.id) {
    //     tempArray[index].complete = !oldTask.complete;
    //   }

    //   setTasks(tempArray);
  };
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
            color: "#555",
            py: "7px",
            boxShadow: "0 0 3px #aaa",
            bordeRadius: "5px",
            border: "none",
            backgroundColor: "#fff",
            fontFamily: "inherit",
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
    </Box>
  );
};

export default Task;
