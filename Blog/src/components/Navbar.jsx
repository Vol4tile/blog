import React from "react";
import NavbarCSS from "../css/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { motion } from "framer-motion";
const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <header
        className={isDarkMode ? NavbarCSS.darkHeader : NavbarCSS.lightHeader}
      >
        {!isMenuOpen && (
          <div className={NavbarCSS.hamburger} onClick={handleToggleMenu}>
            <RxHamburgerMenu size={16} />
          </div>
        )}
        <motion.ul
         key={isMenuOpen}
          className={`${isMenuOpen ? NavbarCSS.openNav : ""}`}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={item}>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? NavbarCSS.pending : isActive ? NavbarCSS.active : ""
              }
            >
              Anasayfa
            </NavLink>
          </motion.li>{" "}
          <motion.li variants={item}>
            <NavLink
              to="/Projects"
              className={({ isActive, isPending }) =>
                isPending ? NavbarCSS.pending : isActive ? NavbarCSS.active : ""
              }
            >
              Projelerim
            </NavLink>{" "}
          </motion.li>{" "}
          <motion.li variants={item}>
            <NavLink
              to="/Me"
              className={({ isActive, isPending }) =>
                isPending ? NavbarCSS.pending : isActive ? NavbarCSS.active : ""
              }
            >
              Hakkımda
            </NavLink>
          </motion.li>
          <motion.li variants={item}>
            <NavLink
              to="/Articles"
              className={({ isActive, isPending }) =>
                isPending ? NavbarCSS.pending : isActive ? NavbarCSS.active : ""
              }
            >
              Makaleler
            </NavLink>
          </motion.li>
          <motion.li variants={item}>
            <NavLink
              to="/CV"
              className={({ isActive, isPending }) =>
                isPending ? NavbarCSS.pending : isActive ? NavbarCSS.active : ""
              }
            >
              CV
            </NavLink>
          </motion.li>
          {isMenuOpen && (
            <div className={NavbarCSS.up} onClick={handleToggleMenu}>
              <AiOutlineDown  />
            </div>
          )}
        </motion.ul>
      </header>
    </>
  );
};

export default Navbar;
