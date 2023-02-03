import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginContainer from "./components/LoginContainer";
import ProfileContainer from "./components/ProfileContainer";
import TasksContainer from "./components/TasksContainer";
import store from "./redux/store";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./redux/authSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import InitialProvider from "./redux/InitialRequests";
import { useEffect } from "react";
import ProtectedRoute from "./ProtectedRoutes";

function App() {
  const user = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authActions.saveUser(user.refreshToken));
      } else {
        dispatch(authActions.saveUser(undefined));
      }
    });
  });

  return (
    <Provider store={store}>
      <Router>
        <InitialProvider />

        <Routes>
          <Route path="/" element={<LoginContainer />} />

          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <TasksContainer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfileContainer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <TasksContainer />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
