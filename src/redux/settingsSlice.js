import { createSlice } from "@reduxjs/toolkit";
import { resetGame } from "./gameSlice";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    value: 0,
    isShowTime: true,
    isShowCount: true,
    widthBoard: 4,
    heightBoard: 3,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
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
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  toggleShowTime,
  toggleShowCount,
  //   setSizeBoard,
  setSize,
} = settingsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const setSizeBoard = (size) => (dispatch) => {
  dispatch(setSize(size));
  dispatch(resetGame());
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;
// export const isShowTime = (state) => state.settings.isShowTime;
// export const isShowCount = (state) => state.settings.isShowCount;
export const isShow = (state) => ({
  isShowTime: state.settings.isShowTime,
  isShowCount: state.settings.isShowCount,
});
export const sizeBoard = (state) => ({
  widthBoard: state.settings.widthBoard,
  heightBoard: state.settings.heightBoard,
});

export default settingsSlice.reducer;
