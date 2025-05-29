import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import HeaderTable from "../../../components/table/headerTable";
import ActionsTable from "../../../components/table/actionTable";
import { SocioForm } from "./socioForm";
import { SocioDetail } from "./socioDetail";
import { deleteSocios, getAllSocios } from "../../../service/sociosService";
import { searchSocios } from "../../../utils/sociosUtils";
import { getAllPerfiles } from "../../../service/perfilesService";

const SocioList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [socios, setSocios] = useState([]);
  const [selectedSocios, setSelectedSocios] = useState(null);
  const [perfiles, setPerfiles] = useState([]);
  const [filterText, setFilterText] = useState("");
  const filteredSocios = searchSocios(socios, filterText);

  const fetchSocios = async () => {
    const data = await getAllSocios();
    if (data) setSocios(data);
  };

  const fetchPerfiles = async () => {
    const data = await getAllPerfiles();
    if (data) setPerfiles(data);
  };

  useEffect(() => {
    fetchSocios();
    fetchPerfiles();
  }, []);

  const getPerfilNombre = (id) => {
    const perfil = perfiles.find((p) => p.id === id);
    return perfil ? perfil.nombre : id;
  };

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
          className="rounded bg-gray-400 h-6 md:h-9 gap-2 cursor-pointer w-auto items-center justify-center flex  text-center px-2 "
          onClick={() => {
            setSelectedSocios(null), setIsModalOpen(true);
          }}
        >
          <FaPlus className="text-white text-base md:text-lg" />
          <span className="hidden md:flex text-white text-lg">agregar</span>
        </button>
      </HeaderTable>
      <div className="bg-white my-2 p-3 rounded h-[84vh] w-full">
        <div className="h-full overflow-y-auto overflow-x-auto">
          <table className="w-full  table-auto rounded border text-[9px] md:text-[12px] border-gray-100">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 md:p-2">Nombre</th>
                <th className="border p-1 md:p-2">Telefono</th>
                <th className="border p-1 md:p-2">Email</th>
                <th className="border p-1 md:p-2">Perfil</th>
                <th className="border p-1 md:p-2">Estado</th>
                <th className="border p-1 md:p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredSocios.map((socios, index) => (
                <tr key={index} className=" text-[8px] md:text-[12px]">
                  <td className="border p-1 md:p-2">{socios.nombre}</td>
                  <td className="border p-1 md:p-2">{socios.telefono}</td>
                  <td className="border p-1 md:p-2">{socios.email}</td>
                  <td className="border p-1 text-center md:p-2">
                    {getPerfilNombre(socios.perfil_id)}
                  </td>
                  <td className="border text-center p-1 md:p-2">
                    <span
                      className={`font-semibold text-white py-1 px-2 rounded-full ${
                        socios.estado === true ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      {socios.estado === true ? "Habilitado" : "No habilitado"}
                    </span>{" "}
                  </td>
                  <td className="border p-1 md:p-2">
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
      </div>
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
        socio={{
          ...selectedSocios,
          perfil_nombre: perfiles.find(
            (p) => p.id === selectedSocios?.perfil_id
          )?.nombre,
        }}
      />
    </div>
  );
};
export default SocioList;
