import React from "react";
import NotFoundCSS from "../css/NotFound.module.css";
const NotFound = () => {
  return (
    <div className={NotFoundCSS.container}>
      Sanırım yolunuzu kaybettiniz. En iyisi anasayfaya dönün.
    </div>
  );
};

export default NotFound;
