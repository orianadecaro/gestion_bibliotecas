import React, { useState } from "react";
import HeaderTable from "../../../components/table/headerTable";
import { FaPlus } from "react-icons/fa";
import ActionsTable from "../../../components/table/actionTable";

const LendingList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    Nombre: "",
    Email: "",
    Perfil: "",
    estado: "Disponible",
  });
  const libro = [
    {
      titulo: "Cien Años de Soledad",
      autor: "Gabriel García Márquez",
      fechaPrestamo: "10/04/25",
      fechaDevolucion: "15/04/25",
      estado: "Reservado",
      codigo: "123456789",
    },
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser([...user, newUser]);
    setNewUser({ Nombre: "", Email: "", Perfil: "", estado: "Disponible" });
    setIsModalOpen(false);
  };
  return (
    <div className="h-full w-full px-3 py-2">
      <HeaderTable
        title="Listado de préstamos & devoluciones"
        setFilterTextValue={() => ""}
        onClick={() => ""}
      >
        <button
          className="rounded bg-gray-400 h-9 gap-2 cursor-pointer  w-auto items-center justify-center flex  text-center px-2 "
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus className="text-white text-lg " />
          agregar
        </button>
      </HeaderTable>
      <div className="bg-white my-2 p-3 rounded h-[84vh] w-full">
        <table className="w-full  table-auto rounded border text-[12px] border-gray-100">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Código</th>
              <th className="border p-2">Título</th>
              <th className="border p-2">Socio</th>
              <th className="border p-2">Fecha Prestamo</th>
              <th className="border p-2">Fecha Devolucion</th>
              <th className="border p-2">Estado</th>
              <th className="border p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {libro.map((libro, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{libro.codigo}</td>
                <td className="border p-2">{libro.titulo}</td>
                <td className="border p-2">{libro.autor}</td>
                <td className="border p-2">{libro.fechaPrestamo}</td>
                <td className="border p-2">{libro.fechaDevolucion}</td>{" "}
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
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)]  flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Agregar prestamo o devolucion
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-sm font-medium">Titulo</label>
                <input
                  type="text"
                  name="Titulo"
                  value={newUser.Nombre}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded text-sm"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Codigo</label>
                <input
                  type="text"
                  name="Titulo"
                  value={newUser.Nombre}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded text-sm"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Socio</label>
                <input
                  type="text"
                  name="Socio"
                  value={newUser.Email}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded text-sm"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Fecha Prestamo</label>
                <input
                  type="datetime-local"
                  name="Fecha"
                  value={newUser.Perfil}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded text-sm"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Fecha Devolucion</label>
                <input
                  type="datetime-local"
                  name="Fecha"
                  value={newUser.Perfil}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded text-sm"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Estado</label>
                <input
                  type="text"
                  name="Fecha"
                  value={newUser.Perfil}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded text-sm"
                  required
                />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-sm px-4 cursor-pointer  py-2 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white cursor-pointer  text-sm px-4 py-2 rounded"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default LendingList;
