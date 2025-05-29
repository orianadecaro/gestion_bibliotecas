export const UserDetail = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Detalle del Usuario</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Nombre y Apellido:</strong> {user.nombre}
          </li>
          <li>
            <strong>Teléfono:</strong> {user.telefono}
          </li>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
          <li>
            <strong>Perfil:</strong> {user.perfil_nombre.toUpperCase()}
          </li>

          <li>
            <strong>Estado:</strong>{" "}
            <span
              className={`font-semibold py-1 px-2 text-white rounded-full ${
                user.estado === true ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {user.estado === true ? "Habilitado" : "No habilitado"}
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
