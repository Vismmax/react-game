import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GameBoard from "./GameBoard";
import ControlBoard from "./ControlBoard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
  },
}));

function MainBar() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <GameBoard />
      <ControlBoard />
    </Container>
  );
}

export default MainBar;
