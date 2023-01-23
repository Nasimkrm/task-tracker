import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Typography } from "@mui/material";

export default function EditProfileDialogue({ open, setOpen, setUser, user }) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleUserChange = (event) => {
    const newUserObject = {
      ...user,
      [event.target.name]: event.target.value,
    };

    setUser(newUserObject);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{ position: "absolute", top: 180 }}
      >
        <DialogTitle id="alert-dialog-title">{"Edit Profile"}</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography>Name</Typography>
          <TextField
            name="username"
            value={user.username}
            id="outlined-basic"
            variant="outlined"
            sx={{ mb: 3 }}
            onChange={handleUserChange}
          />
          <Typography>Description</Typography>
          <TextField
            value={user.description}
            name="description"
            id="outlined-basic"
            variant="outlined"
            onChange={handleUserChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
