import React, { Component } from "react";
import "./Css/page.css";
import Links from "../components/Links";
import Nav from "../components/Nav";
import "../components/CSS/navStyle.css";
// import jsPDF from "jspdf";
// import Iframe from "react-iframe";
// import { Document, Page } from "react-pdf";
// import pdf from "./pdf/Resume2.0.pdf"






class Resume extends Component {
    render() {
         return (
             
          <div className="resumePage">
            <Nav />

          </div>
//         //     <div className="resumePage" style={{height: "100%", width:"100%"}}>
//         //         <Iframe src="../pages/pdf/Resume2.0.pdf"
//         // width="450px"
//         // height="450px"
//         // id="myId"
//         // className="myClassname"
//         // display="initial"
//         // position="relative"/>

//         //     </div>

//         <Document file={pdf}>
//             <Page pageNumber={1} />
//         </Document>
//     //   <p>Page {pageNumber} of {numPages}</p>
        
// //         <iframe src="./pdf/Resume2.0.pdf" title="title">
// //      Presss me: <a href="./resources/crayola.pdf">Download PDF</a>
// // </iframe>
      )
   };
 };

export default Resume;