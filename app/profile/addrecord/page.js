"use client";
import React, { useState } from "react";

const ReportForm = () => {
  const [patientId, setPatientId] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [reportType, setReportType] = useState("");
  const [appointmentId, setAppointmentId] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("patientId", patientId);
      formData.append("doctorName", doctorName);
      formData.append("reportType", reportType);
      formData.append("appointmentId", appointmentId);
      formData.append("file", file);

      const response = await fetch("/uploadReport", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data); // Log the response from the server

      // Handle success (e.g., show a success message to the user)
      alert("Your record has been updated");
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show an error message to the user)
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="m-5">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label
            htmlFor="patientId"
            className="block text-sm font-medium text-gray-700"
          >
            Patient ID:
          </label>
          <input
            type="text"
            id="patientId"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="doctorName"
            className="block text-sm font-medium text-gray-700"
          >
            Doctor Name:
          </label>
          <input
            type="text"
            id="doctorName"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="reportType"
            className="block text-sm font-medium text-gray-700"
          >
            Report Type:
          </label>
          <input
            type="text"
            id="reportType"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="appointmentId"
            className="block text-sm font-medium text-gray-700"
          >
            Appointment ID:
          </label>
          <input
            type="text"
            id="appointmentId"
            value={appointmentId}
            onChange={(e) => setAppointmentId(e.target.value)}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700"
          >
            Upload File:
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
