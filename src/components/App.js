import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import MainBar from "./MainBar";
import Sounds from "./Sounds";
import HotKey from "./HotKey";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <SideBar />
      <MainBar />
      <Sounds />
      <HotKey />
    </div>
  );
}

export default App;
