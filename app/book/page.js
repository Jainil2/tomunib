"use client";
import Footer from "@/components/Footer";
import React, { useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";

const BookAppointment = () => {
  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];
  const today = new Date().toISOString().split("T")[0];
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(timeSlots[0]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="bg-blue-300">
      <div class="relative bg-gradient-to-bl from-blue-100 via-transparent bg-white dark:via-transparent">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <img src="https://img.freepik.com/free-vector/cardiologist-online-service-platform-idea-heart-care-medical-diagnostic-doctors-treat-heart-disease-online-appointment-flat-vector-illustration_613284-3189.jpg?w=740&t=st=1709826423~exp=1709827023~hmac=c44199067e3df963a3bd4decd84441701524ebd51fd4f2b6cb726f0e7632f173"></img>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="lg:max-w-lg lg:mx-auto  ">
                  <div className=" sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg bg-white">
                    <div className="text-center">
                      <h1 className="block text-2xl font-bold text-gray-800 text-black">
                        Consult Your Doctor
                      </h1>
                    </div>

                    <div className="mt-12">
                      <div className="grid grid-cols-1 gap-5">
                        <div>
                          <div className="relative">
                            <input
                              type="text"
                              id="name"
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder=""
                            />
                            <label
                              for="name"
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-green-500"
                            >
                              First name
                            </label>
                          </div>
                        </div>

                        <div>
                          <div className="relative">
                            <input
                              type="int"
                              id="age"
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder="your age"
                            />
                            <label
                              for="age"
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Age
                            </label>
                          </div>
                        </div>

                        <div>
                          <div className="relative">
                            <input
                              type="text"
                              id="category"
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder=" "
                            />
                            <label
                              for="category"
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Category
                            </label>
                          </div>
                        </div>

                        <div>
                          <div className="relative">
                            <input
                              type="int"
                              id="hs-hero-signup-form-floating-input-company-name"
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder="your number"
                            />
                            <label
                              for="contact number"
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Contact Number
                            </label>
                          </div>
                        </div>

                        <div>
                          <div className="relative">
                            <input
                              type="date"
                              id="datePicker"
                              value={selectedDate}
                              min={today}
                              onChange={handleDateChange}
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder="enter date"
                            />
                            <label
                              for="date"
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-red peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Date
                            </label>
                            <style>
                              {`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1); /* Invert the color to white */
        }
      `}
                            </style>
                          </div>
                        </div>

                        <div>
                          <h2>Select a Time Slot:</h2>
                          <div className="flex flex-wrap gap-2">
                            {timeSlots.map((timeSlot, index) => (
                              <button
                                key={index}
                                onClick={() => handleTimeSlotSelect(timeSlot)}
                                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                                  selectedTimeSlot === timeSlot
                                    ? "bg-blue-700"
                                    : ""
                                }`}
                              >
                                {timeSlot}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          {selectedTimeSlot && (
                            <p>You have selected: {selectedTimeSlot}</p>
                          )}
                        </div>

                        {selectedDate && (
                          <p>
                            Selected date:{" "}
                            {new Date(selectedDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>

                      <div class="mt-5">
                        <button
                          type="submit"
                          onClick={() => {
                            alert("book appoitnment");
                          }}
                          class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="mt-6 md:mt-12 py-3 flex items-center text-sm text-gray-800 gap-x-1.5 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-black-800 dark:after:border-gray-700">
            <span class="font-semibold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:bg-blue-400 dark:to-violet-400">
              15,000
            </span>
            individuals have trusted HealthLink
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookAppointment;
