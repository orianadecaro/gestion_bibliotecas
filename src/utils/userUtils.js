export const searchUser = (user, filterText) => {
  if (!filterText) return user;
  const lowerText = filterText.toLowerCase();
  return user.filter((socio) =>
    socio.nombre?.toLowerCase().includes(lowerText)
  );
};
