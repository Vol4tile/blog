import React, { useEffect } from "react";

import PDFFile from "../assets/ilkanCV.pdf";
import CVCSS from "../css/CV.module.css";
import { motion } from "framer-motion";
import PDFImage from "../assets/pdfimage.png"
import changeMetaTags from "../utils/changeMetaTags";
import {SlCloudDownload} from "react-icons/sl"
import { useTheme } from "../context/ThemeContext";

const CVPage = () => {
  const { isDarkMode, toggleTheme } = useTheme();
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
       className={`${CVCSS.container} ${isDarkMode ? CVCSS.dark : ''}`}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      
      >
      

        
        <object data={PDFFile} type="application/pdf"  >
        <div   className={CVCSS.innerContainer}><img src={PDFImage}  ></img> <SlCloudDownload className={CVCSS.downBtn} size={20} fill="gray"   onClick={downloadPDF}/></div>
</object>
      
     
       </motion.div>
    </>
  );
};

export default CVPage;
