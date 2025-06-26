import React, { useEffect, useState } from "react";
import { getAllPrestamos } from "../../../service/prestamosService";
import { getAllLibros } from "../../../service/librosService";
import { getAllSocios } from "../../../service/sociosService";
import HeaderTable from "../../../components/table/headerTable";
import { formatDate } from "../../../utils/lendingUtils";

const SocioHistory = () => {
  const [prestamos, setPrestamos] = useState([]);
  const [libros, setLibros] = useState([]);
  const [socios, setSocios] = useState([]);

  const fetchData = async () => {
    try {
      const [prestamosData, librosData, sociosData] = await Promise.all([
        getAllPrestamos(),
        getAllLibros(),
        getAllSocios(),
      ]);

      if (prestamosData) setPrestamos(prestamosData);
      if (librosData) setLibros(librosData);
      if (sociosData) setSocios(sociosData);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-full w-full mt-0 md:mt-16 px-3 py-2">
      <HeaderTable
        title="Listado de préstamos & devoluciones"
        setFilterTextValue={() => ""}
        onClick={() => ""}
      ></HeaderTable>
      <div className="bg-white my-2 p-3 rounded h-[84vh] w-full">
        <div className="h-full overflow-y-auto overflow-x-auto">
          <table className="w-full  table-auto rounded border text-[9px] md:text-[12px] border-gray-100">
            <thead>
              <tr className="bg-gray-100">
                <th className="border  p-1 md:p-2 ">Código</th>
                <th className="border  p-1 md:p-2">Título</th>
                <th className="border  p-1 md:p-2">Socio</th>
                <th className="border  p-1 md:p-2">Fecha Préstamo</th>
                <th className="border  p-1 md:p-2">Fecha Devolución</th>
                <th className="border  p-1 md:p-2">Estado</th>
              </tr>
            </thead>
            <tbody>
              {prestamos.map((prestamo) => {
                const libro = libros.find((l) => l.id === prestamo.libro_id);
                const socio = socios.find((s) => s.id === prestamo.socio_id);

                return (
                  <tr key={prestamo.id} className="text-[8px] md:text-[12px]">
                    <td className="border  p-1 md:p-2 ">{libro.codigo}</td>
                    <td className="border  p-1 md:p-2">{libro.titulo}</td>
                    <td className="border  p-1 md:p-2">
                      {socio ? socio.nombre : "Socio no encontrado"}
                    </td>
                    <td className="border text-center p-1 md:p-2">
                      {formatDate(prestamo.fechaprestamo)}
                    </td>
                    <td className="border  text-center   p-1 md:p-2">
                      {formatDate(prestamo.fechadevolucion)}
                    </td>
                    <td className="border text-center  p-1 md:p-2">
                      <span
                        className={`px-2 py-1  rounded-full font-semibold text-white text-xs md:text-sm ${
                          prestamo.estado === "Devuelto"
                            ? "bg-green-600"
                            : prestamo.estado === "Reservado"
                            ? "bg-orange-500"
                            : "bg-red-600"
                        }`}
                      >
                        {prestamo.estado}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>{" "}
        </div>{" "}
      </div>
    </div>
  );
};
export default SocioHistory;
