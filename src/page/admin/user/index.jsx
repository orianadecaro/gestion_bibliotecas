import React, { useEffect, useState } from "react";
import HeaderTable from "../../../components/table/headerTable";
import { FaPlus } from "react-icons/fa";
import ActionsTable from "../../../components/table/actionTable";
import {
  deleteUsuarios,
  getAllUsuarios,
} from "../../../service/usuariosService";
import { UserForm } from "./userForm";
import { UserDetail } from "./userDetail";
import { searchUser } from "../../../utils/userUtils";
import { getAllPerfiles } from "../../../service/perfilesService";

const UserList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [perfiles, setPerfiles] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [filterText, setFilterText] = useState("");
  const filteredUser = searchUser(user, filterText);

  const fetchUser = async () => {
    const data = await getAllUsuarios();
    if (data) setUser(data);
  };

  const fetchPerfiles = async () => {
    const data = await getAllPerfiles();
    console.log(data);
    if (data) setPerfiles(data);
  };

  useEffect(() => {
    fetchUser();
    fetchPerfiles();
  }, []);

  const getPerfilNombre = (id) => {
    const perfil = perfiles.find((p) => p.id === id);
    return perfil ? perfil.nombre : id;
  };

  const handleDeleteUser = async (id) => {
    if (confirm("¿Estás seguro de que deseas eliminar este user?")) {
      try {
        await deleteUsuarios(id);
        await fetchUser();
      } catch (error) {
        console.error("No se pudo eliminar el user:", error);
      }
    }
  };

  return (
    <div className="h-full w-full px-3 py-2">
      <HeaderTable
        title="Listado de usuarios"
        setFilterTextValue={(value) => setFilterText(value)}
        onClick={() => ""}
      >
        <button
          className="rounded bg-gray-400 h-6 md:h-9 gap-2 cursor-pointer w-auto items-center justify-center flex  text-center px-2 "
          onClick={() => {
            setSelectedUser(null), setIsModalOpen(true);
          }}
        >
          <FaPlus className="text-white text-base md:text-lg" />
          <span className="hidden md:flex text-white text-lg">agregar</span>
        </button>
      </HeaderTable>
      <div className="bg-white my-2 p-3 rounded h-[84vh] w-full">
        <div className="h-full overflow-y-auto overflow-x-auto">
          <table className="w-full  table-auto rounded border text-[9px] md:text-[12px] border-gray-100">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 md:p-2">Nombre</th>
                <th className="border p-1 md:p-2">Telefono</th>
                <th className="border p-1 md:p-2">Email</th>
                <th className="border p-1 md:p-2">Perfil</th>
                <th className="border p-1 md:p-2">Estado</th>
                <th className="border p-1 md:p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredUser.map((user, index) => (
                <tr key={index} className="text-[8px] md:text-[12px]">
                  <td className="border p-1 md:p-2">{user.nombre}</td>
                  <td className="border p-1 md:p-2">{user.telefono}</td>
                  <td className="border p-1 md:p-2">{user.email}</td>
                  <td className="border p-1 text-center md:p-2">
                    {getPerfilNombre(user.perfil_id)}
                  </td>
                  <td className="border text-center p-1 md:p-2">
                    <span
                      className={`font-semibold text-white py-1 px-2 rounded-full ${
                        user.estado === true ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      {user.estado === true ? "Habilitado" : "No habilitado"}
                    </span>{" "}
                  </td>
                  <td className="border p-2">
                    <ActionsTable
                      handleDelete={() => handleDeleteUser(user.id)}
                      handleEdit={() => {
                        setSelectedUser(user);
                        setIsModalOpen(true);
                      }}
                      handleView={() => {
                        setSelectedUser(user);
                        setIsDetailOpen(true);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>{" "}
        </div>{" "}
      </div>
      <UserForm
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedUser(null);
        }}
        selectItem={selectedUser}
        onUpdate={fetchUser}
      />
      <UserDetail
        isOpen={isDetailOpen}
        onClose={() => {
          setIsDetailOpen(false);
          setSelectedUser(null);
        }}
        user={{
          ...selectedUser,
          perfil_nombre: perfiles.find((p) => p.id === selectedUser?.perfil_id)
            ?.nombre,
        }}
      />
    </div>
  );
};
export default UserList;
