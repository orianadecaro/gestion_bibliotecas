import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/menu/navbar";

const NotFound = () => {
  return (
    <div className="h-screen mt-20 flex flex-col items-center justify-center bg-gray-100">
      <Navbar />
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-2 text-2xl text-gray-600">Page Not Found</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
