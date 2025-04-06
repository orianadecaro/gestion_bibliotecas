import React from "react";
import { sidebarData } from "../constants/sidebarData";

const Sidebar = ({ handleTagClick }) => {
  return (
    <div className="lg:flex lg:fixed md:top-24 hidden flex-col h-full border-r px-8 border-slate-700">
      <div className="flex justify-between items-center my-5">
        <p className="text-white text-2xl font-semibold">
          Gestion de Bibliotecas
        </p>
      </div>
      <nav>
        {sidebarData &&
          sidebarData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTagClick(item.title)}
              className="flex py-2.5 px-2 w-40 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
            >
              {item.title}
            </button>
          ))}
      </nav>
    </div>
  );
};

export default Sidebar;
