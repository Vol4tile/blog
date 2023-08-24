import React from "react";
import FooterCSS from "../css/Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className={FooterCSS.socialMedias}>
          <i className="fa fa-github" aria-hidden="true"></i>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </div>
        <div> © {new Date().getFullYear()} İlkan Erdoğan </div>
      </footer>
    </>
  );
};

export default Footer;
