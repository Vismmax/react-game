import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import {
  toggleShowTime,
  toggleShowCount,
  setSizeBoard,
  isShow,
  sizeBoard,
} from "../redux/settingsSlice";

function Settings() {
  const dispatch = useDispatch();
  const { isShowTime, isShowCount } = useSelector(isShow);
  const { widthBoard, heightBoard } = useSelector(sizeBoard);

  const handleSize = (event) => {
    const [width, height] = event.target.value.split("x");
    dispatch(setSizeBoard({ widthBoard: +width, heightBoard: +height }));
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">UI Settngs</FormLabel>
        <FormGroup>
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

          <FormLabel component="legend">Size board</FormLabel>
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
      </FormControl>
    </div>
  );
}

export default Settings;
