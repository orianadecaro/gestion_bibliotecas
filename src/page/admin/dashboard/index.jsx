import React, { useEffect, useRef, useState } from "react";
import HeaderTable from "../../../components/table/headerTable";
import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";
import { getAllPrestamos } from "../../../service/prestamosService";

Chart.register(PieController, ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [counts, setCounts] = useState({
    "En préstamo": 0,
    Devuelto: 0,
    Reservado: 0,
  });

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // para mantener la instancia del gráfico

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prestamos = await getAllPrestamos();

        const countsTemp = {
          "En préstamo": 0,
          Devuelto: 0,
          Reservado: 0,
        };

        prestamos.forEach((p) => {
          const estadoNormalizado = p.estado
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

          if (estadoNormalizado === "en prestamo") countsTemp["En préstamo"]++;
          else if (estadoNormalizado === "devuelto") countsTemp["Devuelto"]++;
          else if (estadoNormalizado === "reservado") countsTemp["Reservado"]++;
        });

        setCounts(countsTemp);
      } catch (error) {
        console.error("Error cargando prestamos:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (
      counts["En préstamo"] === 0 &&
      counts["Devuelto"] === 0 &&
      counts["Reservado"] === 0
    ) return;

    const ctx = chartRef.current;

    if (!ctx) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          `En préstamo (${counts["En préstamo"]})`,
          `Devuelto (${counts["Devuelto"]})`,
          `Reservado (${counts["Reservado"]})`,
        ],
        datasets: [
          {
            label: "Libros por estado",
            data: [
              counts["En préstamo"],
              counts["Devuelto"],
              counts["Reservado"],
            ],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
  }, [counts]);

  return (
    <div className="h-full w-full px-3 py-2">
      <HeaderTable title="Dashboard" />
      <div className="bg-white flex items-center justify-center my-2 p-3 rounded h-[84vh] w-full">
        {counts["En préstamo"] === 0 &&
        counts["Devuelto"] === 0 &&
        counts["Reservado"] === 0 ? (
          <div className="text-center text-gray-500 py-4">
            No hay datos disponibles para mostrar.
          </div>
        ) : (
          <canvas ref={chartRef} width="400" height="400"></canvas>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
