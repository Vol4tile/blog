import React, { useEffect } from "react";

import PDFFile from "../assets/ilkanCV.pdf";
import CVCSS from "../css/CV.module.css";
import { motion } from "framer-motion";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import changeMetaTags from "../utils/changeMetaTags";
import {SlCloudDownload} from "react-icons/sl"
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const CVPage = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = PDFFile;
    link.download = "ilkanCV.pdf";
    link.click();
  };
  useEffect(() => {
    changeMetaTags({ title: "CV" });
  }, []);
  return (
    <>
      <motion.div
       className={CVCSS.container}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      
      ><div   className={CVCSS.innerContainer}>
           <Document file={PDFFile} >
        <Page pageNumber={1}  />
      </Document>
      <SlCloudDownload className={CVCSS.downBtn} size={20} fill="gray"   onClick={downloadPDF}/>
      </div>
       </motion.div>
    </>
  );
};

export default CVPage;
