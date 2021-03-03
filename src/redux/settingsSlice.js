import { createSlice } from "@reduxjs/toolkit";
import { resetGame } from "./gameSlice";
import { getSettings, setSettings } from "../helpers/localStorage";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: getSettings() || {
    isShowSettings: false,
    isShowTime: true,
    isShowCount: true,
    widthBoard: 4,
    heightBoard: 3,
    isSounds: true,
    volumeSounds: 1,
  },
  reducers: {
    setIsShowSettings: (state, action) => {
      state.isShowSettings = action.payload;
      if (!action.payload) setSettings(state);
    },
    toggleShowTime: (state) => {
      state.isShowTime = !state.isShowTime;
    },
    toggleShowCount: (state) => {
      state.isShowCount = !state.isShowCount;
    },
    setSize: (state, action) => {
      state.widthBoard = action.payload.widthBoard;
      state.heightBoard = action.payload.heightBoard;
    },
    setIsSounds: (state, action) => {
      state.isSounds = action.payload;
    },
    setVolumeSounds: (state, action) => {
      state.volumeSounds = action.payload;
    },
  },
});

export const {
  setIsShowSettings,
  toggleShowTime,
  toggleShowCount,
  setSize,
  setIsSounds,
  setVolumeSounds,
} = settingsSlice.actions;

export const setSizeBoard = (size) => (dispatch) => {
  dispatch(setSize(size));
  dispatch(resetGame());
};

export const isShowSettings = (state) => state.settings.isShowSettings;
export const isShow = (state) => ({
  isShowTime: state.settings.isShowTime,
  isShowCount: state.settings.isShowCount,
});
export const sizeBoard = (state) => ({
  widthBoard: state.settings.widthBoard,
  heightBoard: state.settings.heightBoard,
});
export const sounds = (state) => ({
  isSounds: state.settings.isSounds,
  volumeSounds: state.settings.volumeSounds,
});
export const isSounds = (state) => state.settings.isSounds;
export const volumeSounds = (state) => state.settings.isSounds;

export default settingsSlice.reducer;
