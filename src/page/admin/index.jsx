import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { loginRequest } from "../../auth";

const LoginBibliotecario = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await loginRequest({ email, password });
      login(result);
      navigation("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Credenciales inválidas");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="min-h-screen  flex items-center justify-center  bg-cover bg-center  p-4"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden  w-full max-w-3xl">
        <div
          className="w-full bg-contain bg-gray-200 bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/user4.jpg')" }}
        />
        <div className=" w-full p-8">
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

          <h2 className="text-2xl text-gray-700 font-semibold text-center my-5">
            Iniciar Sesión - Bibliotecario/a
          </h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-10 bg-white rounded-xl border border-gray-300 text-gray-800 px-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-10 w-full bg-white rounded-xl border border-gray-300 text-gray-800 px-4"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(null);
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-xl" />
                ) : (
                  <FaEye className="text-xl" />
                )}
              </button>
            </div>

            {error && (
              <p className="text-red-600 text-sm font-semibold">{error}</p>
            )}

            <div className="flex gap-2 pt-4">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  navigation("/");
                }}
                className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1cc702] text-white py-2 rounded-lg hover:bg-green-600 transition flex justify-center items-center"
              >
                {loading ? (
                  <FaSpinner className="animate-spin h-5 w-5" />
                ) : (
                  "Ingresar"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginBibliotecario;
