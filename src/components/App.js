import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import MainBar from "./MainBar";
import Sounds from "./Sounds";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  const [sideBar, setSideBar] = useState(false);

  const toggleSideBar = (open = true) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSideBar(open);
  };

  return (
    <div className={classes.root}>
      <TopBar toggleSideBar={toggleSideBar} />
      <SideBar isOpen={sideBar} toggleSideBar={toggleSideBar} />
      <MainBar />
      <Sounds />
    </div>
  );
}

export default App;
