import React from "react";
import FooterCSS from "../css/Footer.module.css";
import {AiFillGithub,AiFillLinkedin} from "react-icons/ai"
const Footer = () => {
  return (
    <>
      <footer>
        <div className={FooterCSS.socialMedias}>
          <a  href="https://github.com/Vol4tile" target="_blank">
          <AiFillGithub/>
          </a>
          <a  href="https://www.linkedin.com/in/ilkanerdogan" target="_blank">
          <AiFillLinkedin/></a>
        </div>
        <div className={FooterCSS.copyright}>  {new Date().getFullYear()} İlkan ERDOĞAN </div>
      </footer>
    </>
  );
};

export default Footer;
