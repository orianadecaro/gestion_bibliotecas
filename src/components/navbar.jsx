import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { login } from "../auth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login({ email, password });

      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", result.token);
      navigation("/admin/dashboard");
      console.log(result.user);
    } catch (err) {
      alert("Login fallido: " + (err.response?.data?.error || err.message));
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
            <div className="flex flex-col p-2 w-auto rounded-xl bg-white absolute top-14 shadow right-2 z-30">
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
                <input
                  type="password"
                  placeholder="Password"
                  className="flex-grow h-8 bg-white rounded-xl border border-gray-800 text-gray-800 px-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {error && (
                  <p className="text-red-600 text-sm font-semibold">{error}</p>
                )}
                <button
                  type="submit"
                  className="h-8 w-full bg-[#1cc702] cursor-pointer text-white py-1 items-center rounded-full hover:opacity-75 transition"
                >
                  Ingresar
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
