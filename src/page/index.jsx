import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-cover bg-center relative">
      <div className="absolute inset-0  bg-opacity-60 z-0" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 gap-10">
        <div className="text-white max-w-xl text-center md:text-left animate-fade-in-up">
          <h1 className="text-3xl mt-2 md:mt-16 ms:mt-0 md:text-5xl font-bold mb-4 drop-shadow-md">
            Biblioteca <span className="text-green-200">Jorge Luis Borges</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
            Un universo de palabras y pensamientos te espera. Explorá nuestras
            colecciones y descubrí nuevos mundos entre páginas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/about"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg"
            >
              Ver más
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/borges1.jpeg"
            alt="Jorge Luis Borges"
            className="w-md h-64 object-contein rounded-4xl  border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
