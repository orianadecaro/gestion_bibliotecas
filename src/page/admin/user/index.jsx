import React from "react";
import HeaderTable from "../../../components/table/headerTable";
import { FaPlus } from "react-icons/fa";
import ActionsTable from "../../../components/table/actionTable";

const UserList = () => {
  const user = [
    {
      Nombre: "Sandra Galeano",
      Email: "sandra@gmail.com",
      Perfil: "Bibliotecaria",
      estado: "Disponible",
    },
  ];
  return (
    <div className="h-full w-full px-3 py-2">
      <HeaderTable
        title="Listado de usuarios"
        setFilterTextValue={() => ""}
        onClick={() => ""}
      >
        <button className="rounded bg-gray-400 h-9 gap-2  w-auto items-center justify-center flex  text-center px-2 ">
          <FaPlus className="text-white text-lg " />
          agregar
        </button>
      </HeaderTable>
      <div>
        <div className="bg-white my-2 p-3 rounded h-[84vh] w-full">
          <table className="w-full  table-auto rounded border text-[12px] border-gray-100">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Nombre</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Perfil</th>
                <th className="border p-2">Estado</th>
                <th className="border p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {user.map((libro, index) => (
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
    </div>
  );
};
export default UserList;
