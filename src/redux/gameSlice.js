import { createSlice } from "@reduxjs/toolkit";
import generateCards from "../helpers/generateCards";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    cards: [],
    isStartGame: false,
    timerOpenAllId: null,
    flipCount: 0,
    timeGame: 0,
    timerGameId: null,
    selectedCardId: null,
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
} = gameSlice.actions;

export const resetGame = () => (dispatch, getState) => {
  const state = getState();
  const countCards = state.settings.widthBoard * state.settings.heightBoard;
  dispatch(clearTimerIdAll());
  dispatch(clearTimerGameId());
  dispatch(resetState());
  dispatch(resetCards(countCards));
};

export const flipCard = (id) => (dispatch) => {
  dispatch(openCard({ id }));
  dispatch(incrementFlipCount());
  dispatch(compareCard(id));
};

export const playGame = () => (dispatch) => {
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
      if (!game.cards.filter((card) => !card.isOpen).length) {
        dispatch(stopGame());
      }
    } else {
      setTimeout(() => {
        dispatch(closeCard(game.selectedCardId));
        dispatch(closeCard(id));
      }, 500);
    }
    dispatch(setSelectedCardId(null));
  } else {
    dispatch(setSelectedCardId(id));
  }
};

export const stopGame = () => (dispatch) => {
  dispatch(clearTimerGameId());
};

export const autoPlay = () => (dispatch) => {};

export const cardsGame = (state) => state.game.cards;
export const flipCount = (state) => state.game.flipCount;
export const timeGame = (state) => state.game.timeGame;

export default gameSlice.reducer;
