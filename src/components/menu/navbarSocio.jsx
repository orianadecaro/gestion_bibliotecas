import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

const NavbarSocio = () => {
  const navigation = useNavigate();

  const handleLogout = (navigate) => {
    // logout(navigate);
    navigation("/");
  };
  return (
    <nav className="bg-white p-3 shadow top-0 fixed z-50 w-full ">
      <div className="mx-1p-1 md:mx-3 flex  justify-between items-center">
        <Link to="/" className="flex gap-2 items-center">
          <img
            src="/logo.jpeg"
            className="object-contain  w-8 "
            alt="biblioteca Logo"
          />
          <p> Jorge Luis Borges</p>
        </Link>

        <div className="flex gap-5">
          <a
            href="/socio/dashboard"
            className="text-gray-400 flex items-center text-xl gap-2 cursor-pointer hover:text-gray-800"
          >
            Libros
          </a>
          <a
            href="/socio/histoy"
            className="text-gray-400 flex items-center text-xl gap-2 cursor-pointer hover:text-gray-800"
          >
            Historial
          </a>
          <a
            href="/socio/profile"
            className="text-gray-400 flex items-center text-xl gap-2 cursor-pointer hover:text-gray-800"
          >
            Mi Perfil
          </a>
          <button
            className=" flex items-center gap-2 px-2 w-auto rounded cursor-pointer  transition duration-200 hover:bg-[#1cc702] hover:text-white"
            onClick={() => handleLogout(navigation)}
          >
            <span className="text-xl items-center">
              <IoMdLogOut />
            </span>{" "}
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSocio;
