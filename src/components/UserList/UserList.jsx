import React from "react";
import User from "./User/User";
import { connect } from "react-redux";

const UserList = (props) => {
  return (
    <div className="collection center">
      {props.users.map((user) => (
        <User
          className="collection-item"
          key={user.id}
          id={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
        />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps)(UserList);
