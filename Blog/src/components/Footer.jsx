import React from "react";
import FooterCSS from "../css/Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className={FooterCSS.socialMedias}>
          <a  href="https://github.com/Vol4tile" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a  href="https://www.linkedin.com/in/ilkanerdogan" target="_blank">
          <i className="fa fa-linkedin" aria-hidden="true"></i></a>
        </div>
        <div> © {new Date().getFullYear()} İlkan Erdoğan </div>
      </footer>
    </>
  );
};

export default Footer;
