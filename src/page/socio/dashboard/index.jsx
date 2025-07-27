import React, { useEffect, useState } from "react";
import { searchLibros } from "../../../utils/bookUtils";
import ReservButton from "../../../components/table/reservButton";
import { getAllLibros } from "../../../service/librosService";
import { FiSearch } from "react-icons/fi";
import ModalContainer from "../../../components/modalContainer";

const SocioDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [libros, setLibros] = useState([]);
  const [filterText, setFilterText] = useState("");
  const filteredLibros = searchLibros(libros, filterText);

  const fetchLibros = async () => {
    const data = await getAllLibros();
    if (data) setLibros(data);
  };

  useEffect(() => {
    fetchLibros();
  }, []);

  const handleSearchSubmit = (e, libros, filterText, setShowModal) => {
    e.preventDefault();

    if (!filterText.trim()) {
      setShowModal(false);
      return;
    }

    const results = searchLibros(libros, filterText);
    setShowModal(results.length > 0);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFilterText("");
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="pt-36 mx-5 md:pt-24">
        <form
          className="flex w-full mx-auto items-center py-2 md:w-1/2 bg-gray-100 h-12 rounded-xl shadow px-4 gap-2"
          onSubmit={(e) =>
            handleSearchSubmit(e, libros, filterText, setShowModal)
          }
        >
          <input
            type="search"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Buscar libro"
            className="flex w-full h-10 bg-white rounded-xl border border-gray-800 text-gray-800 px-4"
          />
          <button
            type="submit"
            disabled={!filterText}
            className={`ml-2 p-2 rounded-full transition text-white ${
              !filterText
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#1cc702] hover:opacity-75"
            }`}
          >
            <FiSearch size={20} />
          </button>
        </form>

        {/* Imagen decorativa */}
        <div className="flex justify-center mt-6 px-4">
          <img
            src="/user2.jpg"
            alt="Imagen ilustrativa biblioteca"
            className="w-full max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
      {showModal && (
        <ModalContainer
          open={showModal}
          setOpen={handleCloseModal}
          title="Listado compendio bibliografico"
        >
          <div className="hidden md:block max-h-[400px] overflow-y-auto">
            <table className="w-full table-auto border text-[12px] border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Título</th>
                  <th className="border p-2">Autor</th>
                  <th className="border p-2">Editorial</th>
                  <th className="border p-2">Estado</th>
                  <th className="border p-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredLibros?.map((libro, index) => (
                  <tr key={index} className="text-center">
                    <td className="border p-2">{libro?.titulo}</td>
                    <td className="border p-2">{libro?.autor}</td>
                    <td className="border p-2">{libro?.editorial}</td>
                    <td className="border p-2">
                      {" "}
                      <span
                        className={`px-2 py-0.5 rounded-full text-white text-xs font-semibold
                      ${
                        libro?.estado === "Disponible"
                          ? "bg-green-500"
                          : libro?.estado === "Prestamo"
                          ? "bg-red-500"
                          : "bg-orange-500"
                      }`}
                      >
                        {libro?.estado}
                      </span>
                    </td>
                    <td className="border p-2 ">
                      <span className="flex justify-center">
                        {" "}
                        <ReservButton libro={libro} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden grid gap-4 max-h-[400px] overflow-y-auto">
            {filteredLibros?.map((libro, index) => (
              <div
                key={index}
                className="border p-2 rounded shadow text-[12px] flex flex-col gap-1 bg-white"
              >
                <p>
                  <strong>Título:</strong> {libro?.titulo}
                </p>
                <p>
                  <strong>Autor:</strong> {libro?.autor}
                </p>
                <p>
                  <strong>Editorial:</strong> {libro?.editorial}
                </p>
                <p>
                  <strong>Estado:</strong>{" "}
                  <span
                    className={`px-2 py-0.5 rounded-full text-white text-xs font-semibold
                  ${
                    libro?.estado === "Disponible"
                      ? "bg-green-500"
                      : libro?.estado === "Prestamo"
                      ? "bg-red-500"
                      : "bg-orange-500"
                  }`}
                  >
                    {libro?.estado}
                  </span>
                </p>
                <div className="mt-2">
                  <ReservButton libro={libro} />
                </div>
              </div>
            ))}
          </div>
        </ModalContainer>
      )}
    </div>
  );
};
export default SocioDashboard;
