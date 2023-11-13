import React from "react";
import NotFoundCSS from "../css/NotFound.module.css";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
const NotFound = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div
      className={`${NotFoundCSS.container} ${
        isDarkMode ? NotFoundCSS.dark : NotFoundCSS.light
      }`}
    >
      Sanırım yolunuzu kaybettiniz. En iyisi &nbsp;<Link to="/">Anasayfa</Link>
      'ya dönün.
    </div>
  );
};

export default NotFound;
