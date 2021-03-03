import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Settings from "./Settings";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    padding: theme.spacing(2),
  },
}));

function SideBar({ isOpen, toggleSideBar }) {
  const classes = useStyles();
  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleSideBar(false)}>
      <div
        className={classes.root}
        role="presentation"
        // onClick={toggleSideBar(false)}
        // onKeyDown={toggleSideBar(false)}
      >
        <Settings />
      </div>
    </Drawer>
  );
}

export default SideBar;
