import React from "react";
import NavbarCSS from "../css/Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header>
        <nav>
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
            to="/Posts"
            className={({ isActive, isPending }) =>
              isPending ? NavbarCSS.pending : isActive ? NavbarCSS.active : ""
            }
          >
            Paylaşımlar
          </NavLink>
          <NavLink
            to="/CV"
            className={({ isActive, isPending }) =>
              isPending ? NavbarCSS.pending : isActive ? NavbarCSS.active : ""
            }
          >
            CV
          </NavLink>
         
        </nav>
      </header>
    </>
  );
};

export default Navbar;
