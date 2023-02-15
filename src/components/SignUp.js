import TextInput from "./TextInput";
import { useState, useEffect } from "react";
import SubmitButton from "./SubmitButton";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/authSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (emailIsValid && passwordIsValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [emailIsValid, passwordIsValid]);

  const validateEmail = (event) => {
    const email = event.target.value;
    if (email.includes("@")) {
      console.log("email is valid");
      setEmailIsValid(true);
    } else {
      console.log("email is not valid");
      setEmailIsValid(false);
    }
  };

  const validatePassword = (event) => {
    const password = event.target.value;

    if (password.length >= 8) {
      console.log("password is valid");
      setPasswordIsValid(true);
    } else {
      console.log("password is not valid");
      setPasswordIsValid(false);
    }
  };

  const handleClick = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
        dispatch(authActions.saveUser(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error ocured: ", errorCode, errorMessage);
      });
  };
  return (
    <div className="login-box">
      <div className="login-title">Sign Up</div>
      <TextInput
        value={email}
        label="Email"
        type="text"
        setValue={setEmail}
        handleValidation={validateEmail}
        isValid={emailIsValid}
      />
      <TextInput
        value={password}
        label="Password"
        type="password"
        setValue={setPassword}
        handleValidation={validatePassword}
        isValid={passwordIsValid}
      />
      <Typography variant="subtitle2" sx={{ color: "gray" }}>
        *Password has to be at least 8 characters long and contain at least one
        letter, one number and one special character
      </Typography>
      <SubmitButton handleClick={handleClick} isDisabled={isDisabled} />
      <Link
        href="/"
        underline="hover"
        sx={{
          padding: "10px",
          fontFamily: "inherit",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Already have an account? Login here
      </Link>
    </div>
  );
};

export default SignUp;
