import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Replay from "@material-ui/icons/Replay";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Autorenew from "@material-ui/icons/Autorenew";
import { resetGame, playGame, autoPlay } from "../redux/gameSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

function ControlBoard() {
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="default"
        startIcon={<Replay />}
        onClick={() => dispatch(resetGame())}
      >
        Reset
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<PlayArrow />}
        onClick={() => dispatch(playGame())}
      >
        Play
      </Button>

      <Button
        variant="contained"
        color="default"
        startIcon={<Autorenew />}
        onClick={() => dispatch(autoPlay())}
      >
        Auto
      </Button>
    </div>
  );
}

export default ControlBoard;
