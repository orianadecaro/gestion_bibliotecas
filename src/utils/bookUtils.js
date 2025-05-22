import * as XLSX from "xlsx";

export const exportLibrosToExcel = (libros) => {
  if (!libros || libros.length === 0) return;

  const worksheet = XLSX.utils.json_to_sheet(libros);

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Libros");

  XLSX.writeFile(workbook, "libros.xlsx");
};

export const importLibrosFromCSV = async (event) => {
  return new Promise((resolve, reject) => {
    const file = event.target.files[0];
    if (!file) return reject("No se seleccionó ningún archivo");

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const [headerLine, ...lines] = text.split("\n");
      const headers = headerLine.trim().split(",");

      const libros = lines
        .filter((line) => line.trim() !== "") // <--- filtrar líneas vacías aquí
        .map((line) => {
          const values = line.trim().split(",");
          return headers.reduce((acc, key, i) => {
            acc[key] = values[i]?.replace(/^"|"$/g, "");
            return acc;
          }, {});
        });

      resolve(libros);
    };
    reader.onerror = () => reject("Error al leer el archivo");
    reader.readAsText(file);
  });
};

export const searchLibros = (libros, filterText) => {
  if (!filterText) return libros;
  const lowerText = filterText.toLowerCase();
  return libros.filter(
    (libro) =>
      libro.titulo?.toLowerCase().includes(lowerText) ||
      libro.autor?.toLowerCase().includes(lowerText) ||
      libro.materia?.toLowerCase().includes(lowerText) ||
      libro.codigo?.toString().includes(lowerText)
  );
};
