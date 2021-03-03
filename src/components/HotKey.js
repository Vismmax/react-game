import React from "react";
import { useDispatch } from "react-redux";
import { useHotkeys } from "react-hotkeys-hook";
import { resetGame, playGame, autoPlay } from "../redux/gameSlice";
import { setSizeBoard, setIsShowSettings } from "../redux/settingsSlice";

function HotKey() {
  const dispatch = useDispatch();

  useHotkeys("r", () => dispatch(resetGame()));
  useHotkeys("p", () => dispatch(playGame()));
  useHotkeys("a", () => dispatch(autoPlay()));
  useHotkeys("m", () => dispatch(setIsShowSettings(true)));

  useHotkeys("1", () =>
    dispatch(setSizeBoard({ widthBoard: 3, heightBoard: 2 }))
  );
  useHotkeys("2", () =>
    dispatch(setSizeBoard({ widthBoard: 4, heightBoard: 3 }))
  );
  useHotkeys("3", () =>
    dispatch(setSizeBoard({ widthBoard: 6, heightBoard: 4 }))
  );
  //   useHotkeys("4", () =>
  //     dispatch(setSizeBoard({ widthBoard: 12, heightBoard: 8 }))
  //   );

  return null;
}

export default HotKey;
