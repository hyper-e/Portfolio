import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import renderPDF from "../components/pdf/Resume2.0.pdf";

import Nav from "../components/Nav";

class MobileResume extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Document
          file={renderPDF}
          className="pdF"
          loading="Loading PDF..."
          noData="No PDF found!"
        >
          <Page pageNumber={1} height={1000} />
        </Document>
      </div>
    );
  }
}

export default MobileResume;
