import React, { useEffect, useState } from "react";
import HeaderTable from "../../../components/table/headerTable";
import { GrDownload } from "react-icons/gr";
import { LuUpload } from "react-icons/lu";
import ActionsTable from "../../../components/table/actionTable";
import { FaPlus } from "react-icons/fa";
import {
  createLibros,
  deleteLibros,
  getAllLibros,
} from "../../../service/librosService";
import { BookForm } from "./bookForm";
import { BookDetail } from "./bookDetail";
import {
  exportLibrosToExcel,
  importLibrosFromCSV,
  searchLibros,
} from "../../../utils/bookUtils";

const BookList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [libros, setLibros] = useState([]);
  const [selectedLibro, setSelectedLibro] = useState(null);
  const [filterText, setFilterText] = useState("");
  const filteredLibros = searchLibros(libros, filterText);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  const fetchLibros = async () => {
    const data = await getAllLibros();
    if (data) setLibros(data);
  };

  useEffect(() => {
    fetchLibros();
  }, []);

  const handleDeleteLibro = async (id) => {
    if (confirm("¿Estás seguro de que deseas eliminar este libro?")) {
      try {
        await deleteLibros(id);
        await fetchLibros();
      } catch (error) {
        console.error("No se pudo eliminar el libro:", error);
      }
    }
  };

  const handleImport = async (e) => {
    try {
      const importedLibros = await importLibrosFromCSV(e);

      for (const libro of importedLibros) {
        await createLibros(libro);
      }
      await fetchLibros();

      setIsImportModalOpen(false);
    } catch (error) {
      console.error("Error al importar libros:", error);
    }
  };
  return (
    <>
      <div className="h-full w-full px-3 py-2">
        <HeaderTable
          title="Listado de compendio bibliográfico"
          setFilterTextValue={(value) => setFilterText(value)}
          onClick={() => ""}
        >
          <button
            className="rounded bg-gray-400 h-6 md:h-9 cursor-pointer gap-2  w-auto items-center justify-center flex  text-center px-2 "
            onClick={() => {
              setSelectedLibro(null);
              setIsModalOpen(true);
            }}
          >
            <FaPlus className="text-white text-base md:text-lg" />
            <span className="hidden md:flex text-white text-lg">agregar</span>
          </button>
          <button
            onClick={() => exportLibrosToExcel(libros)}
            className="rounded bg-blue-500 h-6 md:h-9  gap-2 cursor-pointer text-base md:text-lg  w-auto items-center justify-center flex  text-center px-2 "
          >
            <GrDownload className="text-white text-base md:text-lg" />
            <span className="hidden md:flex text-white text-lg">
              exportar
            </span>{" "}
          </button>
          <button
            onClick={() => setIsImportModalOpen(true)}
            className="rounded bg-[#1cc702] h-6 md:h-9  gap-2 cursor-pointer   w-auto items-center justify-center flex  text-center px-2 "
          >
            <LuUpload className="text-white text-base md:text-lg " />
            <span className="hidden md:flex text-white text-lg">importar</span>
          </button>
        </HeaderTable>
        <div className="bg-white my-2 p-3 rounded h-[84vh] w-full">
          <div className="h-full overflow-y-auto overflow-x-auto">
            <table className="w-full  table-auto rounded border text-[9px] md:text-[12px] border-gray-100">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-1 md:p-2">Código</th>
                  <th className="border p-1 md:p-2">Título</th>
                  <th className="border p-1 md:p-2">Autor</th>
                  <th className="border p-1 md:p-2">Materia</th>
                  <th className="border p-1 md:p-2">Editorial</th>
                  <th className="border p-1 md:p-2">Cantidad</th>
                  <th className="border p-1 md:p-2">Estado</th>
                  <th className="border p-1 md:p-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredLibros.map((libro, index) => (
                  <tr key={index} className="text-[8px] md:text-[12px] ">
                    <td className="border p-1 md:p-2">{libro.codigo}</td>
                    <td className="border p-1 md:p-2">{libro.titulo}</td>
                    <td className="border p-1 md:p-2">{libro.autor}</td>
                    <td className="border p-1 md:p-2">{libro.materia}</td>
                    <td className="border p-1 md:p-2">{libro.editorial}</td>
                    <td className="border p-1 text-center md:p-2">
                      {libro.cantidad}
                    </td>
                    <td className="border text-center p-1 md:p-2">
                      <span
                        className={`px-2 py-1 rounded-fullfont-semibold text-white text-xs md:text-sm ${
                          libro.estado === "Disponible"
                            ? "bg-green-600"
                            : "bg-red-600"
                        }`}
                      >
                        {libro.estado}
                      </span>
                    </td>

                    <td className="border p-1 md:p-2">
                      <ActionsTable
                        handleDelete={() => handleDeleteLibro(libro.id)}
                        handleEdit={() => {
                          setSelectedLibro(libro);
                          setIsModalOpen(true);
                        }}
                        handleView={() => {
                          setSelectedLibro(libro);
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
        <BookForm
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedLibro(null);
          }}
          selectItem={selectedLibro}
          onUpdate={fetchLibros}
        />
        <BookDetail
          isOpen={isDetailOpen}
          onClose={() => {
            setIsDetailOpen(false);
            setSelectedLibro(null);
          }}
          libro={selectedLibro}
        />
        {isImportModalOpen && (
          <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md w-96">
              <h2 className="text-lg font-semibold mb-4">Importar Libros</h2>
              <input
                type="file"
                accept=".csv"
                onChange={handleImport}
                className="mb-4 border p-2 rounded text-sm bg-gray-300"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsImportModalOpen(false)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default BookList;
