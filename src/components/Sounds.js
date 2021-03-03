import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactHowler from "react-howler";
import useSound from "use-sound";
import {
  playStart,
  playFlipOpen,
  playFlipClose,
  playLike,
  playWin,
  isPlay,
  isMusic,
} from "../redux/soundSlice";
import { sounds } from "../redux/settingsSlice";
import startSfx from "../sounds/start.mp3";
import flipOpenSfx from "../sounds/flipOpen.mp3";
import flipCloseSfx from "../sounds/flipClose.mp3";
import likeSfx from "../sounds/like.mp3";
import winSfx from "../sounds/win.mp3";

function Sounds() {
  const dispatch = useDispatch();
  const play = useSelector(isPlay);
  const isMus = useSelector(isMusic);
  const { isSounds, volumeSounds } = useSelector(sounds);

  const [start] = useSound(startSfx, {
    volume: volumeSounds,
    soundEnabled: isSounds,
  });
  const [flipOpen] = useSound(flipOpenSfx, {
    volume: volumeSounds,
    soundEnabled: isSounds,
  });
  const [flipClose] = useSound(flipCloseSfx, {
    volume: volumeSounds,
    soundEnabled: isSounds,
  });
  const [like] = useSound(likeSfx, {
    volume: volumeSounds,
    soundEnabled: isSounds,
  });
  const [win] = useSound(winSfx, {
    volume: volumeSounds,
    soundEnabled: isSounds,
  });

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

  return (
    <ReactHowler
      src="http://nashe1.hostingradio.ru/rock-128.mp3"
      playing={false}
      html5={true}
    />
  );
}

export default Sounds;
