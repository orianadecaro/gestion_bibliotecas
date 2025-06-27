import React, { useState } from "react";
import { useSocio } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import Footer from "../../components/footer";
import { socioLoginRequest } from "../../auth/socioLogin";

const SocioLogin = () => {
  const navigation = useNavigate();
  const { loginSocio } = useSocio();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Por favor complete todos los campos");
      setTimeout(() => setErrorMessage(""), 2000);
      return;
    }
    setLoading(true);
    try {
      const result = await socioLoginRequest({ email, password });
      loginSocio(result);
      navigation("/socio/dashboard");
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => setErrorMessage(""), 2000);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="w-full h-screen bg-blue-400 bg-cover bg-center"
      style={{
        backgroundImage: "url('/book.png')",
      }}
    >
      <div className="flex flex-col justify-center ">
        <div className="flex justify-center items-center min-h-screen ">
          <div className="border bg-white border-blue-600 p-8 rounded-lg shadow-sm shadow-white w-full sm:w-96 md:w-1/3">
            <div className="flex  justify-center mb-6">
              <div className="text-blue-600  font-bold">
                <Link to="/" className="flex gap-2 items-center">
                  <img
                    src="/logo.jpeg"
                    className="object-contain  w-8 "
                    alt="biblioteca Logo"
                  />
                  <p> Jorge Luis Borges</p>
                </Link>
              </div>
            </div>
            <h2 className="text-2xl text-gray-700 font-semibold text-center mb-4">
              Iniciar sesión - Socio
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-500">
                  Usuario
                </label>
                <input
                  type="text"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 mt-1 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Ingrese su email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-500">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mt-1 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Ingrese su DNI"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-xl" />
                    ) : (
                      <FaEye className="text-xl" />
                    )}
                  </button>
                </div>
              </div>

              {errorMessage && (
                <p className="text-red-500 text-center mb-4">{errorMessage}</p>
              )}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    navigation("/");
                  }}
                  className="w-full h-10 py-3 border flex justify-center items-center border-blue-600 cursor-pointer  text-blue-600 rounded-lg hover:opacity-60 "
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-full h-10 flex justify-center items-center py-3 bg-blue-600 text-white cursor-pointer rounded-lg hover:opacity-60 focus:outline-none"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex justify-center items-center gap-2">
                      <FaSpinner className="animate-spin text-center h-5 w-5" />{" "}
                      Cargando...
                    </div>
                  ) : (
                    "Iniciar sesión"
                  )}
                </button>
              </div>
            </form>{" "}
            <p className="text-center text-sm my-5 text-gray-500">
              ¿No tenés cuenta?{" "}
              <Link to="/socio/register" className="text-blue-600 font-bold">
                Regístrate
              </Link>
            </p>
          </div>
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default SocioLogin;
