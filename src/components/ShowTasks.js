import { Box } from "@mui/material";
import Task from "./Task";
import { useSelector } from "react-redux";

const ShowTasks = () => {
  const { tasks } = useSelector((state) => state.tasks);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "30px",
        rowGap: "10px",
        fontFamily: "inherit",
        height: "auto",
      }}
    >
      {tasks &&
        tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            setTasks={() => {}}
            tasks={tasks}
            setTasksReset={() => {}}
            tasksReset={false}
          />
        ))}
    </Box>
  );
};

export default ShowTasks;
