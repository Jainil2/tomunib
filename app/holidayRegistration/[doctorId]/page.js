// "use client"
// import React, { useState,useRef,useEffect } from "react";


// const holidayRegistration = () =>{
//     const [start_date, onChange_startDate] = useState("");
//     const [end_date, onChange_endDate] = useState("");
//     const [error, seterror] = useState("");


//     const handlesubmit = async (e) => {
//         e.preventDefault();
     
//           if (!start_date || !end_date) {
//             seterror("All fields are necessary");
//             console.log("All fields are necessary")
//             return;
//           }
//           const parsedStartDate = new Date(start_date);

//           // Get today's date without time component
//           const today = new Date();
//           today.setHours(0, 0, 0, 0); // Remove time portion
      
//           // Compare start date and today's date
//           if (parsedStartDate <= today) {
//             seterror("Start date cannot be in the past.");
//             console.log("Start date cannot be in the past.");
//             // return;
//           }
//           if(start_date > end_date)
//           {
//             seterror("The start date can not be after end date");
//             console.log("The start date can not be after end date")
//           }
      
        
//             console.log(start_date,end_date)
    
//       };

    
//     const starthandleDateChange = (event) => {
//         onChange_startDate(event.target.value);
        
//     };

//     const endhandleDateChange = (event) => {
//         onChange_endDate(event.target.value);
//     };
    

// // Customize the options as needed
//     return(
//         <>
        
//           <h1 className="text-2xl bg-white font-bold">Provide your holiday start date and end date</h1>
//           <div className="h-screen bg-white flex justify-center">
//           <form onSubmit={handlesubmit} className=" bg-white rounded-lg p-6 shadow-md w-full">
//             <div className="flex items-center mb-4">
//               <label htmlFor="start_date" className="mr-auto text-sm">Start Date</label>
//               <input type="date" id="end_time" value={start_date} onChange={starthandleDateChange} 
//               className="border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pd-50 py-2  px-4 w-3/4" />
//             </div>

//             <div className="flex items-center mb-4">
//               <label htmlFor="end_date" className="mr-auto text-sm">End Date</label>
//               <input type="date" id="end_date" value={end_date} onChange={endhandleDateChange} 
//               className="border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-3 w-3/4" />
//             </div>

//             <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-700">
//               Submit
//             </button>
//           </form>
//         </div>

       
//         </>
//     )
// }

// export default holidayRegistration;