import React, { useEffect, useState } from "react";
import { getLibrosById } from "../../../service/librosService";
import { getSociosById } from "../../../service/sociosService";
import { formatDate } from "../../../utils/lendingUtils";

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
        <h2 className="text-lg font-semibold mb-4">
          Detalle del Préstamo/Devolución
        </h2>
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
            <strong>Fecha Préstamo:</strong>{" "}
            {formatDate(prestamo.fechaprestamo)}
          </li>
          <li>
            <strong>Fecha Devolución:</strong>{" "}
            {formatDate(prestamo.fechadevolucion) || "No"}
          </li>

          <li>
            <strong>Estado:</strong>{" "}
            <span
              className={`px-2 py-1 rounded-full font-semibold text-white text-xs md:text-sm ${
                prestamo.estado === "Disponible"
                  ? "bg-green-600"
                  : prestamo.estado === "Reservado"
                  ? "bg-orange-500"
                  : "bg-red-600"
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
