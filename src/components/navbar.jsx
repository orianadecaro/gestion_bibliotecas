import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdLiveTv } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ value, onChange, handleKeyPress }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white p-1 lg:p-3 shadow top-0 fixed z-50 w-full ">
      <div className="mx-1  md:mx-3 flex  justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/" className="flex gap-2 items-center">
            <img
              src="/vite.svg"
              className="object-contain w-8 "
              alt="NETMAX Logo"
            />
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
              <form className="flex w-full flex-col items-center gap-2 py-2">
                <h2>Iniciar Sesion</h2>
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-grow h-8 bg-white rounded-xl border border-gray-800 text-gray-800 px-4"
                />
                <input
                  type="email"
                  placeholder="Password"
                  className="flex-grow h-8 bg-white rounded-xl border border-gray-800 text-gray-800 px-4"
                />
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
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
