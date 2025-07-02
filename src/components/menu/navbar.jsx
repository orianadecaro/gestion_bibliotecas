import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <p className="hidden md:flex"> Jorge Luis Borges - EATA</p>
          </Link>
        </div>

        <div className="flex gap-5">
          <Link
            to="/socio"
            className="text-gray-400 flex items-center text-xl gap-2 cursor-pointer hover:text-gray-800"
          >
            <span className="hidden md:flex">Ingreso</span> Socio
          </Link>
          <span className="text-gray-400 flex items-center text-xl gap-2 ">
            |
          </span>
          <Link
            to="/admin"
            className="text-gray-400 flex items-center text-xl gap-2 cursor-pointer hover:text-gray-800"
          >
            <span className="hidden md:flex">Ingreso</span> Biliotecario/a
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
