import { createSlice } from "@reduxjs/toolkit";
import generateCards from "../helpers/generateCards";
import {
  playStart,
  playFlipOpen,
  playFlipClose,
  playLike,
  playWin,
} from "./soundSlice";
import { getGameData, setGameData } from "../helpers/localStorage";

export const gameSlice = createSlice({
  name: "game",
  initialState: getGameData() || {
    cards: [],
    isStartGame: false,
    isShowWin: false,
    timerOpenAllId: null,
    flipCount: 0,
    timeGame: 0,
    timerGameId: null,
    selectedCardId: null,
    timerStartAutoId: null,
    timerAutoGameId: null,
  },
  reducers: {
    resetState: (state) => {
      state.isStartGame = false;
      state.flipCount = 0;
      state.timeGame = 0;
      state.selectedCardId = null;
    },
    resetCards: (state, action) => {
      state.cards = generateCards(action.payload);
      state.isStartGame = false;
    },
    openCard: (state, action) => {
      state.cards[action.payload.id].isOpen = true;
    },
    closeCard: (state, action) => {
      state.cards[action.payload].isOpen = false;
    },
    openAll: (state) => {
      for (let card of state.cards) {
        card.isOpen = true;
      }
    },
    closeAll: (state) => {
      for (let card of state.cards) {
        card.isOpen = false;
      }
    },
    setTimerOpenAllId: (state, action) => {
      state.timerOpenAllId = action.payload;
    },
    clearTimerIdAll: (state) => {
      if (state.timerOpenAllId) {
        clearTimeout(state.timerOpenAllId);
      }
      state.timerOpenAllId = null;
    },
    incrementTimeGame: (state) => {
      state.timeGame += 1;
    },
    setTimerGameId: (state, action) => {
      state.isStartGame = true;
      state.timerGameId = action.payload;
    },
    clearTimerGameId: (state) => {
      clearInterval(state.timerGameId);
      state.timerGameId = null;
      state.isStartGame = false;
    },
    incrementFlipCount: (state) => {
      state.flipCount += 1;
    },
    setSelectedCardId: (state, action) => {
      state.selectedCardId = action.payload;
    },
    setTimerStartAutoId: (state, action) => {
      state.timerStartAutoId = action.payload;
    },
    setTimerAutoGameId: (state, action) => {
      state.timerAutoGameId = action.payload;
    },
    clearTimerStartAutoId: (state) => {
      if (state.timerStartAutoId) {
        clearTimeout(state.timerStartAutoId);
        state.timerStartAutoId = null;
      }
    },
    clearTimerAutoGameId: (state) => {
      if (state.timerAutoGameId) {
        clearInterval(state.timerAutoGameId);
        state.timerAutoGameId = null;
      }
    },
    setIsShowWin: (state, action) => {
      state.isShowWin = action.payload;
      setGameData(state);
    },
    saveState: (state) => {
      setGameData(state);
    },
  },
});

export const {
  resetState,
  resetCards,
  openCard,
  closeCard,
  openAll,
  closeAll,
  setTimerOpenAllId,
  clearTimerIdAll,
  incrementTimeGame,
  setTimerGameId,
  clearTimerGameId,
  incrementFlipCount,
  setSelectedCardId,
  setTimerStartAutoId,
  setTimerAutoGameId,
  clearTimerStartAutoId,
  clearTimerAutoGameId,
  setIsShowWin,
  saveState,
} = gameSlice.actions;

export const resetGame = () => (dispatch, getState) => {
  const state = getState();
  const countCards = state.settings.widthBoard * state.settings.heightBoard;
  dispatch(clearTimerStartAutoId());
  dispatch(clearTimerAutoGameId());
  dispatch(clearTimerIdAll());
  dispatch(clearTimerGameId());
  dispatch(resetState());
  dispatch(resetCards(countCards));
  dispatch(saveState());
};

export const flipCard = (id) => (dispatch) => {
  dispatch(playFlipOpen(true));
  dispatch(openCard({ id }));
  dispatch(incrementFlipCount());
  dispatch(compareCard(id));
};

export const playGame = () => (dispatch) => {
  dispatch(playStart(true));
  dispatch(resetGame());
  const timerGameId = setInterval(() => dispatch(incrementTimeGame()), 1000);
  dispatch(setTimerGameId(timerGameId));
  dispatch(openAll());
  const timerId = setTimeout(() => {
    dispatch(closeAll());
    dispatch(setTimerOpenAllId(null));
  }, 3000);
  dispatch(setTimerOpenAllId(timerId));
};

export const compareCard = (id) => (dispatch, getState) => {
  const game = getState().game;
  if (game.selectedCardId === id) return;
  if (game.selectedCardId !== null) {
    if (game.cards[id].idImg === game.cards[game.selectedCardId].idImg) {
      dispatch(playLike(true));
      if (!game.cards.filter((card) => !card.isOpen).length) {
        dispatch(stopGame());
      }
    } else {
      setTimeout(() => {
        dispatch(playFlipClose(true));
        dispatch(closeCard(game.selectedCardId));
        dispatch(closeCard(id));
        dispatch(saveState());
      }, 500);
    }
    dispatch(setSelectedCardId(null));
  } else {
    dispatch(setSelectedCardId(id));
  }
  dispatch(saveState());
};

export const stopGame = () => (dispatch) => {
  dispatch(clearTimerGameId());
  dispatch(clearTimerStartAutoId());
  dispatch(clearTimerAutoGameId());
  dispatch(setIsShowWin(true));
  dispatch(playWin(true));
  dispatch(saveState());
};

export const autoPlay = () => (dispatch, getState) => {
  dispatch(playGame());
  const timerStartAutoId = setTimeout(() => {
    const timerAutoGameId = setInterval(() => {
      const cards = getState().game.cards;
      let randomId = null;
      while (randomId === null || cards[randomId]?.isOpen) {
        randomId = Math.floor(Math.random() * cards.length);
      }
      dispatch(flipCard(randomId));
    }, 2000);
    dispatch(setTimerAutoGameId(timerAutoGameId));
  }, 5000);
  dispatch(setTimerStartAutoId(timerStartAutoId));
};

export const cardsGame = (state) => state.game.cards;
export const flipCount = (state) => state.game.flipCount;
export const timeGame = (state) => state.game.timeGame;
export const isShowWin = (state) => state.game.isShowWin;

export default gameSlice.reducer;
