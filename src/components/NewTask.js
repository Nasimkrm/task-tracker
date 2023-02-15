import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Box, Paper, Typography, Button, TextField } from "@mui/material";

const NewTask = () => {
  const [input, setInput] = useState({
    userName: "",
    taskName: "",
    taskDescription: "",
    dueDate: "",
    priority: "",
  });

  const [validation, setValidation] = useState({
    userName: false,
    taskName: false,
    taskDescription: false,
    dueDate: false,
    priority: false,
  });

  const handleChange = (event) => {
    let isValid = false;
    if (event.target.value.length > 0) {
      isValid = true;
    }

    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    console.log(input);

    const newValidationObject = { ...validation, [event.target.name]: isValid };

    setValidation(newValidationObject);
  };

  const handleSubmit = async () => {
    const formDataToSubmit = {
      ...input,
      complete: false,
    };

    const newTaskRef = collection(db, "nasim-tasks");
    await addDoc(newTaskRef, formDataToSubmit);
    setInput({ userName: "" });
    setInput({ taskName: "" });
    setInput({ taskDescription: "" });
    setInput({ dueDate: "" });
    setInput({ priority: "" });

    console.log(formDataToSubmit);
  };

  return (
    <Paper sx={{ width: "80%", margin: "10px auto", px: 2, py: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: "bolder", mb: 3 }}>
        Create New Task
      </Typography>
      <Box
        sx={{
          flexWrap: "wrap",
          display: "flex",
          gap: "0 20px",
        }}
      >
        <Box sx={{ flexGrow: "1" }}>
          <TextField
            margin="normal"
            fullWidth
            value={input.userName}
            label="User Name"
            type="text"
            name="userName"
            error={validation.userName ? false : true}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ flexGrow: "1" }}>
          <TextField
            margin="normal"
            fullWidth
            value={input.taskName}
            label="Task Name"
            type="text"
            name="taskName"
            error={validation.taskName ? false : true}
            onChange={handleChange}
          />
        </Box>
      </Box>
      <Box
        sx={{
          flexWrap: "wrap",
          display: "flex",
          gap: "0 20px",
        }}
      >
        <Box sx={{ flexGrow: "1" }}>
          <TextField
            margin="normal"
            fullWidth
            value={input.taskDescription}
            label="Task Description"
            type="text"
            name="taskDescription"
            error={validation.taskDescription ? false : true}
            onChange={handleChange}
          />
        </Box>
      </Box>
      <Box
        sx={{
          flexWrap: "wrap",
          display: "flex",
          gap: "0 20px",
        }}
      >
        <Box sx={{ flexGrow: "1" }}>
          <TextField
            margin="normal"
            fullWidth
            value={input.dueDate}
            label="Due Date"
            type="date"
            name="dueDate"
            error={validation.dueDate ? false : true}
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ flexGrow: "1" }}>
          <TextField
            margin="normal"
            fullWidth
            value={input.priority}
            label="Priority"
            type="text"
            name="priority"
            error={validation.priority ? false : true}
            onChange={handleChange}
          />
        </Box>
      </Box>
      <Box
        sx={{
          flexWrap: "wrap",
          display: "flex",
          gap: "0 20px",
        }}
      >
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ mt: "40px" }}
          onClick={handleSubmit}
          disabled={
            Object.values(validation).every((value) => value === true)
              ? false
              : true
          }
        >
          Submit New Task
        </Button>
      </Box>
    </Paper>
  );
};

export default NewTask;
