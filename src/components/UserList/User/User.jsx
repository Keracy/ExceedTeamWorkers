import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Typography, CardMedia } from "@material-ui/core";
import s from "./User.module.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

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
    width: 750,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  add_icon: {
    width: "40px",
    cursor: "pointer",
  },
  modal: {
    display: "flex",
    justifyContent: "space-between",
  },
  media: {
    height: 400,
    width: "100%",
  },
  root: {
    border: "1px solid black",
  },
  more_icon: {
    cursor: "pointer",
  },
  card_actions: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
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
      <div className={s.user}>
        <Card className={s.root}>
          <CardActionArea onClick={handleOpen}>
            <CardMedia
              className={s.media}
              image={"https://robohash.org/" + props.name}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <p>{props.phone}</p>
                <p>{props.email}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={s.card_actions}>
            <img
              src="https://image.flaticon.com/icons/png/512/64/64576.png"
              alt="more"
              width="20"
              className={s.more_icon}
            />
          </CardActions>
        </Card>
        {/* <img src={"https://robohash.org/" + props.name} alt="Logo" />
        <div>
          <h2>{props.name}</h2>
          <h5>{props.phone}</h5>
          <h5>{props.email}</h5>
        </div> */}
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
