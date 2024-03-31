'use client'
import Link from "next/link";
import React, { useState } from "react";

const DoctorData = () => {
  const data = [
    {
      index: 1,
      patientName: "John Doe",
      appointmentNumber: "A12345",
      date: "2024-04-01",
    },
    {
      index: 2,
      patientName: "Jane Smith",
      appointmentNumber: "A23456",
      date: "2024-04-02",
    },
    {
      index: 3,
      patientName: "Michael Johnson",
      appointmentNumber: "A34567",
      date: "2024-04-03",
    },
    {
      index: 4,
      patientName: "Emily Williams",
      appointmentNumber: "A45678",
      date: "2024-04-04",
    },
    {
      index: 5,
      patientName: "David Brown",
      appointmentNumber: "A56789",
      date: "2024-04-05",
    },
  ];

  const [sortedData, setSortedData] = useState(data);

  const handleSortClick = (sortField) => {
    const sorted = [...sortedData].sort((a, b) => {
      if (sortField === "patientName") {
        return a.patientName.localeCompare(b.patientName);
      } else if (sortField === "date" || sortField === "appointmentNumber") {
        return new Date(a[sortField]) - new Date(b[sortField]);
      } else {
        return a[sortField] - b[sortField];
      }
    });
    setSortedData(sorted);
  };

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1"></div>
      <div className="col-span-3">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                onClick={() => handleSortClick("index")}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              >
                No.
              </th>
              <th
                onClick={() => handleSortClick("patientName")}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              >
                Patient Name
              </th>
              <th
                onClick={() => handleSortClick("date")}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              >
                Date
              </th>
              <th
                onClick={() => handleSortClick("appointmentNumber")}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              >
                Appointment Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Click
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((appointment, index) => (
              <tr key={appointment.index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {appointment.patientName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {appointment.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {appointment.appointmentNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link href="#">Click</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorData;
