import React, { useState } from "react";
import './dash.css'
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UserDash from "../UserDash/userDash";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

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
}));


const UserDashSub = (state) =>{
     const classes = useStyles();
    const [open, setOpen] = useState(false);
    
       const handleOpen = (e) => {
         console.log("Open")
         e.preventDefault()
         setOpen(true);
       };

       const handleClose = (e) => {
          console.log("Close");
         e.preventDefault();
         setOpen(false);
       };


  let dataCheck = () => {
    let total = state.data.total;
    let color
    if (total === 100){
      color = { backgroundColor: "rgb(78, 156, 0)" };
    } else if (total < 100 && total >= 75){
      color = { backgroundColor: "rgba(255, 255, 0, 0.794)"};
    } else {
      color = { backgroundColor: "rgba(255, 0, 0, 0.678)" };
    }
    color.width = `${total}%`
    console.log(state.data)
    return (
      <div>
        <div className="userDash" onClick={handleOpen}>
          <div>{state.data.username}</div>
          <div className="healthBar">
            <div className="healthBarColor" style={color}>
              <p className="scoreText">{Math.floor(total)}</p>
            </div>
          </div>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
          className="modalDiv"
        >
          <UserDash />
        </Modal>
      </div>
    );
  }

  return(
    <div className="userMain">
      {dataCheck()}
    </div>
  )
}

export default UserDashSub;