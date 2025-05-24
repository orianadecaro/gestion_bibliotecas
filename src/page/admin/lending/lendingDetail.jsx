import React, { useEffect, useState } from "react";
import { getLibrosById } from "../../../service/librosService";
import { getSociosById } from "../../../service/sociosService";

export const LendingDetail = ({ isOpen, onClose, prestamo }) => {
  const [libro, setLibro] = useState(null);
  const [socio, setSocio] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (prestamo) {
        try {
          const libroData = await getLibrosById(prestamo.libro_id);
          const socioData = await getSociosById(prestamo.socio_id);
          setLibro(libroData);
          setSocio(socioData);
        } catch (error) {
          console.error("Error al obtener datos:", error);
        }
      }
    };

    fetchData();
  }, [prestamo]);

  if (!isOpen || !prestamo) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Detalle del Prestamo</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Código:</strong> {libro?.codigo || "Cargando..."}
          </li>
          <li>
            <strong>Título:</strong> {libro?.titulo || "Cargando..."}
          </li>
          <li>
            <strong>Socio:</strong> {socio?.nombre || "Cargando..."}
          </li>
          <li>
            <strong>Fecha Préstamo:</strong> {prestamo.fechaprestamo}
          </li>
          <li>
            <strong>Fecha Devolución:</strong> {prestamo.fechadevolucion}
          </li>

          <li>
            <strong>Estado:</strong>{" "}
            <span
              className={`font-semibold ${
                prestamo.estado === "Disponible"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {prestamo.estado}
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
