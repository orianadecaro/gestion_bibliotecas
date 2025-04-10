import React from "react";
import { FaPlus } from "react-icons/fa";
import HeaderTable from "../../../components/table/headerTable";
import ActionsTable from "../../../components/table/actionTable";

const SocioList = () => {
  const socio = [
    {
      Nombre: "Oriana De Caro",
      Email: "ori@gmail.com",
      Perfil: "Alumno",
      estado: "Disponible",
    },
  ];
  return (
    <div className="h-full w-full px-3 py-2">
      <HeaderTable
        title="Listado de socios"
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
              <th className="border p-2">Perfil</th>
              <th className="border p-2">Estado</th>
              <th className="border p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {socio.map((libro, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{libro.Nombre}</td>
                <td className="border p-2">{libro.Email}</td>
                <td className="border p-2">{libro.Perfil}</td>
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
export default SocioList;
