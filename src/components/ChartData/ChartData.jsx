import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const ChartData = ({ data }) => {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  const options = {};
  return (
    <div className="chart-data w-100 pt-5 ">
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default ChartData;
