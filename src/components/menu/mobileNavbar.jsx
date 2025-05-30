import React, { useState } from "react";
import { sidebarData } from "../../constants/sidebarData";
import { Link, useNavigate } from "react-router-dom";
import { FaChartBar, FaRegUserCircle } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useAuth } from "../../context/AuthContext";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const iconMap = {
    FaChartBar: <FaChartBar />,
    FaRegUser: <FaRegUserCircle />,
    FaPeopleLine: <FiUsers />,
    GiBookshelf: <LuBookText />,
    BsFillJournalBookmarkFill: <BsFillJournalBookmarkFill />,
    ImProfile: <ImProfile />,
  };

  const handleLogout = (navigate) => {
    logout(navigate);
    setOpen(false);
  };

  return (
    <div className="lg:hidden bg-gray-400 border-b-white shadow-md fixed w-full top-0 z-50">
      <div className="flex justify-between items-center p-3">
        <Link to="/">
          <img
            src="/logo.jpeg"
            className="w-12 h-12 object-contain rounded"
            alt="logo"
          />
        </Link>
        <p className="font-semibold text-white text-sm">
          ¡Hola {user?.user?.nombre}!
        </p>
        <button onClick={() => setOpen(!open)} className="text-2xl text-white">
          {open ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-2 px-4 pb-4 pt-2 bg-white shadow-md">
          {sidebarData.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
              className="flex items-center gap-3 py-2 px-3 rounded hover:bg-[#1cc702] hover:text-white text-sm text-gray-700"
            >
              <span className="text-lg">{iconMap[item.icon]}</span>
              {item.title}
            </button>
          ))}
          <button
            onClick={() => handleLogout(navigation)}
            className="flex items-center gap-3 py-2 px-3 rounded hover:bg-red-500 hover:text-white text-sm text-gray-700"
          >
            <span className="text-lg">
              <IoMdLogOut />
            </span>
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
