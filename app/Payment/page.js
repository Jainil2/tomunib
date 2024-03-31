"use client"
import React, { useState,useRef,useEffect } from "react";
import { useRouter } from "next/navigation";
import sha256 from 'crypto-js/sha256';
import { v4 as uuidv4} from 'uuid';
import axios from 'axios';
require('dotenv').config();

const phoneNumberUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

const Pay = () =>{
  const router = useRouter();
    const [Name, onChange_Name] = useState("");
    const [mobile_num, onChange_mobile_num] = useState("");
    const [amount, onChange_amount] = useState("");
    const [patient_id, onChange_patient_id] = useState("");
    const [error, seterror] = useState("");


    const handlesubmit = async (e) => {

        e.preventDefault();
        function isValidNumber(parsedNumber) {
            return phoneNumberUtil.isValidNumber(parsedNumber);
          }
     
          if (!Name || !mobile_num || !amount || !patient_id) {
            seterror("All fields are necessary");
            console.log("All fields are necessary")
            return;
          }
      
          if(patient_id.slice(0,3) != "PAT"){
            seterror("Enter proper patientID");
            console.log("Enter proper patientID")
            return;
          }

        //   const parsedNumber = phoneNumberUtil.parseAndKeepRawInput(mobile_num);

        //   if(!isValidNumber(parsedNumber))
        //   {
        //     seterror("Invalid mobile number format");
        //     console.log("Invalid mobile number format");
        //   }
          
        
          console.log(Name,mobile_num,amount,patient_id);

            let transactionalid = "TSC" + uuidv4().toString(36).slice(-6);
    
            e.preventDefault();
            const payload= {
              merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
              merchantTransactionId: transactionalid,
              merchantUserId: patient_id,
              amount: amount,
              mobileNumber: mobile_num,
              redirectUrl: `http://localhost:3000/api/status/${transactionalid}`,
              redirectMode: "POST",
              callbackUrl: `http://localhost:3000/api/status/${transactionalid}`,
              
              paymentInstrument: {
                type: "PAY_PAGE",
              },
              };
    
              
    
            const dataPayload = JSON.stringify(payload);
            console.log(dataPayload);
    
            const dataBase64 = Buffer.from(dataPayload).toString("base64");
            console.log(dataBase64);
    
            console.log(process.env.NEXT_PUBLIC_SALT_KEY);
              
            const fullURL =dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY; 
            const dataSha256 = sha256(fullURL);
            // const checksum = dataSha256 + "###" + 1;
            console.log(process.env.NEXT_PUBLIC_SALT_KEY);
            const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;
            console.log("c=", checksum);
    
            const UAT_PAY_API_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

            const response = await axios.post(
                UAT_PAY_API_URL,
                {
                    request: dataBase64,
                },
                {
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/json", 
                        "X-VERIFY": checksum,
                    },
                }
            );
            console.log(response);
            
            const redirect=response.data.data.instrumentResponse.redirectInfo.url;
            router.push(redirect)
      };

    
    const handleNameChange = (event) => {
        onChange_Name(event.target.value);
        
    };

    const handlemobilenumChange = (event) => {
        onChange_mobile_num(event.target.value);
    };

    const handlepatidChange = (event) => {
        onChange_patient_id(event.target.value);
    };

    const handleamountChange = (event) => {
        onChange_amount(event.target.value);
    };
    
    const MakePayment=(e)=>{
        let transactionalid = "TSC" + uuidv4.toString(36).slice(-6);

        e.preventDefault();
        const payload= {
            merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
            merchantTransactionId: transactionalid,
            merchantUserId: patient_id,
            amount: amount,
            redirectUrl: `http://localhost:3000/api/status/${transactionalid}`,
            redirectMode: "POST",
            callbackUrl: `http://localhost:3000/api/status/${transactionalid}`,
            mobileNumber: mobile_num,
            paymentInstrument: {
              type: PAY_PAGE
            }
          };

          

        const dataPayload = JSON.stringify(payload);
        console.log(dataPayload);

        const dataBase64 = Buffer.from(dataPayload).toString("base64");
        console.log(dataBase64);


        const fullURL =dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY; 
        const dataSha256 = sha256(fullURL);

        const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;
        console.log("c=", checksum);

        
      }
// Customize the options as needed
    return(
        <>
        
          <h1 className="text-2xl bg-white font-bold">Payment Page</h1>
          <div className="h-screen bg-white flex justify-center">
          <form onSubmit={handlesubmit} className=" bg-white rounded-lg p-6 shadow-md w-full">

            <div className="flex items-center mb-4">
              <label htmlFor="Name" className="mr-auto text-sm">Name</label>
              <input type="text" id="name" value={Name} onChange={handleNameChange} 
              className="border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pd-50 py-2  px-4 w-3/4" />
            </div>

            <div className="flex items-center mb-4">
              <label htmlFor="mobile_num" className="mr-auto text-sm">Moblie Number</label>
              <input type="Number" id="mobile_num" value={mobile_num} onChange={handlemobilenumChange} 
              className="border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-3 w-3/4" />
            </div>

            <div className="flex items-center mb-4">
              <label htmlFor="amount" className="mr-auto text-sm">Amount</label>
              <input type="Number" id="amount" value={amount} onChange={handleamountChange} 
              className="border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-3 w-3/4" />
            </div>

            <div className="flex items-center mb-4">
              <label htmlFor="mobile_num" className="mr-auto text-sm">Patient ID</label>
              <input type="text" id="PatientID" value={patient_id} onChange={handlepatidChange} 
              className="border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-3 w-3/4" />
            </div>

            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-700">
              Submit
            </button>
          </form>
        </div>

       
        </>
    )
}

export default Pay;