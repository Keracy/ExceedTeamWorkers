import React, { useEffect } from "react";
import User from "./User/User";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchBlock from "./SearchBlock/SearchBlock";
import { getUsers, getUser } from "../redux/actions/actions";

const useStyles = makeStyles({
  user_block: {
    textAlign: "center",
    padding: "30px",
  },
});

const clickHandler = (event) => {
  console.log(event);
};

const UserList = (props) => {
  useEffect(() => {
    props.getUsers();
  }, []);
  const s = useStyles();
  console.log(props.users);
  return (
    <div className={s.user_block}>
      <SearchBlock />
      <Grid container spacing={5}>
        {props.users
          .filter((user) =>
            user.name.toLowerCase().includes(props.searchWord.toLowerCase())
          )
          .map((user) => (
            <Grid item lg={3} md={4} sm={6}>
              <User
                key={user._id}
                id={user._id}
                name={user.name}
                phone={user.phone}
                email={user.email}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.users,
    searchWord: state.searchWord,
  };
};
const mapDispatchToProps = {
  getUsers,
  getUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
