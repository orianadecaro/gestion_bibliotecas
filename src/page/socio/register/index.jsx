import React, { useState } from "react";
import { createSocios } from "../../../service/sociosService";
import { FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CgPassword } from "react-icons/cg";

const SocioRegister = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    dni: "",
    perfil_id: 3,
    estado: true,
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "estado" ? value === "true" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.dni.trim()) {
      setErrorMessage("Por favor complete todos los campos");
      setTimeout(() => setErrorMessage(""), 2000);
      return;
    }
    setLoading(true);
    try {
      await createSocios(formData);
      navigate("/socio/dashboard");
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => setErrorMessage(""), 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl">
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/user1.jpg')" }}
        />

        <div className="w-full md:w-1/2 p-6">
          <div className="flex justify-center mb-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-blue-700 font-bold text-lg"
            >
              <img
                src="/logo.jpeg"
                alt="Logo biblioteca"
                className="w-8 h-8 object-contain"
              />
              Jorge Luis Borges
            </Link>
          </div>

          <h2 className="text-2xl text-gray-700 font-semibold text-center mb-4">
            Registro de Socio
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "Nombre y Apellido", name: "nombre" },
              { label: "DNI", name: "dni" },
              { label: "Teléfono", name: "telefono" },
              { label: "Email", name: "email" },
              { label: "Contraseña", name: "password" },
            ].map(({ label, name }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700">
                  {label}
                </label>
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            ))}

            {errorMessage && (
              <p className="text-red-500 text-center text-sm">{errorMessage}</p>
            )}

            <div className="flex gap-2 pt-4">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
                className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {loading ? (
                  <FaSpinner className="animate-spin mx-auto h-5 w-5" />
                ) : (
                  "Registrar"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SocioRegister;
