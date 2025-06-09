import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaEye, FaEyeSlash, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { loginRequest } from "../../auth";
import { FaSpinner } from "react-icons/fa";

const Navbar = () => {
  const navigation = useNavigate();
  const [open, setOpen] = useState(false);
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
    <nav className="bg-white p-1 lg:p-3 shadow top-0 fixed z-50 w-full ">
      <div className="mx-1  md:mx-3 flex  justify-between items-center">
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

        <div className="flex">
          {!open ? (
            <button
              className="text-gray-400 flex items-center text-3xl gap-2 cursor-pointer hover:text-gray-800"
              onClick={() => setOpen(true)}
              type="button"
            >
              <FaUserCircle />
            </button>
          ) : (
            <button
              className="text-gray-800 flex items-center text-3xl gap-2 cursor-pointer hover:text-gray-300 absolute top-2 right-3"
              onClick={() => setOpen(false)}
              type="button"
            >
              <IoMdClose />
            </button>
          )}
          {open && (
            <div className="flex flex-col p-2 w-auto rounded-xl bg-white absolute top-10 lg:top-14 shadow right-2 z-30">
              <form
                className="flex w-full flex-col items-center gap-2 py-2"
                onSubmit={handleSubmit}
              >
                <h2>Iniciar Sesion</h2>
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-grow h-8 bg-white rounded-xl border border-gray-800 text-gray-800 px-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="h-8 w-full bg-white rounded-xl border border-gray-800 text-gray-800 px-4 "
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
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {error && (
                  <p className="text-red-600 text-sm font-semibold">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="h-8 w-full bg-[#1cc702] cursor-pointer text-white py-1 rounded-full hover:opacity-75 transition flex justify-center items-center"
                >
                  {loading ? (
                    <FaSpinner className="animate-spin text-center h-5 w-5" />
                  ) : (
                    "Ingresar"
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
