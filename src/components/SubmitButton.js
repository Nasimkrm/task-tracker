import { Button } from "@mui/material";
const SubmitButton = ({ handleClick, isDisabled }) => {
  return (
    <Button
      sx={{
        width: "100%",
        padding: "10px",
        mt: "40px",
        boxShadow: "0 0 3px #aaa",
        fontSize: "1.2em",
        fontFamily: "inherit",
        backgroundColor: "#fff",
        color: "#555",
        borderRadius: "5px",
      }}
      onClick={handleClick}
      disabled={isDisabled}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
