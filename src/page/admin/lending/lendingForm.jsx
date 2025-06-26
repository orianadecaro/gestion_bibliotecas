import React, { useEffect, useState } from "react";
import { getAllLibros } from "../../../service/librosService";
import { getAllSocios } from "../../../service/sociosService";
import {
  createPrestamos,
  updatePrestamos,
} from "../../../service/prestamosService";
import { FaSpinner } from "react-icons/fa";

export const LendingForm = ({ isOpen, onClose, selectItem, onUpdate }) => {
  const [libros, setLibros] = useState([]);
  const [socios, setSocios] = useState([]);
  const [formData, setFormData] = useState({
    libro_id: "",
    socio_id: "",
    fechaprestamo: "",
    fechadevolucion: "",
    estado: "",
  });
  const isEditing = Boolean(selectItem?.id);
  const [libroSearch, setLibroSearch] = useState("");
  const [socioSearch, setSocioSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredLibros = libros.filter((libro) =>
    `${libro.titulo} ${libro.codigo} ${libro.autor}`
      .toLowerCase()
      .includes(libroSearch.toLowerCase())
  );

  const filteredSocios = socios.filter((socio) =>
    socio.nombre.toLowerCase().includes(socioSearch.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      const [librosData, sociosData] = await Promise.all([
        getAllLibros(),
        getAllSocios(),
      ]);
      setLibros(librosData || []);
      setSocios(sociosData || []);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setLoading(false);
    if (selectItem) {
      setFormData(selectItem || {});

      const libroSeleccionado = libros.find(
        (l) => l.id === selectItem.libro_id
      );
      const socioSeleccionado = socios.find(
        (s) => s.id === selectItem.socio_id
      );

      setLibroSearch(
        libroSeleccionado
          ? `${libroSeleccionado.codigo} - ${libroSeleccionado.titulo} - ${libroSeleccionado.autor}`
          : ""
      );

      setSocioSearch(socioSeleccionado ? socioSeleccionado.nombre : "");
    } else {
      setFormData({
        libro_id: "",
        socio_id: "",
        fechaprestamo: "",
        fechadevolucion: "",
        estado: "",
      });
      setLibroSearch("");
      setSocioSearch("");
    }
  }, [selectItem, libros, socios]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        ...formData,
        fechadevolucion: formData.fechadevolucion || null,
      };

      if (selectItem?.id) {
        await updatePrestamos({ ...payload, id: selectItem.id });
      } else {
        await createPrestamos(payload);
      }
      if (onUpdate) await onUpdate();
      setFormData({
        libro_id: "",
        socio_id: "",
        fechaprestamo: "",
        fechadevolucion: "",
        estado: "",
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
    <div>
      {" "}
      <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)]  flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-lg font-semibold mb-4">
            {selectItem?.id
              ? "Editar  préstamo o devolución"
              : "Agregar préstamo o devolución"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <label className="text-sm font-medium">Buscar libro</label>
              <input
                type="search"
                value={libroSearch}
                onChange={(e) => {
                  setLibroSearch(e.target.value);
                  setFormData((prev) => ({ ...prev, libro_id: "" }));
                }}
                placeholder="Buscar libro por título, código o autor"
                className={`w-full border p-2 mb-2 rounded text-sm ${
                  isEditing
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white text-black"
                }`}
                disabled={isEditing}
              />

              {libroSearch && !formData.libro_id && (
                <ul className="absolute z-10 w-full max-h-40 overflow-y-auto bg-white border border-gray-300 rounded shadow text-sm">
                  {filteredLibros.length > 0 ? (
                    filteredLibros.map((libro) => (
                      <li
                        key={libro.id}
                        onClick={() => {
                          setLibroSearch(
                            `${libro.codigo} - ${libro.titulo} -  ${libro.autor}`
                          );
                          setFormData((prev) => ({
                            ...prev,
                            libro_id: libro.id,
                          }));
                        }}
                        className="px-2 py-1 cursor-pointer hover:bg-gray-100"
                      >
                        {libro.codigo}- {libro.titulo} - {libro.autor}
                      </li>
                    ))
                  ) : !formData.libro_id ? (
                    <li className="px-2 py-1 text-gray-400">
                      No se encontraron libros
                    </li>
                  ) : null}
                </ul>
              )}
            </div>

            <div className="relative">
              <label className="text-sm font-medium">Buscar socio</label>
              <input
                type="search"
                value={socioSearch}
                onChange={(e) => {
                  setSocioSearch(e.target.value);
                  setFormData((prev) => ({ ...prev, socio_id: "" }));
                }}
                placeholder="Buscar socio por nombre"
                className={`w-full border p-2 mb-2 rounded text-sm ${
                  isEditing
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white text-black"
                }`}
                disabled={isEditing}
              />

              {socioSearch && !formData.socio_id && (
                <ul className="absolute z-10 w-full max-h-40 overflow-y-auto bg-white border border-gray-300 rounded shadow text-sm">
                  {filteredSocios.length > 0 ? (
                    filteredSocios.map((socio) => (
                      <li
                        key={socio.id}
                        onClick={() => {
                          setSocioSearch(socio.nombre);
                          setFormData((prev) => ({
                            ...prev,
                            socio_id: socio.id,
                          }));
                        }}
                        className="px-2 py-1 cursor-pointer hover:bg-gray-100"
                      >
                        {socio.nombre}
                      </li>
                    ))
                  ) : !formData.socio_id ? (
                    <li className="px-2 py-1 text-gray-400">
                      No se encontraron socios
                    </li>
                  ) : null}
                </ul>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Fecha Prestamo</label>
              <input
                type="date"
                name="fechaprestamo"
                value={formData.fechaprestamo}
                onChange={handleInputChange}
                className={`w-full border p-2 mb-2 rounded text-sm ${
                  isEditing
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white text-black"
                }`}
                disabled={isEditing}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Fecha Devolucion</label>
              <input
                type="date"
                name="fechadevolucion"
                value={formData.fechadevolucion}
                onChange={handleInputChange}
                className="w-full border p-2 rounded text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Estado</label>
              <select
                name="estado"
                value={formData.estado}
                onChange={handleInputChange}
                className="w-full border p-2 rounded text-sm"
                required
              >
                <option value="Reservado" className="bg-orange-500">
                  Reservado
                </option>
                <option value="En prestamo" className="bg-red-500">
                  En préstamo
                  <option value="Devuelto" className="bg-green-500">
                    Devuelto
                  </option>
                </option>
              </select>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <button
                type="button"
                onClick={onClose}
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
    </div>
  );
};
