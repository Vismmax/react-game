import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Typography from "@material-ui/core/Typography";
import {
  toggleShowTime,
  toggleShowCount,
  setSizeBoard,
  setIsSounds,
  setVolumeSounds,
  isShow,
  sizeBoard,
  sounds,
} from "../redux/settingsSlice";

const useStyles = makeStyles((theme) => ({
  group: {
    marginBottom: theme.spacing(3),
  },
}));

function Settings() {
  const dispatch = useDispatch();
  const { isShowTime, isShowCount } = useSelector(isShow);
  const { widthBoard, heightBoard } = useSelector(sizeBoard);
  const { isSounds, volumeSounds } = useSelector(sounds);

  const classes = useStyles();

  const handleSize = (event) => {
    const [width, height] = event.target.value.split("x");
    dispatch(setSizeBoard({ widthBoard: +width, heightBoard: +height }));
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">UI Settngs</FormLabel>
        <FormGroup className={classes.group}>
          <FormControlLabel
            control={
              <Switch
                checked={isShowCount}
                onChange={() => dispatch(toggleShowCount())}
                name="count"
              />
            }
            label="Show flip count"
          />
          <FormControlLabel
            control={
              <Switch
                checked={isShowTime}
                onChange={() => dispatch(toggleShowTime())}
                name="time"
              />
            }
            label="Show time game"
          />
        </FormGroup>

        <FormLabel component="legend">Size board</FormLabel>
        <FormGroup className={classes.group}>
          <RadioGroup
            aria-label="size board"
            // value={size}
            value={`${widthBoard}x${heightBoard}`}
            onChange={handleSize}
          >
            <FormControlLabel
              value="3x2"
              control={<Radio />}
              label="3x2 (easy)"
            />
            <FormControlLabel
              value="4x3"
              control={<Radio />}
              label="4x3 (medium)"
            />
            <FormControlLabel
              value="6x4"
              control={<Radio />}
              label="6x4 (hard)"
            />
            <FormControlLabel
              value="12x8"
              control={<Radio />}
              label="12x8 (very hard)"
            />
          </RadioGroup>
        </FormGroup>

        <FormLabel component="legend">Sounds</FormLabel>
        <FormGroup className={classes.group}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isSounds}
                onChange={(e) => dispatch(setIsSounds(e.target.checked))}
                name="sounds"
              />
            }
            label="Use sounds"
          />
          <Typography id="continuous-slider" gutterBottom>
            Volume sounds
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs>
              <Slider
                value={volumeSounds}
                onChange={(e, val) => dispatch(setVolumeSounds(val))}
                disabled={!isSounds}
                min={0}
                max={1}
                step={0.1}
                aria-labelledby="continuous-slider"
              />
            </Grid>
            <Grid item>
              <VolumeUp />
            </Grid>
          </Grid>
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default Settings;
