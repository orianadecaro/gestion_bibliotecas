import React, { useEffect } from "react";
import HeaderTable from "../../../components/table/headerTable";
import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(PieController, ArcElement, Tooltip, Legend);

const Dashboard = () => {
  useEffect(() => {
    const ctx = document.getElementById("myPieChart");

    const pieChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Libros", "Videos", "Archivos"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
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

    return () => pieChart.destroy();
  }, []);
  return (
    <div className="h-full w-full px-3 py-2">
      <HeaderTable title="Dashboard" />
      <div className="bg-white flex items-center justify-center my-2 p-3 rounded h-[84vh] w-full">
        {" "}
        <canvas id="myPieChart" width="400" height="400"></canvas>
      </div>
    </div>
  );
};
export default Dashboard;
