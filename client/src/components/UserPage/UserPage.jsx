import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../redux/actions/actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  progress: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "300px",
    height: "300px",
  },
  user_page: {
    display: "flex",
    justifyContent: "space-around",
  },
});

const UserPage = (props) => {
  const { userId } = props.match.params;
  const s = useStyles();
  const { loadingUser, user } = props;
  console.log(user);
  useEffect(() => {
    props.getUser(userId);
  }, []);
  return (
    <div class={s.user_page}>
      {loadingUser ? (
        <div className={s.progress}>
          <CircularProgress />
        </div>
      ) : (
        <img src={"https://robohash.org/" + user.name} alt="" />
      )}
      {loadingUser ? (
        <div className={s.progress}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <Typography>{user.name}</Typography>
          <Typography>{user.name}</Typography>
          <Typography>{user.name}</Typography>
          <Typography>{user.name}</Typography>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.currentUser,
  loadingUser: state.loading,
});
const mapDispatchToProps = {
  getUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
