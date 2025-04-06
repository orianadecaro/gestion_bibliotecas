import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaEye, FaTrash } from "react-icons/fa";

const ActionsTable = ({ handleEdit, handleView, handleDelete }) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <button
        className="bg-[#1cc702] cursor-pointer text-white flex  gap-2 items-center justify-center px-2 py-1 rounded hover:bg-blue-600"
        onClick={handleView}
      >
        <FaEye />
      </button>
      <button
        className="bg-blue-500 cursor-pointer text-white flex  gap-2 items-center justify-center px-2 py-1 rounded hover:bg-blue-600"
        onClick={handleEdit}
      >
        <CiEdit />
      </button>
      <button
        className="bg-gray-500 cursor-pointer text-white flex  gap-2 items-center justify-center px-2 py-1 rounded hover:bg-blue-600"
        onClick={handleDelete}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default ActionsTable;
