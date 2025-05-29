import React from "react";
import { MdOutlineWhatsapp } from "react-icons/md";

const ReservButton = ({ libro }) => {
  return (
    <div>
      <button
        onClick={() => {
          const message = `¿Hola, como están? Me gustaría reservar el libro "${libro.titulo}" de ${libro.autor}, ${libro.editorial}. En breve lo paso a buscar. ¡Muchas gracias!`;
          const url = `https://wa.me/5493874566383?text=${encodeURIComponent(
            message
          )}`;
          window.open(url, "_blank");
        }}
        className="bg-blue-500 text-white flex gap-2 items-center justify-center px-2 py-1 rounded hover:bg-blue-600"
      >
        <MdOutlineWhatsapp />
        Reservar
      </button>
    </div>
  );
};

export default ReservButton;
