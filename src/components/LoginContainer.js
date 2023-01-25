import React, { useState } from "react";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import { useEffect } from "react";
import { authActions } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const LoginContainer = ({ setIsLoggedIn }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (emailIsValid && passwordIsValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [emailIsValid, passwordIsValid]);

  const handleClick = () => {
    console.log(email, password);
    // setIsLoggedIn(true);
    dispatch(authActions.login());
    // localStorage.setItem("isLoggedIn", "yes");
  };

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
    </div>
  );
};

export default LoginContainer;
