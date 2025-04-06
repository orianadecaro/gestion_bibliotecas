import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ModalContainer from "../components/modalContainer";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const libro = [
    {
      titulo: "Cien Años de Soledad",
      autor: "Gabriel García Márquez",
      editorial: "Sudamericana",
      estado: "Disponible",
    },
    // Puedes agregar más libros aquí
  ];
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/book.png')",
      }}
    >
      <div className="mx-auto mt-16 py-2 w-1/2 bg-gray-100 flex items-center h-12 rounded-xl shadow px-4 gap-2">
        <form className="flex w-full items-center">
          <input
            type="search"
            placeholder="Buscar libro"
            className="flex-grow h-10 bg-white rounded-xl border border-gray-800 text-gray-800 px-4"
          />
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="ml-2 bg-[#1cc702] text-white p-2 rounded-full hover:opacity-75 transition"
          >
            <FiSearch size={20} />
          </button>
        </form>
      </div>
      {showModal && (
        <ModalContainer
          open={showModal}
          setOpen={setShowModal}
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
              {libro.map((libro, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{libro.titulo}</td>
                  <td className="border p-2">{libro.autor}</td>
                  <td className="border p-2">{libro.editorial}</td>
                  <td className="border p-2">{libro.estado}</td>
                  <td className="border p-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
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
