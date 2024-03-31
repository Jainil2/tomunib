"use client";
import { useState } from "react";
import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import pro from "@/public/images/62.jpg";
import Image from "next/image";

const initialFormState = {
  name: "",
  id: "",
  date: "",
  medications: [
    {
      drugName: "",
      dosage: "",
      noOfDays: "",
      note: "",
    },
  ],
  report: [
    {
      name: "",
    },
  ],
  followUpDate: "",
};

const Prescription = () => {
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormState);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name.startsWith("medications")) {
      const { medications } = formData;
      const updatedMedications = [...medications];
      updatedMedications[index] = {
        ...updatedMedications[index],
        [name.split(".")[1]]: value,
      };
      setFormData({ ...formData, medications: updatedMedications });
    } else if (name.startsWith("report")) {
      const updatedReport = [...formData.report];
      updatedReport[0] = { ...updatedReport[0], name: value };
      setFormData({ ...formData, report: updatedReport });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addMedication = () => {
    setFormData({
      ...formData,
      medications: [
        ...formData.medications,
        {
          drugName: "",
          dosage: "",
          noOfDays: "",
          note: "",
        },
      ],
    });
  };

  return (
    <div className="flex justify-center p-5 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col shadow-md w-8/12 p-10"
      >
        <div className="header flex justify-between items-center p-5 border-b-2">
          <div>
            <h1 className="text-2xl font-bold">Dr. John Doe</h1>
            <p className="text-sm">123 Main St, Anytown, USA</p>
            <p className="text-sm">(123) 456-7890</p>
          </div>
          <div>
            <Image
              src={pro}
              alt="Doctor's Logo"
              className="h-16 w-16 rounded-full"
            />
          </div>
        </div>
        <label className="mb-4 grid grid-cols-2 mt-5">
          <div className="grid col-span-1 ml-20">Name:</div>
          <div className="grid col-span-1">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-1 border-solid rounded-md p-1"
            />
          </div>
        </label>

        <label className="mb-4 grid grid-cols-2">
          <div className="grid col-span-1 ml-20">ID:</div>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="grid col-span-1 border-1 border-solid rounded-md p-1"
          />
        </label>

        <label className="mb-4 grid grid-cols-2">
          <div className="grid col-span-1 ml-20">Date:</div>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border-1 border-solid rounded-md p-1"
          />
        </label>

        {formData.medications.map((medication, index) => (
          <div key={index} className="mb-4 grid grid-cols-2">
            <div className="col-span-1 ml-20">Drug Name:</div>
            <input
              type="text"
              name={`medications[${index}].drugName`}
              value={medication.drugName}
              onChange={(e) => handleChange(e, index)}
              className="p-1 mb-1 border-1 border-solid rounded-md"
            />

            {/* <div className="col-span-1 ml-20">Dosage:</div>
            <input
              type="text"
              name={`medications[${index}].dosage`}
              value={medication.dosage}
              onChange={(e) => handleChange(e, index)}
              className="p-1 border-1 border-solid rounded-md"
            /> */}
            <div className="col-span-1 ml-20">Dosage:</div>
            <select
              name={`medications[${index}].dosage`}
              value={medication.dosage}
              onChange={(e) => handleChange(e, index)}
              className="p-1 mb-1 border-1 border-solid rounded-md"
            >
              <option value="1-1-1">1-1-1</option>
              <option value="1-0-1">1-0-1</option>
              <option value="1-1-0">1-1-0</option>
              <option value="0-1-1">0-1-1</option>
              <option value="0-0-1">0-0-1</option>
              <option value="0-1-0">0-1-0</option>
              <option value="1-0-0">1-0-0</option>
            </select>

            <div className="col-span-1 ml-20">No of Days:</div>
            <input
              type="text"
              name={`medications[${index}].noOfDays`}
              value={medication.noOfDays}
              onChange={(e) => handleChange(e, index)}
              className="p-1 mb-1 border-1 border-solid rounded-md"
            />

            <div className="col-span-1 ml-20">Note:</div>
            <textarea
              name={`medications[${index}].note`}
              value={medication.note}
              onChange={(e) => handleChange(e, index)}
              className="p-1 border-1 border-solid rounded-md"
            ></textarea>
          </div>
        ))}

        <div className="flex justify-center items-center ml-20 mb-5">
          <Button color="primary" onClick={addMedication} className="">
            Add
          </Button>
        </div>

        <label className="mb-4 grid grid-cols-2">
          <div className="col-span-1 ml-20">Report Name:</div>
          <input
            type="text"
            name="report"
            value={formData.report[0].name}
            onChange={(e) => handleChange(e)}
            className="p-1 border-1 border-solid rounded-md"
          />
        </label>

        <label className="mb-4 grid grid-cols-2">
          <div className="col-span-1 ml-20">Follow Up Date:</div>
          <input
            type="date"
            name="followUpDate"
            value={formData.followUpDate}
            onChange={handleChange}
            className="p-1 border-1 border-solid rounded-md"
          />
        </label>

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded w-64"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

    //name
    //id
    //date
    //name
    //symtoms
    //dignosis
    //medication
    //drug name
    //doesage
    //number of doesage
    //note
    //report
    //name(option)
    //follow up date(o)
  );
};

export default Prescription;
