import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Typography, CardMedia } from "@material-ui/core";
import classes from "./User.module.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  add_icon: {
    width: "40px",
    cursor: "pointer",
  },
  modal: {},
}));

export default function User(props) {
  const s = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={s.paper + " " + s.modal}>
      <img src={"https://robohash.org/" + props.name} alt="Logo" />
      <div>
        <h2>{props.name}</h2>
        <h5>{props.phone}</h5>
        <h5>{props.email}</h5>
      </div>
    </div>
  );

  return (
    <div>
      <div className={classes.user} onClick={handleOpen}>
        <img src={"https://robohash.org/" + props.name} alt="Logo" />
        <div>
          <h2>{props.name}</h2>
          <h5>{props.phone}</h5>
          <h5>{props.email}</h5>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
