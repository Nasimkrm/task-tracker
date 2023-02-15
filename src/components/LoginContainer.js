import React, { useState } from "react";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import { useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();

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
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  const validatePassword = (event) => {
    const password = event.target.value;
    if (password.length >= 8) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  };

  const handleClick = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error ocured: ", errorCode, errorMessage);
      });
  };

  return (
    <div className="login-box">
      <div className="login-title">Login</div>
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

      <SubmitButton handleClick={handleClick} isDisabled={isDisabled} />
      <Link
        href="/signup"
        underline="hover"
        sx={{
          padding: "10px",
          fontFamily: "inherit",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Don't have an account? Sign up here.
      </Link>
    </div>
  );
};

export default LoginContainer;
