import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Box, Button, Typography } from "@mui/material";
import { taskActions } from "../redux/tasksSlice";
import { useDispatch } from "react-redux";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const { setReset } = taskActions;
  const { deleteTask } = taskActions;

  const handleMarkComplete = async () => {
    const docRef = doc(db, "nasim-tasks", task.id);

    await updateDoc(docRef, { complete: !task.complete });
    dispatch(setReset());
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
          fontSize: "10px",
        }}
        onClick={() => dispatch(deleteTask(task.id))}
      >
        Remove Task
      </Button>
    </Box>
  );
};

export default Task;
