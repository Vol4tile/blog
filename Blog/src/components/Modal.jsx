import React from "react";
import ProjectsCSS from "../css/Projects.module.css";

const Modal = ({ image, onClose }) => {
  return (
    <div className={ProjectsCSS.modal}>
      <div className={ProjectsCSS.modalContent}>
        <img src={image} alt="Modal Image" />
        <button onClick={onClose}>Kapat</button>
      </div>
    </div>
  );
};

export default Modal;