import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import HeaderTable from "../../../components/table/headerTable";
import ActionsTable from "../../../components/table/actionTable";
import { SocioForm } from "./socioForm";
import { SocioDetail } from "./socioDetail";
import { deleteSocios, getAllSocios } from "../../../service/sociosService";
import { searchSocios } from "../../../utils/sociosUtils";

const SocioList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [socios, setSocios] = useState([]);
  const [selectedSocios, setSelectedSocios] = useState(null);
  const [filterText, setFilterText] = useState("");
  const filteredSocios = searchSocios(socios, filterText);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  const fetchSocios = async () => {
    const data = await getAllSocios();
    console.log(data);
    if (data) setSocios(data);
  };

  useEffect(() => {
    fetchSocios();
  }, []);

  const handleDeleteSocios = async (id) => {
    if (confirm("¿Estás seguro de que deseas eliminar este socios?")) {
      try {
        await deleteSocios(id);
        await fetchSocios();
      } catch (error) {
        console.error("No se pudo eliminar el socios:", error);
      }
    }
  };

  return (
    <div className="h-full w-full px-3 py-2">
      <HeaderTable
        title="Listado de socios"
        setFilterTextValue={(value) => setFilterText(value)}
        onClick={() => ""}
      >
        <button
          className="rounded bg-gray-400 h-9 gap-2 cursor-pointer w-auto items-center justify-center flex  text-center px-2 "
          onClick={() => {
            setSelectedSocios(null), setIsModalOpen(true);
          }}
        >
          <FaPlus className="text-white text-lg " />
          agregar
        </button>
      </HeaderTable>
      <div className="bg-white my-2 p-3 rounded h-[84vh] w-full">
        <table className="w-full  table-auto rounded border text-[12px] border-gray-100">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Telefono</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Perfil</th>
              <th className="border p-2">Estado</th>
              <th className="border p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredSocios.map((socios, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{socios.nombre}</td>
                <td className="border p-2">{socios.telefono}</td>
                <td className="border p-2">{socios.email}</td>
                <td className="border p-2">{socios.perfil_id}</td>
                <td className="border p-2">
                  <span
                    className={`font-semibold ${
                      socios.estado === "Disponible"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {socios.estado}
                  </span>{" "}
                </td>
                <td className="border p-2">
                  <ActionsTable
                    handleDelete={() => handleDeleteSocios(socios.id)}
                    handleEdit={() => {
                      setSelectedSocios(socios);
                      setIsModalOpen(true);
                    }}
                    handleView={() => {
                      setSelectedSocios(socios);
                      setIsDetailOpen(true);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
      </div>{" "}
      <SocioForm
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedSocios(null);
        }}
        selectItem={selectedSocios}
        onUpdate={fetchSocios}
      />
      <SocioDetail
        isOpen={isDetailOpen}
        onClose={() => {
          setIsDetailOpen(false);
          setSelectedSocios(null);
        }}
        socios={selectedSocios}
      />
    </div>
  );
};
export default SocioList;
