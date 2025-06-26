import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { LuBookText } from "react-icons/lu";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const NavbarSocio = () => {
  const navigation = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    // logout(navigate);
    navigation("/");
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white p-3 shadow top-0 fixed z-50 w-full">
      <div className="mx-1 p-1 md:mx-3 flex justify-between items-center">
        <Link to="/" className="flex gap-2 items-center">
          <img
            src="/logo.jpeg"
            className="object-contain w-8"
            alt="biblioteca Logo"
          />
          <p className="font-semibold">Jorge Luis Borges</p>
        </Link>

        {/* Menu Toggle for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5">
          <a
            href="/socio/dashboard"
            className="text-gray-400 flex items-center text-xl gap-2 cursor-pointer hover:text-gray-800"
          >
            Libros
          </a>
          <a
            href="/socio/history"
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
            className="flex items-center gap-2 px-2 rounded cursor-pointer transition duration-200 hover:bg-[#1cc702] hover:text-white"
            onClick={handleLogout}
          >
            <span className="text-xl">
              <IoMdLogOut />
            </span>
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white shadow px-4 pb-4">
          <a
            href="/socio/dashboard"
            className="text-gray-600 py-2 flex gap-2 items-center  hover:text-gray-900"
            onClick={toggleMenu}
          >
            <LuBookText /> Libros
          </a>
          <a
            href="/socio/history"
            className="text-gray-600 py-2 flex gap-2 items-center   hover:text-gray-900"
            onClick={toggleMenu}
          >
            <BsFillJournalBookmarkFill /> Historial
          </a>
          <a
            href="/socio/profile"
            className="text-gray-600 py-2 flex gap-2 items-center   hover:text-gray-900"
            onClick={toggleMenu}
          >
            <FaRegUserCircle /> Mi Perfil
          </a>
          <button
            className="flex items-center gap-2 py-2 hover:text-white hover:bg-[#1cc702] rounded"
            onClick={() => {
              toggleMenu();
              handleLogout();
            }}
          >
            <IoMdLogOut />
            Cerrar Sesión
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarSocio;
