import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const TextInput = ({
  label,
  type,
  setValue,
  handleValidation,
  isValid,
  name,
  value,
}) => {
  const handleChange = (event) => {
    setValue(event.target.value);
    handleValidation(event);
  };

  return (
    <Box>
      <Typography sx={{ mt: "20px", mb: "5px", color: "#333333" }}>
        {label}
      </Typography>
      <TextField
        error={isValid ? false : true}
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
        sx={{
          width: "calc(100% - 20px)",
          fontFamily: "inherit",
          color: "#555",
          boxShadow: "0 0 3px #aaaa",
        }}
      />
    </Box>
  );
};

export default TextInput;
