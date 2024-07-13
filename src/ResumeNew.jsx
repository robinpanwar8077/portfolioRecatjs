import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import './Resume.css';
import pdf from "../src/Assets/Robinone.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleDownload = () => {
    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = pdf;
    anchor.download = "Robin_Singh_Resume.pdf"; // Set the desired file name
    anchor.click();
  };

  return (
    <Container fluid className="resumecon">
      <Document className="resume" file={pdf}>
        <Page pageNumber={1} scale={width > 786 ? 1 : 0.4} renderTextLayer={false} />
      </Document>

      <button
        variant="outline-primary"
        className="buttoncv"
        onClick={handleDownload}
      >
       
        Download CV
      </button>
    </Container>
  );
}

export default ResumeNew;
