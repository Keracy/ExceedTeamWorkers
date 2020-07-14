import React from "react";
const User = (props) => {
  return (
    <div>
      <img src={"https://robohash.org/" + props.id} alt="Logo" />
      <div>
        <h3>Name: {props.name}</h3>
        <h4>Login: {props.username}</h4>
        <h4>E-Mail: {props.email}</h4>
      </div>
    </div>
  );
};

export default User;
