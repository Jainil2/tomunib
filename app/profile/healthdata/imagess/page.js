import React from "react";
import axios from 'axios';

const ShowImage = () => {
    const handleClick = async () => {
        try {
          const response = await axios.get('/api/getPdf', { responseType: 'blob' });
    
          const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
    
          const pdfUrl = URL.createObjectURL(pdfBlob);
    
          window.open(pdfUrl, '_blank');
        } catch (error) {
          console.error('Error fetching PDF:', error);
        }
      };
    
  return ( 
  <div>
    <button onClick={handleClick}>Get PDF</button>
  </div>);
};

export default ShowImage;


