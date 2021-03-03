import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingsSlice";
import gameReducer from "./gameSlice";

export default configureStore({
  reducer: {
    settings: settingsReducer,
    game: gameReducer,
  },
});
