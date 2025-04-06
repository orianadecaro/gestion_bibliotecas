import React from "react";
import { IoClose } from "react-icons/io5";

const ModalContainer = ({ open, setOpen, title, children }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start mt-32 justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Fondo claro y translúcido */}
      <div
        className="absolute inset-0 bg-opacity-70"
        onClick={() => {
          setOpen(false);
        }}
      />

      {/* Contenedor del modal */}
      <div
        className="relative z-10 w-1/2 mx-4 bg-white rounded-lg shadow-xl py-2 px-4"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* Título y botón cerrar */}
        <div className="flex justify-between items-center mb-4">
          {title && (
            <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          )}

          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-red-500  text-3xl font-bold"
          >
            <IoClose />
          </button>
        </div>

        {/* Contenido */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalContainer;
