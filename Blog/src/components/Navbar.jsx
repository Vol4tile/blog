import React from "react";
import NavbarCSS from "../css/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import {AiOutlineDown} from "react-icons/ai"
const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header
        className={isDarkMode ? NavbarCSS.darkHeader : NavbarCSS.lightHeader}
      >
        {!isMenuOpen && <div className={NavbarCSS.hamburger} onClick={handleToggleMenu}>
          <RxHamburgerMenu size={16} />
        </div>}
        <nav className={`${isMenuOpen ? NavbarCSS.openNav : ""}`}>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? NavbarCSS.pending : isActive ? NavbarCSS.active : ""
            }
          >
            Anasayfa
          </NavLink>
          <NavLink
            to="/Projects"
            className={({ isActive, isPending }) =>
              isPending ? NavbarCSS.pending : isActive ? NavbarCSS.active : ""
            }
          >
            Projelerim
          </NavLink>
          <NavLink
            to="/Me"
            className={({ isActive, isPending }) =>
              isPending ? NavbarCSS.pending : isActive ? NavbarCSS.active : ""
            }
          >
            Hakkımda
          </NavLink>

          <NavLink
            to="/CV"
            className={({ isActive, isPending }) =>
              isPending ? NavbarCSS.pending : isActive ? NavbarCSS.active : ""
            }
          >
            CV
          </NavLink>
          {isMenuOpen && <div className={NavbarCSS.up} onClick={handleToggleMenu}><AiOutlineDown size={16}/></div>}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
