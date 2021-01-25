import React, { Component } from "react";
import { Document,Page } from "react-pdf";
import renderPDF from "./pdf/Resume2.0.pdf"
import { pdfjs } from 'react-pdf';




pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {

    render() {
         return (
             
          <div className="resume">
          <div className="resumePDF">

            {/* //Using reactPDF to display pdf resume on screen */}

          <Document file={ renderPDF } className="pdF">
                <Page pageNumber={ 1 } height={ 1000 } />
            </Document>
          </div>

          </div>
      )
   };
 };

export default Resume;