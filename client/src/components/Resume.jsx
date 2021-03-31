// import React from "react";
// import { Document, Page } from "react-pdf";
// import renderPDF from "./pdf/Resume2.0.pdf";
// import { pdfjs } from 'react-pdf';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// function Resume() {
  
//   const ScreenSize = () => {
//     const size = useMediaQuery('(min-height:1080px)');
//     return size;
//   };


//   return (
//     <div className="resume">
//        <Document file={ renderPDF } className="pdF" loading="Loading PDF..." noData="No PDF found!" >
//            <Page pageNumber={ 1 } height={ ScreenSize() ? 1000 : 800 } />
//        </Document>
//     </div>
//   )

// };

// export {Resume};


