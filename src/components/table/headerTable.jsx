import React from "react";
import { FiSearch } from "react-icons/fi";

const HeaderTable = ({ setFilterTextValue, title, children, onClick }) => {
  return (
    <div className="flex items-center w-full  justify-between h-16 border bg-white  border-gray-300 shadow rounded-md px-4   z-10">
      <div className="flex items-center w-full justify-between gap-5">
        <h1 className="text-2xl text-black">{title}</h1>
        <div className="flex gap-4 items-center">
          {children}
          {setFilterTextValue && (
            <div className="flex">
              <input
                className="border rounded rounded-r-none border-gray-300 text-black px-2  h-10 text-sm"
                type="search"
                style={{ width: 160 }}
                placeholder="Buscar ..."
                onChange={(e) => setFilterTextValue(e.target.value)}
              />
              <button
                className="text-white rounded bg-[#1cc702] h-10 text-center px-2 rounded-l-none"
                onClick={onClick}
              >
                <FiSearch size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderTable;
