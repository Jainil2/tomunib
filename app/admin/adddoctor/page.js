"use client";
import React, { useState } from "react";
import axios from "axios";

const DoctorRegistration = () => {
  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 8; hour <= 20; hour++) {
      for (let minute = 0; minute < 60; minute += 60) {
        const label = `${hour % 12 || 12}:${minute === 0 ? "00" : minute} ${
          hour < 12 ? "AM" : "PM"
        }`;
        timeSlots.push(label);
      }
    }
    return timeSlots;
  };

  const timeOptions = generateTimeSlots();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    hospital_name: "",
    street_address: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
    department: "",
    experience: "",
    degree: "",
    fees: "",
    speciality: "",
    start_time: [], // Initialize as an empty array
    end_time: [], //
    number_patient: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // const handleChange = (name, e) => {
  //   const newValue = e.target.value;
  //   if (name === "start_time") {
  //     // If changing the start time, update end time to ensure it's later than start time
  //     const endTimeIndex = timeOptions.findIndex(
  //       (option) => option.value > newValue
  //     );
  //     if (endTimeIndex !== -1) {
  //       setFormData((prevFormData) => ({
  //         ...prevFormData,
  //         start_time: newValue,
  //         end_time: timeOptions.slice(endTimeIndex),
  //       }));
  //     } else {
  //       // If no valid end time found, set end time to the last time slot of the day
  //       setFormData((prevFormData) => ({
  //         ...prevFormData,
  //         start_time: newValue,
  //         end_time: timeOptions[timeOptions.length - 1].value,
  //       }));
  //     }
  //   } else if (name === "end_time") {
  //     // If changing the end time, simply update the end time
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       end_time: newValue,
  //     }));
  //   }
  // };

  const handleSubmit = async (e) => {
    console.log("hi");
    console.log(formData);
    e.preventDefault();
    try {
      const response = await axios.post("/doctorRegistration", formData);
      setMessage(response.data.msg);
      // Clear form data after successful submission
      setFormData({
        name: "",
        email: "",
        mobile_no: "",
        hospital_name: "",
        street_address: "",
        city: "",
        state: "",
        pincode: "",
        password: "",
        department: "",
        experience: "",
        degree: "",
        fees: "",
        speciality: "",
        start_time: [], // Initialize as an empty array
        end_time: [], //
        number_patient: "",
      });
    } catch (error) {
      setMessage("Error occurred while registering doctor");
      console.error("Error:", error);
    }
  };

  return (
    <div className="mb-10">
      <div className="mt-10 max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 pl-20">Doctor Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number:
              </label>
              <input
                type="tel"
                name="mobile_no"
                value={formData.mobile_no}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Hospital Name:
              </label>
              <input
                type="text"
                name="hospital_name"
                value={formData.hospital_name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Street Address:
              </label>
              <input
                type="text"
                name="street_address"
                value={formData.street_address}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City:
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State:
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pincode:
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department:
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Experience:
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Degree:
              </label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fees:
              </label>
              <input
                type="text"
                name="fees"
                value={formData.fees}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Speciality:
              </label>
              <input
                type="text"
                name="speciality"
                value={formData.speciality}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label>Start Time:</label>
              <select
                name="start_time"
                value={formData.start_time}
                onChange={handleChange} // Pass the value directly
                required
                className="border border-gray-300 rounded-md p-2"
              >
                <option value="">Select Start Time</option>
                {timeOptions.map((startTime, index) => (
                  <option key={index} value={startTime}>
                    {startTime}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>End Time:</label>
              <select
                name="end_time"
                value={formData.end_time}
                onChange={handleChange} // Pass the value directly
                required
                className="border border-gray-300 rounded-md p-2"
              >
                <option value="">Select End Time</option>
                {timeOptions.map((endTime, index) => (
                  <option key={index} value={endTime}>
                    {endTime}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Patients:
              </label>
              <input
                type="text"
                name="number_patient"
                value={formData.number_patient}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Register
          </button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default DoctorRegistration;
