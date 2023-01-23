import React, { useState } from "react";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import { useEffect } from "react";

const LoginContainer = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState(
    "This is the text we'll show on text load"
  );
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  //The function in useEffect runs at every render. Once when component loads, and also any time the data/state changes. useEffect( function(), dependecy array). useEffect will watch if the state of whatever we passed in the array, changes and runs the function.
  useEffect(() => {
    if (emailIsValid && passwordIsValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [emailIsValid, passwordIsValid]);

  const handleClick = () => {
    console.log(email, password);
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "yes");
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
