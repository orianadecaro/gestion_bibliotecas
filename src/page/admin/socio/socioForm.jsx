import React, { useEffect, useState } from "react";
import { createSocios, updateSocios } from "../../../service/sociosService";
import { getAllPerfiles } from "../../../service/perfilesService";
import { FaSpinner } from "react-icons/fa";

export const SocioForm = ({ isOpen, onClose, selectItem, onUpdate }) => {
  const [perfiles, setPerfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    perfil_id: 3,
    estado: true,
  });

  useEffect(() => {
    const fetchPerfiles = async () => {
      const perfilesData = await getAllPerfiles();
      setPerfiles(perfilesData || []);
    };
    fetchPerfiles();
  }, []);

  const perfilNombre =
    perfiles.find((p) => p.id === Number(formData.perfil_id))?.nombre || "";

  useEffect(() => {
    setLoading(false);
    if (selectItem) {
      setFormData(selectItem);
    } else {
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        perfil_id: 3,
        estado: true,
      });
    }
  }, [selectItem]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (selectItem?.id) {
        await updateSocios({ ...formData, id: selectItem.id });
      } else {
        await createSocios(formData);
      }
      if (onUpdate) await onUpdate();
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        perfil_id: 3,
        estado: true,
      });

      onClose();
    } catch (error) {
      console.error("Error al guardar el libro:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">
          {selectItem?.id ? "Editar Socio" : "Agregar Socio"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {[
            { label: "Nombre y Apellido", name: "nombre" },
            { label: "Email", name: "email" },
            { label: "Teléfono", name: "telefono" },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="text-sm font-medium">{label}</label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                className="w-full border p-2 rounded text-sm"
                required
              />
            </div>
          ))}
          <div>
            <label className="text-sm font-medium">Perfil</label>
            <input
              type="text"
              name="perfil_id"
              value={perfilNombre?.toUpperCase() || ""}
              readOnly
              className="w-full border p-2 rounded text-sm bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Estado */}
          <div>
            <label className="text-sm font-medium">Estado</label>
            <select
              name="estado"
              value={formData.estado}
              onChange={handleInputChange}
              className="w-full border p-2 rounded text-sm"
              required
            >
              <option value="true">Habilitado</option>
              <option value="false">No habilitado</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-sm px-4 py-2 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white text-sm px-4 py-2 rounded flex items-center justify-center min-w-[90px]"
            >
              {loading ? (
                <FaSpinner className="animate-spin h-4 w-4" />
              ) : (
                "Guardar"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
