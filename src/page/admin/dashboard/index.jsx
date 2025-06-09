import React, { useEffect, useState } from "react";
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
          // Normalizar el estado para evitar problemas con tildes
          const estadoNormalizado = p.estado
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

          if (estadoNormalizado === "en prestamo") countsTemp["En préstamo"]++;
          else if (estadoNormalizado === "devuelto") countsTemp["Devuelto"]++;
          else if (estadoNormalizado === "reservado") countsTemp["Reservado"]++;
        });

        setCounts(countsTemp);

        const ctx = document.getElementById("myPieChart");

        // Destruir el gráfico anterior para evitar duplicados
        if (ctx.chartInstance) {
          ctx.chartInstance.destroy();
        }

        const pieChart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: [
              `En préstamo (${countsTemp["En préstamo"]})`,
              `Devuelto (${countsTemp["Devuelto"]})`,
              `Reservado (${countsTemp["Reservado"]})`,
            ],
            datasets: [
              {
                label: "Libros por estado",
                data: [
                  countsTemp["En préstamo"],
                  countsTemp["Devuelto"],
                  countsTemp["Reservado"],
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

        // Guardamos la instancia del chart para destruirlo después
        ctx.chartInstance = pieChart;
      } catch (error) {
        console.error("Error cargando prestamos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full w-full px-3 py-2">
      <HeaderTable title="Dashboard" />
      <div className="bg-white flex items-center justify-center my-2 p-3 rounded h-[84vh] w-full">
        <canvas id="myPieChart" width="400" height="400"></canvas>
      </div>
    </div>
  );
};

export default Dashboard;
