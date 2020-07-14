import React, { useState } from "react";
import User from "./User/User";
import { connect } from "react-redux";
import SearchInput from "./SearchInput/SearchInput";

const UserList = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const searchHandler = (event) => {
    setSearchWord(event.target.value);
  };
  return (
    <div>
      <SearchInput changeHandler={searchHandler} />
      {props.users
        .filter((user) =>
          user.name.toLowerCase().includes(searchWord.toLowerCase())
        )
        .map((user) => (
          <User
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
