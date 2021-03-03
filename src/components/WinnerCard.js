import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  setIsShowWin,
  isShowWin,
  flipCount,
  timeGame,
} from "../redux/gameSlice";

function WinnerCard() {
  const dispatch = useDispatch();
  const isShow = useSelector(isShowWin);
  const time = useSelector(timeGame);
  const count = useSelector(flipCount);

  const handleClose = () => {
    dispatch(setIsShowWin(false));
  };

  return (
    <Dialog
      open={isShow}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"You win!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <div>Time Game: {time} sec</div>
          <div>Flip Count: {count}</div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default WinnerCard;
