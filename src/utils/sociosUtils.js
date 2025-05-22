export const searchSocios = (socios, filterText) => {
  if (!filterText) return socios;
  const lowerText = filterText.toLowerCase();
  return socios.filter(
    (socio) =>
      socio.titulo?.toLowerCase().includes(lowerText) ||
      socio.autor?.toLowerCase().includes(lowerText) ||
      socio.materia?.toLowerCase().includes(lowerText) ||
      socio.codigo?.toString().includes(lowerText)
  );
};
