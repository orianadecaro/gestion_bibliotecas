import React from "react";

export const BookDetail = ({ isOpen, onClose, libro }) => {
  if (!isOpen || !libro) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Detalle del Libro</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Código:</strong> {libro.codigo}
          </li>
          <li>
            <strong>Título:</strong> {libro.titulo}
          </li>
          <li>
            <strong>Autor:</strong> {libro.autor}
          </li>
          <li>
            <strong>Materia:</strong> {libro.materia}
          </li>
          <li>
            <strong>Editorial:</strong> {libro.editorial}
          </li>
          <li>
            <strong>Cantidad:</strong> {libro.cantidad}
          </li>
          <li>
            <strong>Estado:</strong>{" "}
            <span
              className={`px-2 py-1 rounded-full font-semibold text-white text-xs md:text-sm ${
                libro.estado === "Disponible" ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {libro.estado}
            </span>
          </li>
        </ul>

        <div className="flex justify-end pt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-sm px-4 py-2 rounded"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
