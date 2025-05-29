import React, { useEffect, useState } from "react";
import HeaderTable from "../../../components/table/headerTable";
import ActionsTable from "../../../components/table/actionTable";
import {
  getAllPerfiles,
  createPerfiles,
  updatePerfiles,
  deletePerfiles,
} from "../../../service/perfilesService";

const ProfileList = () => {
  const [profile, setProfile] = useState([]);
  const [editingProfile, setEditingProfile] = useState(null);
  const [viewingProfile, setViewingProfile] = useState(null);
  const [newProfile, setNewProfile] = useState({ nombre: "" });

  const fetchProfile = async () => {
    const data = await getAllPerfiles();
    if (data) setProfile(data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (profileData) => {
    setNewProfile(profileData);
    setEditingProfile(profileData.id);
    setViewingProfile(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro que deseas eliminar este perfil?")) {
      await deletePerfiles(id);
      fetchProfile();
    }
  };

  const handleView = (profileData) => {
    setNewProfile(profileData);
    setViewingProfile(profileData.id);
    setEditingProfile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingProfile) {
      await updatePerfiles({ id: editingProfile, ...newProfile });
    } else {
      await createPerfiles(newProfile);
    }
    setNewProfile({ nombre: "" });
    setEditingProfile(null);
    fetchProfile();
  };

  const handleCancel = () => {
    setNewProfile({ nombre: "" });
    setEditingProfile(null);
    setViewingProfile(null);
  };

  return (
    <div className="h-full w-full px-3 py-2">
      <HeaderTable title="Listado de perfiles"></HeaderTable>

      <div className="bg-white my-2 p-3 grid grid-cols-1 md:grid-cols-2 gap-4 rounded h-[84vh] w-full">
        <table className="w-full h-fit table-auto rounded border text-[12px] border-gray-100">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {profile.map((p) => (
              <tr key={p.id} className="text-start">
                <td className="border p-2">{p.nombre.toUpperCase()}</td>
                <td className="border p-2">
                  <ActionsTable
                    handleDelete={() => handleDelete(p.id)}
                    handleEdit={() => handleEdit(p)}
                    handleView={() => handleView(p)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bg-white border border-gray-600 h-40 shadow rounded-lg p-3  w-full">
          <h2 className="text-lg font-semibold mb-1">
            {viewingProfile
              ? "Detalle Perfil"
              : editingProfile
              ? "Editar Perfil"
              : "Agregar nuevo Perfil"}
          </h2>
          <form onSubmit={handleSubmit} className="my-1">
            <div>
              <label className="text-sm font-medium">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={newProfile.nombre}
                onChange={handleInputChange}
                className="w-full border p-2 rounded text-sm"
                required
                disabled={!!viewingProfile}
              />
            </div>

            <div className="flex justify-end gap-2 pt-3">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-300 text-sm px-4 cursor-pointer py-2 rounded"
              >
                {viewingProfile ? "Cerrar Vista" : "Cancelar"}
              </button>
              {viewingProfile ? null : (
                <button
                  type="submit"
                  className="bg-blue-600 text-white cursor-pointer text-sm px-4 py-2 rounded"
                >
                  {editingProfile ? "Actualizar" : "Guardar"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileList;
