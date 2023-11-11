import React from "react";
import FooterCSS from "../css/Footer.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
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

        <span className={FooterCSS.toggle}>
          {isDarkMode ? (
            <FiMoon size={20} onClick={toggleTheme} />
          ) : (
            <FiSun size={20} onClick={toggleTheme} />
          )}
        </span>
      </footer>
    </>
  );
};

export default Footer;
