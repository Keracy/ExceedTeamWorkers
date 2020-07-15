import React from "react";
import s from "./User.module.css";
const User = (props) => {
  return (
    <div className={s.user}>
      <img src={"https://robohash.org/" + props.name} alt="Logo" />
      <div>
        <h2>{props.name}</h2>
        <h5>{props.phone}</h5>
        <h5>{props.email}</h5>
      </div>
    </div>
  );
};

export default User;
