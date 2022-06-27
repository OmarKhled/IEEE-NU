import Head from "next/head";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const SEO = () => {
  return (
    <Head>
      <title>Egyptian Space Summit Regulations and Criteria</title>
      <meta
        name="description"
        content="The Regulations and criteria for the Egyptian Space Summit"
        key={"descripton"}
      />
      <meta property="og:title" content="Egyptian Space Summit Regulations and Criteria" key={"title"} />
      <meta
        property="og:image"
        content="https://i.ibb.co/bKby9F3/Egyptian-Summit-db872a21.png"
        key={"image"}
      />
      <meta
        property="og:description"
        content="The Regulations and criteria for the Egyptian Space Summit"
        key={"ogdescription"}
      />
      <meta property="og:url" content="https://ieeenu.com/spacesummit/criteria" />
      <meta property="og:site_name" content="IEEE NU" />
    </Head>
  );
};

const SpaceSummitDetails = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <>
      <SEO />
      <main className="__root">
        <section style={{ minHeight: "80vh", maxWidth: "80%", margin: "auto" }}>
          <h3 className="section-title mt-4">Space Summit Regulations and Criteria</h3>
          <div className="mt-4">
            <Worker theme='dark' workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/legacy/build/pdf.worker.js">
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  margin: "auto",
                  height: "1000px",
                  width: "min(920px, 100%)"
                }}
              >
                <Viewer
                  plugins={[defaultLayoutPluginInstance]}
                  fileUrl="/pdfs/Space Summit Criteria.pdf"
                />
              </div>
            </Worker>
          </div>  
        </section>
      </main>
    </>
  );
};

export default SpaceSummitDetails;