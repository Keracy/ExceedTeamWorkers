import React, { useState } from "react";
import User from "./User/User";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AddEmployeeModal from "./Modal";

const useStyles = makeStyles({
  user_block: {
    textAlign: "center",
    padding: "30px",
  },
  search_block: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
  },
});

const UserList = (props) => {
  const s = useStyles();
  const [searchWord, setSearchWord] = useState("");
  const searchHandler = (event) => {
    setSearchWord(event.target.value);
  };
  console.log(props.users);
  return (
    <div className={s.user_block}>
      <div className={s.search_block}>
        <TextField
          className={s.search_input}
          fullWidth={true}
          onChange={searchHandler}
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
        <AddEmployeeModal className={s.add_employee} />
      </div>
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
