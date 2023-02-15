import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase";
import { authActions } from "./redux/authSlice";

const ProtectedRoute = ({ children }) => {
  const authenticated = useSelector((state) => state.auth.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authActions.saveUser(user.refreshToken));
      } else {
        dispatch(authActions.saveUser(null));
        navigate("/");
      }
    });
  });

  return authenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
