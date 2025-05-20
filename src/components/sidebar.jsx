import React from "react";
import { sidebarData } from "../constants/sidebarData";
import { useNavigate } from "react-router-dom";
import { FaChartBar, FaRegUserCircle } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { LuBookText } from "react-icons/lu";

const Sidebar = () => {
  const navigation = useNavigate();
  const iconMap = {
    FaChartBar: <FaChartBar />,
    FaRegUser: <FaRegUserCircle />,
    FaPeopleLine: <FiUsers />,
    GiBookshelf: <LuBookText />,
    BsFillJournalBookmarkFill: <BsFillJournalBookmarkFill />,
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const logout = (navigate) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="lg:flex bg-gray-400 w-1/5 hidden flex-col h-screen border-r shadow px-3 border-gray-200">
      <div className="flex justify-between items-center my-5">
        <div>
          <img
            src="/logo.jpeg"
            className="object-contain w-40 rounded "
            alt="biblioteca Logo"
          />
        </div>
        <p className="text-white text-2xl text-center font-semibold">
          Gestión de Bibliotecas
        </p>
      </div>
      <nav className="my-10 flex flex-col gap-5">
        <p className="text-center font-bold t text-blue-700 text-2xl">
          {" "}
          ¡Hola {user.nombre}!
        </p>
        <hr className="border-gray-200 w-full" />
        {sidebarData &&
          sidebarData.map((item) => (
            <button
              key={item.id}
              onClick={() => navigation(item.path)}
              className="flex py-2.5 cursor-pointer  px-2 w-52 text-[13px] rounded transition duration-200 hover:bg-[#1cc702] hover:text-white"
            >
              <span className="mr-3 text-xl items-center">
                {iconMap[item.icon]}
              </span>{" "}
              {item.title}
            </button>
          ))}
      </nav>{" "}
      <button
        className="my-10 flex py-2.5 px-2 w-52 rounded cursor-pointer  transition duration-200 hover:bg-[#1cc702] hover:text-white"
        onClick={logout}
      >
        <span className="mr-3 mt-1 text-xl items-center">
          <IoMdLogOut />
        </span>{" "}
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Sidebar;
