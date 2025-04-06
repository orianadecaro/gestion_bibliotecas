import React from "react";
import { sidebarData } from "../constants/sidebarData";
import { useNavigate } from "react-router-dom";
import { FaChartBar, FaRegUser } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { FaPeopleLine } from "react-icons/fa6";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { LuBookA, LuBookCheck, LuBookType } from "react-icons/lu";
import { FiBook } from "react-icons/fi";

const Sidebar = () => {
  const router = useNavigate();
  const iconMap = {
    FaChartBar: <FaChartBar />,
    FaRegUser: <FaRegUser />,
    FaPeopleLine: <FaPeopleLine />,
    GiBookshelf: <FiBook />,
    BsFillJournalBookmarkFill: <BsFillJournalBookmarkFill />,
  };

  return (
    <div className="lg:flex bg-gray-400 hidden flex-col h-screen border-r shadow px-3 border-gray-200">
      <div className="flex justify-between items-center my-5">
        <p className="text-white text-2xl text-center font-semibold">
          Gestión de Bibliotecas
        </p>
      </div>
      <nav className="my-10 flex flex-col gap-5">
        {sidebarData &&
          sidebarData.map((item) => (
            <button
              key={item.id}
              onClick={() => router(item.path)}
              className="flex py-2.5 px-2 w-52 text-[13px] rounded transition duration-200 hover:bg-[#1cc702] hover:text-white"
            >
              <span className="mx-1 items-center">{iconMap[item.icon]}</span>{" "}
              {item.title}
            </button>
          ))}
      </nav>{" "}
      <button className="my-10 flex py-2.5 px-2 w-52 rounded transition duration-200 hover:bg-[#1cc702] hover:text-white">
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Sidebar;
