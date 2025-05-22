export const UserDetail = ({ isOpen, onClose, socio }) => {
  if (!isOpen || !socio) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Detalle del Usuario</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Nombre y Apellido:</strong> {socio.nombre}
          </li>
          <li>
            <strong>Teléfono:</strong> {socio.telefono}
          </li>
          <li>
            <strong>Email:</strong> {socio.email}
          </li>
          <li>
            <strong>Perfil:</strong> {socio.perfil_nombre}
          </li>

          <li>
            <strong>Estado:</strong>{" "}
            <span
              className={`font-semibold ${
                socio.estado === true ? "text-green-600" : "text-red-600"
              }`}
            >
              {socio.estado === true ? "Habilitado" : "No habilitado"}
            </span>
          </li>
        </ul>

        <div className="flex justify-end pt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-sm px-4 py-2 rounded"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
