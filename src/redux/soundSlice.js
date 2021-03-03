import { createSlice } from "@reduxjs/toolkit";

export const soundSlice = createSlice({
  name: "sound",
  initialState: {
    isStart: false,
    isFlipOpen: false,
    isFlipClose: false,
    isLike: false,
    isWin: false,
    isMusic: true,
  },
  reducers: {
    playStart: (state, action) => {
      state.isStart = action.payload;
    },
    playFlipOpen: (state, action) => {
      state.isFlipOpen = action.payload;
    },
    playFlipClose: (state, action) => {
      state.isFlipClose = action.payload;
    },
    playLike: (state, action) => {
      state.isLike = action.payload;
    },
    playWin: (state, action) => {
      state.isWin = action.payload;
    },
    playMusic: (state, action) => {
      state.isMusic = action.payload;
    },
  },
});

export const {
  playStart,
  playFlipOpen,
  playFlipClose,
  playLike,
  playWin,
  playMusic,
} = soundSlice.actions;

export const isPlay = (state) => ({
  isStart: state.sound.isStart,
  isFlipOpen: state.sound.isFlipOpen,
  isFlipClose: state.sound.isFlipClose,
  isLike: state.sound.isLike,
  isWin: state.sound.isWin,
});
export const isMusic = (state) => state.sound.isMusic;

export default soundSlice.reducer;
