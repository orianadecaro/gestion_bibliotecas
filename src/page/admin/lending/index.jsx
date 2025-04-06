import React from "react";
import HeaderTable from "../../../components/table/headerTable";
import { FaPlus } from "react-icons/fa";
import ActionsTable from "../../../components/table/actionTable";

const LendingList = () => {
  const libro = [
    {
      titulo: "Cien Años de Soledad",
      autor: "Gabriel García Márquez",
      editorial: "Sudamericana",
      estado: "Disponible",
    },
  ];
  return (
    <div className="h-full w-full px-3 py-2">
      <HeaderTable
        title="Listado de prestamos & devoluciones"
        setFilterTextValue={() => ""}
        onClick={() => ""}
      >
        <button className="rounded bg-gray-400 h-9 gap-2  w-auto items-center justify-center flex  text-center px-2 ">
          <FaPlus className="text-white text-lg " />
          agregar
        </button>
      </HeaderTable>
      <div className="bg-white my-2 p-3 rounded h-[84vh] w-full">
        <table className="w-full  table-auto rounded border text-[12px] border-gray-100">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Título</th>
              <th className="border p-2">Autor</th>
              <th className="border p-2">Editorial</th>
              <th className="border p-2">Estado</th>
              <th className="border p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {libro.map((libro, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{libro.titulo}</td>
                <td className="border p-2">{libro.autor}</td>
                <td className="border p-2">{libro.editorial}</td>
                <td className="border p-2">{libro.estado}</td>
                <td className="border p-2">
                  <ActionsTable
                    handleDelete={() => ""}
                    handleEdit={() => ""}
                    handleView={() => ""}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
      </div>{" "}
    </div>
  );
};
export default LendingList;
