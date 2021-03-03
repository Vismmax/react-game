const keySettings = "settings";
const keyGameData = "game_data";

export const setSettings = (settings) => {
  const data = JSON.stringify(settings);
  window.localStorage.setItem(keySettings, data);
};

export const getSettings = () => {
  const data = window.localStorage.getItem(keySettings);
  return JSON.parse(data);
};

export const clearSettings = () => {
  window.localStorage.removeItem(keySettings);
};

export const setGameData = (gameData) => {
  const data = JSON.stringify(gameData);
  window.localStorage.setItem(keyGameData, data);
};

export const getGameData = () => {
  const data = window.localStorage.getItem(keyGameData);
  return JSON.parse(data);
};

export const clearGameData = () => {
  window.localStorage.removeItem(keyGameData);
};
