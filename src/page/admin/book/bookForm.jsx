import React, { useState, useEffect } from "react";
import { createLibros, updateLibros } from "../../../service/librosService";
import { FaSpinner } from "react-icons/fa";

export const BookForm = ({ isOpen, onClose, selectItem, onUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
    autor: "",
    codigo: "",
    materia: "",
    editorial: "",
    cantidad: "",
    estado: "Disponible",
  });

  useEffect(() => {
    setLoading(false);
    if (selectItem) {
      setFormData(selectItem);
    } else {
      setFormData({
        titulo: "",
        autor: "",
        codigo: "",
        materia: "",
        editorial: "",
        cantidad: "",
        estado: "Disponible",
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
        await updateLibros({ ...formData, id: selectItem.id });
      } else {
        await createLibros(formData);
      }
      if (onUpdate) await onUpdate();
      setFormData({
        titulo: "",
        autor: "",
        codigo: "",
        materia: "",
        editorial: "",
        cantidad: "",
        estado: "Disponible",
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
          {selectItem?.id ? "Editar Libro" : "Agregar Libro"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {[
            { label: "Titulo", name: "titulo" },
            { label: "Autor", name: "autor" },
            { label: "Código", name: "codigo" },
            { label: "Materia", name: "materia" },
            { label: "Editorial", name: "editorial" },
            { label: "Cantidad", name: "cantidad" },
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
              <option value="Disponible">Disponible</option>
              <option value="No disponible">No disponible</option>
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
