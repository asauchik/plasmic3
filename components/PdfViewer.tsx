import * as React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

export interface PdfViewerProps {
  pdfUrl: string;
  pageNumber?: number;
  className?: string;
}

// ✅ Fix worker path for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export function PdfViewer({ pdfUrl, pageNumber = 1, className }: PdfViewerProps) {
  return (
    <div className={className} style={{ width: "100%", maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      <Document 
        file={pdfUrl} 
        onLoadError={(error) => console.error("PDF Load Error:", error)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}
