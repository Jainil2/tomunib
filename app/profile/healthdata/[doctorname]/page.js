'use client'
import React from "react";
import { useState, useEffect } from "react";

const PDFlist = () => {
  const [pdfList, setPdfList] = useState([]);

  useEffect(() => {
    const fetchPdfList = async () => {
      try {
        const response = await axios.get('/api/listPdfs');
        setPdfList(response.data.pdfList);
      } catch (error) {
        console.error(error);
        // Handle error gracefully (e.g., display an error message)
      }
    };
  
    fetchPdfList();
  }, []);
  

  const pdfLinks = pdfList.map(pdfReference => (
    <li key={pdfReference}>
      <a href={`/${pdfReference}`} target="_blank" rel="noreferrer noopener">
        {pdfReference}
      </a>
    </li>
  ));
  
  return (
    <div>
      <div>
        <h2>List of PDFs</h2>
        <ul>{pdfLinks}</ul>
      </div>
    </div>
  );
};

export default PDFlist;
