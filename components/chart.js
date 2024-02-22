// WeightHistoryChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const WeightHistoryChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && data) {
      const ctx = chartRef.current.getContext("2d");

      new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((entry) => entry.date),
          datasets: [
            {
              label: "Weight History",
              data: data.map((entry) => entry.weight),
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "linear",
              position: "bottom",
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default WeightHistoryChart;
