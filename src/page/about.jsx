import React from "react";

const AboutUs = () => {
  return (
    <div
      className="w-full h-screen= bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="p-6 md:p-12 mt-5 max-w-6xl mx-auto text-gray-800">
        {/* Título principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Sobre Nosotros
        </h1>

        {/* Imagen 1 + Descripción principal */}
        <div className="flex flex-col md:flex-row gap-6 mb-10 items-center">
          <img
            src="/biblioteca1.JPG"
            alt="Biblioteca Jorge Luis Borges"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div className="md:w-1/2 text-xl">
            <p className="mb-4 ">
              La <strong>Biblioteca Jorge Luis Borges</strong> está ubicada en
              la Escuela Agropecuaria de Tres Arroyos, en la ciudad de Tres
              Arroyos, provincia de Buenos Aires. La EATA, creada en 1983,
              cuenta con 1500 estudiantes divididos en los 3 niveles (NI, NP,
              NS) y una cantidad de 300 empleados.
            </p>
            <p>
              Siempre se consideró a la biblioteca escolar como un factor
              indispensable para la educación y no un mero complemento. Busca
              capacitar para estudiar mejor, preparar para la universidad y
              fomentar la educación continua, incluyendo la recreativa.
            </p>
          </div>
        </div>

        {/* Imagen 2 + Filosofía */}
        <div className="flex flex-col md:flex-row-reverse gap-6 mb-10 items-center">
          <img
            src="/biblioteca2.JPG" // Reemplazá con la ruta real
            alt="Interior Biblioteca"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div className="md:w-1/2 text-xl">
            <p>
              La biblioteca surge bajo la filosofía de una{" "}
              <strong>“biblioteca abierta”</strong> con acceso a la información
              que pretende motivar, despertar la curiosidad y permitir al alumno
              la satisfacción de buscar y obtener la información por sí mismo.
              El alumno accede libremente a los materiales desde las
              estanterías, catálogos o desde la web.
            </p>
          </div>
        </div>

        {/* Proyectos institucionales */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Proyectos por Nivel</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 border-r text-lg border-gray-300 w-1/3">
                    Nivel Inicial
                  </th>
                  <th className="p-4 border-r text-lg border-gray-300 w-1/3">
                    Nivel Primario
                  </th>
                  <th className="p-4 w-1/3 text-lg">Nivel Secundario</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* Nivel Inicial */}
                  <td className="p-4 align-top border-r border-gray-300">
                    <h3 className="font-semibold mb-2">Taller de Literatura</h3>
                    <p className="mb-2 ">
                      Leer abre las posibilidades de conocer otros mundos,
                      estimula el pensamiento creativo, imaginativo y crítico de
                      los niños, permitiéndoles diferentes formas de expresión,
                      y poniéndolos en contacto con sus emociones y las de los
                      demás.
                    </p>
                    <img
                      src="/biblioteca5.png"
                      alt="Nivel Inicial"
                      className="w-full rounded-md shadow mt-2"
                    />
                  </td>

                  {/* Nivel Primario */}
                  <td className="p-4 align-top border-r border-gray-300">
                    <h3 className="font-semibold mb-2">Taller de biblioteca</h3>
                    <p className="mb-2">
                      En este taller se conocerán diferentes géneros literarios,
                      herramientas para la escritura, oralidad, comprensión
                      lectora, búsqueda de información y autonomía
                      investigativa. Los alumnos podrán retirar libros, usar la
                      biblioteca como herramienta de estudio e investigación y
                      asistir en el recreo largo a realizar actividades
                      supervisadas.
                    </p>
                    <img
                      src="/biblioteca4.jpg"
                      alt="Nivel Primario"
                      className="w-full rounded-md shadow mt-2"
                    />
                  </td>

                  {/* Nivel Secundario */}
                  <td className="p-4 align-top">
                    <h3 className="font-semibold mb-2">Taller de biblioteca</h3>
                    <ul className="list-disc list-inside space-y-1 mb-2">
                      <li>Reconocer una necesidad de información.</li>
                      <li>Iniciar una estrategia de búsqueda.</li>
                      <li>Localizar los recursos.</li>
                      <li>Valorar y comprender la información obtenida.</li>
                      <li>Interpretar la información.</li>
                      <li>Comunicar la información según la situación.</li>
                      <li>Evaluar el producto y el proceso.</li>
                      <li>Acompañamiento en monografías y trabajos finales.</li>
                    </ul>
                    <img
                      src="/secundaria.jpeg"
                      alt="Nivel Secundario"
                      className="w-full rounded-md shadow mt-2"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
