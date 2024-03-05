// WeightHistoryChart.js

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const WeightHistoryChart = ({ weightData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    console.log("Chart component rendering");
    console.log("Weight Data:", weightData);

    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart instance
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    chartRef.current.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: weightData.map((entry) => entry.date),
        datasets: [
          {
            label: "Weight",
            data: weightData.map((entry) => entry.weight),
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 8,
          },
        ],
      },
      options: {
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              type: "linear",
            },
          },
        },
      },
    });
  }, [weightData]);

  return <canvas ref={chartRef} width={400} height={200} />;
};

export default WeightHistoryChart;
