import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSocio } from "../../../context/AuthContext";

const SocioProfile = () => {
  const { socio } = useSocio();

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="pt-32 px-4 flex justify-center items-center">
        <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6 flex flex-col items-center gap-6">
          {/* Avatar */}
          <div className="w-32 h-32 transform hover:scale-105 transition duration-300 perspective-1000">
            <img
              src="/avatar.png"
              alt="Avatar del socioprofile"
              className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-blue-500 transform rotate-x-6 rotate-y-3"
            />
          </div>

          {/* Info */}
          <div className="w-full text-center">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              {socio?.nombre}
            </h2>
            <p className="text-gray-700">
              <strong>Email:</strong> {socio?.email}
            </p>
            <p className="text-gray-700">
              <strong>Teléfono:</strong> {socio?.telefono}
            </p>
            <p className="text-gray-700">
              <strong>DNI:</strong> {socio?.dni}
            </p>
            <p className="text-gray-700">
              <strong>Estado:</strong>{" "}
              <span
                className={`font-semibold ${
                  socio?.estado ? "text-green-600" : "text-red-500"
                }`}
              >
                {socio?.estado ? "Activo" : "Inactivo"}
              </span>
            </p>
          </div>

          {/* Botón de volver */}
          <div className="pt-4">
            <Link
              to="/socioprofile/dashboard"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Ir a Libros
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocioProfile;
