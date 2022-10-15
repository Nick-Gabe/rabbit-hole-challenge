export const checkBorder = (curPosition, state) => {
  if (curPosition >= state.boardSize - 1) return -1;
  else if (curPosition === 0) return 1;
  else return null;
};