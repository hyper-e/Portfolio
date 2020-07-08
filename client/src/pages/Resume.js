import React, { Component } from "react";
import "./Css/page.css";
import Links from "../components/Links";
import Nav from "../components/Nav";
import "../components/CSS/navStyle.css";
// import jsPDF from "jspdf";
// import Iframe from "react-iframe";
 import { Document,Page } from "react-pdf";
import renderPDF from "./pdf/Resume2.0.pdf"
import { pdfjs } from 'react-pdf';




pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {

    render() {
         return (
             
          <div className="resumePage">
            <Nav />

          <div className="resumePDF">

            {/* //Using reactPDF to display pdf resume on screen */}

          <Document file={ renderPDF } className="pdF">
                <Page pageNumber={ 1 } renderAnnotationLayer={ 0 } height={ 1000 } />
            </Document>
          </div>

          <Links linkBox='links' />

          </div>
      )
   };
 };

export default Resume;