import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const SpaceSummitDetails = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div style={{ minHeight: "80vh", maxWidth: "80%", margin: "auto" }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            margin: "auto",
            height: "1000px",
          }}
        >
          <Viewer
            plugins={[defaultLayoutPluginInstance]}
            fileUrl="/pdfs/Egyptian-Space-Summit-Competition-IEEE-NU.pdf"
          />
        </div>
      </Worker>
    </div>
  );
};

export default SpaceSummitDetails;
