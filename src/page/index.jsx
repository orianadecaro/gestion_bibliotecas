import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import ModalContainer from "../components/modalContainer";
import { MdOutlineWhatsapp } from "react-icons/md";
import { getAllLibros } from "../service/librosService";
import { searchLibros } from "../utils/bookUtils";

const HomePage = () => {
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
        backgroundImage: "url('/book.png')",
      }}
    >
      <div className="mx-auto mt-16 py-2 w-1/2 bg-gray-100 flex items-center h-12 rounded-xl shadow px-4 gap-2">
        <form
          className="flex w-full items-center"
          onSubmit={(e) =>
            handleSearchSubmit(e, libros, filterText, setShowModal)
          }
        >
          <input
            type="search"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Buscar libro"
            className="flex-grow h-10 bg-white rounded-xl border border-gray-800 text-gray-800 px-4"
          />
          <button
            type="submit"
            className="ml-2 bg-[#1cc702] text-white p-2 rounded-full hover:opacity-75 transition"
          >
            <FiSearch size={20} />
          </button>
        </form>
      </div>
      {showModal && (
        <ModalContainer
          open={showModal}
          setOpen={handleCloseModal}
          title="Listado compendio bibliografico"
        >
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
              {filteredLibros.map((libro, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{libro.titulo}</td>
                  <td className="border p-2">{libro.autor}</td>
                  <td className="border p-2">{libro.editorial}</td>
                  <td className="border p-2">{libro.estado}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => {
                        const message = `Hola, quiero reservar el libro "${libro.titulo}" de ${libro.autor} (${libro.editorial}).`;
                        const phoneNumber = "5493874566383";
                        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                          message
                        )}`;
                        window.open(url, "_blank");
                      }}
                      className="bg-blue-500 text-white flex  gap-2 items-center justify-center px-2 py-1 rounded hover:bg-blue-600"
                    >
                      <MdOutlineWhatsapp />
                      Reservar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>{" "}
        </ModalContainer>
      )}
    </div>
  );
};

export default HomePage;
