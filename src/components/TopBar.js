import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Timer from "@material-ui/icons/Timer";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import { isShow } from "../redux/settingsSlice";
import { flipCount, timeGame } from "../redux/gameSlice";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(5),
  },
}));

function TopBar({ toggleSideBar }) {
  const { isShowTime, isShowCount } = useSelector(isShow);
  const countFlip = useSelector(flipCount);
  const time = useSelector(timeGame);

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleSideBar(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Flip and remember
        </Typography>

        {isShowCount && (
          <>
            <ViewCarousel className={classes.icon} />
            <Typography variant="h6">{countFlip}</Typography>
          </>
        )}

        {isShowTime && (
          <>
            <Timer className={classes.icon} />
            <Typography variant="h6">{time} sec</Typography>
          </>
        )}

        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
