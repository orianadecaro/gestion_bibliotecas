// src/routes/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" replace />;
  }

  const storedUser = localStorage.getItem("user");
  let perfil_id = null;
  if (storedUser) {
    try {
      perfil_id = JSON.parse(storedUser).perfil_id;
    } catch {
      perfil_id = null;
    }
  }

  if (![1, 2].includes(perfil_id)) {
    return <Navigate to="/404" replace />;
  }

  return children;
};

export default PrivateRoute;
