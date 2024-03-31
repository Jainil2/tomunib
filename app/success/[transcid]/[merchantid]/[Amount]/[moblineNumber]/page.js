"use client"
import { useRouter, usePathname,  useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import axios from 'axios';  
// import { Router } from 'next/router';
const SuccessPage = () => {
  const router = useRouter();
  const pathname = usePathname();



  const handleSplitUrl = (url) => {
    // Split using forward slashes, handling potential empty segments
    // const urlParts = url.split('/');
    return  url.split('/');; // Remove empty segments
  };

  // const pathname = router.pathname;
  const urlParts = handleSplitUrl(pathname);

  const transactionId = urlParts[2];
  const merchantId = urlParts[3];
  const amount = urlParts[4];
  // const mobnumber = urlParts[4];
  const mobnumber = 8754213265;

  console.log(transactionId,merchantId,amount)

  const handleDataToBackend = async () => {
    // Prepare data for backend (consider validation and error handling)
    // const data = {
    //   transactionId,
    //   merchantId,
    //   amount,
    //   mobnumber,
    // };

    try {
      const response = await axios.post(`http://localhost:8000/addTransection/${"65dd87349372c974b9f815a9"}`, {
        trnsc_id : transactionId,
         merchantId,
            amount: amount,
            name: "Munib" // Ensure consistent naming (startTime instead of edited_start_time)
            //end_time: mobnumber,   // Ensure consistent naming (endTime instead of edited_end_time)
            
        });
      // const response = await fetch('/your-backend-endpoint', {
      //   method: 'POST', // Adjust method based on your backend API
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // if (!response.ok) {
      //   throw new Error(`Backend request failed: ${response.statusText}`);
      // }

      // // Handle successful response (e.g., display success message)
      // console.log('Data sent to backend successfully!');
    } catch (error) {
      console.error('Error sending data to backend:', error);
      // Handle errors appropriately (e.g., display error message)
    }
  }

  // Immediately send data upon component mount (consider user experience)
  useEffect(() => {
    handleDataToBackend();
  }, []);

  return (
    <>
      <h1>Your payment is successful!</h1>
      <p>{pathname}</p>
  
      {/* {
        let data =  params.split("/");
      } */}
      {/* <p>Transaction ID: {transactionId}</p>
      <p>Merchant ID: {merchantId}</p>
      <p>Amount: {amount}</p>
      <p>Mobile Number: {mobnumber}</p> */}
    </>
  );
};

export default SuccessPage;
