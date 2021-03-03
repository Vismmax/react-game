import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingsSlice";
import gameReducer from "./gameSlice";
import soundReducer from "./soundSlice";

export default configureStore({
  reducer: {
    settings: settingsReducer,
    game: gameReducer,
    sound: soundReducer,
  },
});
