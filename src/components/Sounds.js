import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useSound from "use-sound";
// import {
//   setIsShowWin,
//   isShowWin,
//   flipCount,
//   timeGame,
// } from "../redux/gameSlice";
import {
  playStart,
  playFlipOpen,
  playFlipClose,
  playLike,
  playWin,
  isPlay,
} from "../redux/soundSlice";
import startSfx from "../sounds/start.mp3";
import flipOpenSfx from "../sounds/flipOpen.mp3";
import flipCloseSfx from "../sounds/flipClose.mp3";
import likeSfx from "../sounds/like.mp3";
import winSfx from "../sounds/win.mp3";

function Sounds() {
  const dispatch = useDispatch();
  const play = useSelector(isPlay);

  const [start] = useSound(startSfx);
  const [flipOpen] = useSound(flipOpenSfx);
  const [flipClose] = useSound(flipCloseSfx);
  const [like] = useSound(likeSfx);
  const [win] = useSound(winSfx);

  //   useEffect(() => {
  //     console.log("sss");
  //     win();
  //   }, []);

  //   useEffect(() => {
  //     win();
  //   }, [isShow]);

  useEffect(() => {
    if (play.isStart) {
      start();
      dispatch(playStart(false));
    }
    if (play.isFlipOpen) {
      flipOpen();
      dispatch(playFlipOpen(false));
    }
    if (play.isFlipClose) {
      flipClose();
      dispatch(playFlipClose(false));
    }
    if (play.isLike) {
      like();
      dispatch(playLike(false));
    }
    if (play.isWin) {
      win();
      dispatch(playWin(false));
    }
  }, [play]);

  return null;
}

export default Sounds;
