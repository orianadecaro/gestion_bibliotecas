// src/routes/PrivateRouteSocio.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouteSocio = ({ children }) => {
  const token = localStorage.getItem("tokenSocio");
  if (!token) {
    return <Navigate to="/" replace />;
  }

  const storedSocio = localStorage.getItem("socio");
  let perfil_id = null;

  if (storedSocio) {
    try {
      const socio = JSON.parse(storedSocio);
      perfil_id = socio.perfil_id;

      if (perfil_id === 3) {
        console.log("socio");
      }
    } catch {
      perfil_id = null;
    }
  }

  if (perfil_id !== 3) {
    return <Navigate to="/404" replace />;
  }

  return children;
};

export default PrivateRouteSocio;
