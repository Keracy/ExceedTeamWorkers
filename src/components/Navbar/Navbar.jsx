import React, { useEffect } from "react";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { getUsers } from "../redux/actions/actions";
import { connect } from "react-redux";

const Navbar = (props) => {
  useEffect(() => {
    props.getUsers();
    console.log(props.workers);
  }, []);

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
const mapStateToProps = (state) => {
  return { workers: state.workers };
};
const mapDispatchToProps = {
  getUsers,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
