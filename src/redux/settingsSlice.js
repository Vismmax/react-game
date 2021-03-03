import { createSlice } from "@reduxjs/toolkit";
import { resetGame } from "./gameSlice";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    isShowTime: true,
    isShowCount: true,
    widthBoard: 4,
    heightBoard: 3,
  },
  reducers: {
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
  },
});

export const {
  toggleShowTime,
  toggleShowCount,
  setSize,
} = settingsSlice.actions;

export const setSizeBoard = (size) => (dispatch) => {
  dispatch(setSize(size));
  dispatch(resetGame());
};

export const isShow = (state) => ({
  isShowTime: state.settings.isShowTime,
  isShowCount: state.settings.isShowCount,
});
export const sizeBoard = (state) => ({
  widthBoard: state.settings.widthBoard,
  heightBoard: state.settings.heightBoard,
});

export default settingsSlice.reducer;
