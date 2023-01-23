import { Paper, Avatar, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import EditProfileDialogue from "./EditProfileDialogue";
const ProfileCard = () => {
  const [user, setUser] = useState({
    username: "Nassim",
    description: "Software developer",
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Paper
        sx={{
          margin: "30px auto",
          padding: 2,
          width: "80%",
          textAlign: "center",
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/100"
          sx={{ height: 100, width: 100, margin: "20px auto" }}
        />
        <Typography variant="h4">{user.username}</Typography>
        <Typography variant="p" component="div">
          {user.description}
        </Typography>
        <Button variant="outlined" sx={{ mt: 2 }} onClick={handleClickOpen}>
          Edit
        </Button>
      </Paper>
      <EditProfileDialogue
        open={open}
        setOpen={setOpen}
        setUser={setUser}
        user={user}
      />
    </>
  );
};

export default ProfileCard;
