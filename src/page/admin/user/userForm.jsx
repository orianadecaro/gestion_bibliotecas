import React, { useEffect, useState } from "react";
import {
  createUsuarios,
  updateUsuarios,
} from "../../../service/usuariosService";
import { getAllPerfiles } from "../../../service/perfilesService";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export const UserForm = ({ isOpen, onClose, selectItem, onUpdate }) => {
  const [perfiles, setPerfiles] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    perfil_id: 2,
    password_hash: "",
    estado: true,
  });

  useEffect(() => {
    const fetchPerfiles = async () => {
      const perfilesData = await getAllPerfiles();
      const filtered = (perfilesData || []).filter(
        (p) => p.id === 1 || p.id === 2
      );
      setPerfiles(filtered);
    };
    fetchPerfiles();
  }, []);

  useEffect(() => {
    if (selectItem) {
      setFormData({
        ...selectItem,
        perfil_id: Number(selectItem.perfil_id),
        estado: selectItem.estado === true || selectItem.estado === "true",
        password_hash: selectItem.password_hash || "",
      });
    } else {
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        perfil_id: 2,
        password_hash: "",
        estado: true,
      });
    }
  }, [selectItem]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "estado") {
      setFormData((prev) => ({ ...prev, [name]: value === "true" }));
    } else if (name === "perfil_id") {
      setFormData((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectItem?.id) {
        await updateUsuarios({ ...formData, id: selectItem.id });
      } else {
        await createUsuarios(formData);
      }
      if (onUpdate) await onUpdate();
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        perfil_id: 2,
        password_hash: "",
        estado: true,
      });

      onClose();
    } catch (error) {
      console.error("Error al guardar el usuario:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">
          {selectItem?.id ? "Editar Usuario" : "Agregar Usuario"}
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
          <div className="relative">
            <label className="text-sm font-medium">Contraseña</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password_hash"
              value={formData.password_hash}
              onChange={handleInputChange}
              className="w-full border p-2 rounded text-sm pr-10"
              placeholder="Ingrese la contraseña"
              required={!selectItem?.id}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-8 text-gray-800 text-xl select-none"
            >
              {showPassword ? <BsEye /> : <BsEyeSlash />}
            </button>
          </div>
          <div>
            <label className="text-sm font-medium">Perfil</label>
            <select
              name="perfil_id"
              value={formData.perfil_id}
              onChange={handleInputChange}
              className="w-full border p-2 rounded text-sm"
              required
            >
              {perfiles.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nombre.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Estado</label>
            <select
              name="estado"
              value={formData.estado ? "true" : "false"}
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
              className="bg-blue-600 text-white text-sm px-4 py-2 rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
