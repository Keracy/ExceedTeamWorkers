import React, { useState } from "react";
import User from "./User/User";
import { connect } from "react-redux";
import SearchInput from "./SearchInput/SearchInput";
import s from "./UserList.module.css";

const UserList = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const searchHandler = (event) => {
    setSearchWord(event.target.value);
  };
  return (
    <div className={s.user_block}>
      <SearchInput changeHandler={searchHandler} />
      <div className={s.user_list}>
        {props.users
          .filter((user) =>
            user.name.toLowerCase().includes(searchWord.toLowerCase())
          )
          .map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              phone={user.phone}
              email={user.email}
            />
          ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps)(UserList);
