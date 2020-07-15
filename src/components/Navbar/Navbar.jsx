import React from "react";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={s.header}>
      <Link className={s.nav_link} to="/users">
        Employee List
      </Link>
      <Link className={s.nav_link} to="/projects">
        Projects
      </Link>
    </div>
  );
};

export default Navbar;
