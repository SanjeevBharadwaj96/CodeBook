import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  console.log(token ? token : "false");
  return token ? children : <Navigate to="/login" />;
};
