import React from "react";
import { Document, Page } from "react-pdf";
import renderPDF from "./pdf/Resume2.0.pdf";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  
  return (
    <div>
       <Document file={ renderPDF } className="pdF" loading="Loading PDF..." noData="No PDF found!" >
           <Page pageNumber={ 1 } height={ 1000 } />
       </Document>
    </div>
  )

};

function LinkResume() {
  const openPDF = () => {
    window.open("mobilePDF");
  };
  return (
    <div>
    <a style={{color: "white"}} onClick={openPDF}>Resume Link</a>
    </div>
  )
}



export {Resume, LinkResume};


