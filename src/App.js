import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginContainer from "./components/LoginContainer";
import ProfileContainer from "./components/ProfileContainer";
import TasksContainer from "./components/TasksContainer";
import store from "./redux/store";
import { Provider, useSelector, useDispatch } from "react-redux";
import InitialProvider from "./redux/InitialRequests";
import { authActions } from "./redux/authSlice";

function App() {
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);

  // const checkIfLoggedIn = () => {};

  // checkIfLoggedIn();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const logInCheck = localStorage.getItem("isLoggedIn");

  //   if (logInCheck === "yes") {
  //     // setIsLoggedIn(true);
  //     dispatch(authActions.login());
  //   } else {
  //     // setIsLoggedIn(false);
  //     dispatch(authActions.logout());
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <Router>
        <InitialProvider />
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/tasks" element={<TasksContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/" element={<TasksContainer />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
