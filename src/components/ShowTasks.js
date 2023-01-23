import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Task from "./Task";
import { useSelector } from "react-redux";

const ShowTasks = () => {
  const { tasks } = useSelector((state) => state.tasks);
  // const [tasks, setTasks] = useState([]);
  // const [tasksReset, setTasksReset] = useState(false);

  // useEffect(() => {
  //   //An asychronous function always returns a promise
  //   //await keyword stops the promise until data is fetched and then assigns it to whatever variable we have (snapshot here)
  //   const getTasks = async () => {
  //     const tasksRef = collection(db, "nasim-tasks");
  //     const snapshot = await getDocs(tasksRef);

  //     const tempArray = [];
  //     snapshot.forEach((task) => {
  //       tempArray.push({ ...task.data(), id: task.id });
  //     });
  //     setTasks(tempArray);
  //     console.log("Got task from database");
  //   };

  //   getTasks();
  // }, [tasksReset]);

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
