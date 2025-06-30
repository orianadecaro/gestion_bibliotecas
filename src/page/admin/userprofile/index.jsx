import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { getAllPerfiles } from "../../../service/perfilesService";

const UserProfile = () => {
  const { user } = useAuth();
  const [perfiles, setPerfiles] = useState([]);

  const fetchPerfiles = async () => {
    const data = await getAllPerfiles();
    if (data) setPerfiles(data);
  };

  useEffect(() => {
    fetchPerfiles();
  }, []);

  const getPerfilNombre = (id) => {
    const perfil = perfiles.find((p) => p.id === id);
    return perfil ? perfil.nombre : id;
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
              {user?.user?.nombre}
            </h2>
            <p className="text-gray-700">
              <strong>DNI:</strong> {user?.user?.dni}
            </p>{" "}
            <p className="text-gray-700">
              <strong>Teléfono:</strong> {user?.user?.telefono}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {user?.user?.email}
            </p>
            <p className="text-gray-700">
              <strong>Perfil:</strong> {getPerfilNombre(user?.user?.perfil_id)}
            </p>
            <p className="text-gray-700">
              <strong>Estado:</strong>{" "}
              <span
                className={`font-semibold ${
                  user?.user?.estado ? "text-green-600" : "text-red-500"
                }`}
              >
                {user?.user?.estado ? "Activo" : "Inactivo"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
