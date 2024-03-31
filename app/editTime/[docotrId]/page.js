"use client"
import React, { useState,useRef,useEffect } from "react";
import axios from 'axios'; 


const editTime = () =>{
    const [start_date, onChange_startDate] = useState("");
    const [end_date, onChange_endDate] = useState("");
    const [startTime, setstartTime] = useState("");
    const [endTime, setendTime] = useState("");
    const [num_pat, set_num_pat] = useState("");
    const [error, seterror] = useState("");


    const handlesubmit = async (e) => {
        e.preventDefault();
     
          if (!start_date || !end_date || !startTime || !endTime || !num_pat) {
            seterror("All fields are necessary");
            console.log("All fields are necessary")
            return;
          }
          const parsedStartDate = new Date(start_date);

          // Get today's date without time component
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Remove time portion
      
          // Compare start date and today's date
          if (parsedStartDate <= today) {
            seterror("Start date cannot be in the past.");
            console.log("Start date cannot be in the past.");
            // return;
          }
          if(start_date > end_date)
          {
            seterror("The start date can not be after end date");
            console.log("The start date can not be after end date")
          }

          if(startTime == endTime)
          {
            seterror("The start time and time can not be equal");
            console.log("The start time and time can not be equal")
          }

          if(startTime > endTime)
          {
            seterror("The start time can not be after end time");
            console.log("The start time can not be after end time")
          }

          const calculateTimeDifference = (startTime, endTime) => {
            const start = new Date(`1970-01-01T${startTime}`);
            const end = new Date(`1970-01-01T${endTime}`);
            const difference = end.getTime() - start.getTime();
            return Math.floor(Math.abs(difference / (1000 * 60 * 60))); // Convert milliseconds to hours (rounded down)
          };
          const timeDifference = calculateTimeDifference(startTime, endTime);

          // Validate and set numPat based on time difference
          if (timeDifference < 1) {
            seterror("Minimum duration of appointment is 1 hour.");
            console.log("Minimum duration of appointment is 1 hour.");
            // return;
          } else if (timeDifference === 1) {
            if (num_pat < 3) {
              seterror("Minimum number of patients for 1-hour appointment is 3.");
              console.log("Minimum number of patients for 1-hour appointment is 3.");
            //   return;
            }
          } else if (timeDifference === 2) {
            if (num_pat < 6) {
              seterror("Minimum number of patients for 2-hour appointment is 6.");
              console.log("Minimum number of patients for 2-hour appointment is 6.");
            //   return;
            }
          } else if (timeDifference > 2) {
            if (num_pat < 9) {
              seterror("Minimum number of patients for 3+ hour appointment is 9.");
              console.log("Minimum number of patients for 3+ hour appointment is 9.");
            //   return;
            }
          }
          console.log(start_date,end_date,startTime,endTime,num_pat)
          // Rest of your form submission logic after successful validation...
        
          const response = await axios.post(`http://localhost:8000/editTimeSlot/${"65a7d5d1b9f0f04d88bdda1a"}`, {
            start_date,
            end_date,
            start_time: startTime, // Ensure consistent naming (startTime instead of edited_start_time)
            end_time: endTime,   // Ensure consistent naming (endTime instead of edited_end_time)
            number_patient: num_pat,
        });
        
            
    
      };
    
    const changepat = (event)=>{
        set_num_pat(event.target.value)
    }

    const handleendTimeChange = (event) => {
      const selectedTime = event.target.value; // Get the selected time in 24-hour format

      // Convert the time to a Date object for easier manipulation
      const timeObject = new Date(`1970-01-01T${selectedTime}:00`);

      // Extract hours, minutes, and determine AM/PM
      const hours = timeObject.getHours();
      const minutes = timeObject.getMinutes().toString().padStart(2, '0'); // Pad minutes with leading zero if needed
      const amPm = hours >= 12 ? 'PM' : 'AM';

      // Format the time in 12-hour format with leading zero for hours if needed
      const formattedTime = `${hours % 12 || 12}:${minutes} ${amPm}`;

      // You can now use the formattedTime variable for further processing or display
      console.log(formattedTime);
        setendTime(formattedTime);
    };

    const handlestartTimeChange = (event) => {
      const selectedTime = event.target.value; // Get the selected time in 24-hour format

      // Convert the time to a Date object for easier manipulation
      const timeObject = new Date(`1970-01-01T${selectedTime}:00`);

      // Extract hours, minutes, and determine AM/PM
      const hours = timeObject.getHours();
      const minutes = timeObject.getMinutes().toString().padStart(2, '0'); // Pad minutes with leading zero if needed
      const amPm = hours >= 12 ? 'PM' : 'AM';

      // Format the time in 12-hour format with leading zero for hours if needed
      const formattedTime = `${hours % 12 || 12}:${minutes} ${amPm}`;

      // You can now use the formattedTime variable for further processing or display
      console.log(formattedTime);
        setstartTime(formattedTime);
    };
    
    const starthandleDateChange = (event) => {
        onChange_startDate(event.target.value);
        
    };

    const endhandleDateChange = (event) => {
        onChange_endDate(event.target.value);
    };
    

// Customize the options as needed
    return(
        <>
        
          <h1 class="text-2xl bg-white font-bold">Edit your OPD time</h1>
          <div class="h-screen bg-white flex justify-center">
          <form onSubmit={handlesubmit} class=" bg-white rounded-lg p-6 shadow-md w-full">
            <div class="flex items-center mb-4">
              <label for="start_date" class="mr-auto text-sm">Start Date</label>
              <input type="date" id="end_time" value={start_date} onChange={starthandleDateChange} 
              class="border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pd-50 py-2  px-4 w-3/4" />
            </div>

            <div class="flex items-center mb-4">
              <label for="end_date" class="mr-auto text-sm">End Date</label>
              <input type="date" id="end_date" value={end_date} onChange={endhandleDateChange} 
              class="border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-3 w-3/4" />
            </div>

            <div class="flex items-center mb-4">
              <label for="start_time" class="mr-auto text-sm">Start Time</label>
              <input type="time" id="selected_time" onChange={handlestartTimeChange}
               class="border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-3 w-3/4" />
            </div>

            <div class="flex items-center mb-4">
              <label for="end_time" class="mr-auto text-sm">End Time</label>
              <input type="time" id="end_time" onChange={handleendTimeChange}
               class="border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-3 w-3/4" />
            </div>

            <div class="flex items-center mb-4">
              <label for="num_pat" class="mr-20 text-sm">Number of patients</label>
              <input type="number" onChange={changepat}
               class="border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-6 w-3/4" />
            </div>

            <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-700">
              Submit
            </button>
          </form>
        </div>

       
        </>
    )
}

export default editTime;