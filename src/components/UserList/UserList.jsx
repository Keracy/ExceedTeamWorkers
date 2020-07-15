import React, { useState } from "react";
import User from "./User/User";
import { connect } from "react-redux";
import s from "./UserList.module.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  search_input: {
    marginBottom: "30px",
  },
});

const UserList = (props) => {
  const classes = useStyles();
  const [searchWord, setSearchWord] = useState("");
  const searchHandler = (event) => {
    setSearchWord(event.target.value);
  };
  return (
    <div className={s.user_block}>
      <TextField
        className={classes.search_input}
        fullWidth={true}
        onChange={searchHandler}
        id="outlined-basic"
        label="Search"
        variant="outlined"
      />
      <Grid container spacing={5}>
        {props.users
          .filter((user) =>
            user.name.toLowerCase().includes(searchWord.toLowerCase())
          )
          .map((user) => (
            <Grid item xs={4}>
              <User
                key={user.id}
                id={user.id}
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
  };
};
export default connect(mapStateToProps)(UserList);
