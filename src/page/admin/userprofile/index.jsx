import React from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const user = {
    nombre: "Juan Pérez",
    email: "juan.perez@example.com",
    telefono: "1123456789",
    dni: "30123456",
    estado: "Activo",
    avatar: "/user5.jpg",
  };

  return (
    <div className="w-full h-screen ">
      <div className="pt-32 px-4 flex justify-center items-center">
        <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6 flex flex-col items-center gap-6">
          {/* Avatar */}
          <div className="w-32 h-32 transform hover:scale-105 transition duration-300 perspective-1000">
            <img
              src="/avatar.png"
              alt="Avatar del socio"
              className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-blue-500 transform rotate-x-6 rotate-y-3"
            />
          </div>

          {/* Info */}
          <div className="w-full text-center">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              {user.nombre}
            </h2>
            <p className="text-gray-700">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-700">
              <strong>Teléfono:</strong> {user.telefono}
            </p>
            <p className="text-gray-700">
              <strong>DNI:</strong> {user.dni}
            </p>
            <p className="text-gray-700">
              <strong>Estado:</strong>{" "}
              <span
                className={`font-semibold ${
                  user.estado === "Activo" ? "text-green-600" : "text-red-500"
                }`}
              >
                {user.estado}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
