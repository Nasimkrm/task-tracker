import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginContainer from "./components/LoginContainer";
import ProfileContainer from "./components/ProfileContainer";
import TasksContainer from "./components/TasksContainer";
import store from "./redux/store";
import { Provider } from "react-redux";
import InitialProvider from "./redux/InitialRequests";
import ProtectedRoute from "./ProtectedRoutes";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <InitialProvider />

        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/signup" element={<SignUp />} />
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
