import React, { useEffect } from "react";
import CV from "../assets/ilkanCV.pdf";
import CVCSS from "../css/CV.module.css";
import { motion } from "framer-motion";
import changeMetaTags from "../utils/changeMetaTags";

const CVPage = () => {
  useEffect(() => {
    changeMetaTags({ title: "CV" });
  }, []);
  return (
    <>
      <motion.embed
        src={CV}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      />
    </>
  );
};

export default CVPage;
