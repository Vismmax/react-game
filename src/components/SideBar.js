import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Settings from "./Settings";
import { setIsShowSettings, isShowSettings } from "../redux/settingsSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    padding: theme.spacing(2),
  },
}));

function SideBar() {
  const dispatch = useDispatch();

  const isOpen = useSelector(isShowSettings);

  const classes = useStyles();

  const toggleSideBar = (open = true) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(setIsShowSettings(open));
  };

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
