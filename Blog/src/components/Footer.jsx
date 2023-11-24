import React from "react";
import FooterCSS from "../css/Footer.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useTheme } from "../context/ThemeContext";

import ModeSwitch from "./ModeSwitch";
const Footer = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <>
      <footer
        className={isDarkMode ? FooterCSS.darkFooter : FooterCSS.lightFooter}
      >
        <div className={FooterCSS.socialMedias}>
          <a href="https://github.com/Vol4tile" target="_blank">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/ilkanerdogan" target="_blank">
            <AiFillLinkedin />
          </a>
        </div>
        <div className={FooterCSS.copyright}>
          {" "}
          {new Date().getFullYear()} İlkan ERDOĞAN{" "}
        </div>

        <ModeSwitch />
      </footer>
    </>
  );
};

export default Footer;
