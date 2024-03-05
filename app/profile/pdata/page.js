"use client"
import React from 'react'
import WeightHistoryChart from "@/components/chart.js";

const page = () => {
    const weightHistoryData = [
        { date: "2022-01-01", weight: 67 },
        { date: "2022-02-01", weight: 68 },
        { date: "2022-02-01", weight: 64 },
        { date: "2022-02-01", weight: 65 },
      ];
      const heightdata = [
        { date: "2022-01-01", weight: 170 },
        { date: "2022-02-01", weight: 171 },
        { date: "2022-02-01", weight: 176 },
        { date: "2022-02-01", weight: 180 },
      ];
    
  return (
    <div
    className="w-full shadow-md mb-5 pb-5 rounded-lg table-auto"
    style={{ margin: "20px auto", maxWidth: "95%", borderRadius: "10px" }}
  >
    <div className="text-2xl mt-10 flex justify-center mb-20 font-medium tracking-wide underline underline-offset-8 decoration-gray-500">
      Data
    </div>
    <span className="flex justify-center">
      <div className="w-128 h-64 pl-10 mt-10 mr-10">
        <WeightHistoryChart weightData={weightHistoryData} />
      </div>
      <div className="w-128 h-64 pl-10 mt-10 ml-10">
        <WeightHistoryChart weightData={heightdata} />
      </div>
    </span>
  </div>
  )
}

export default page