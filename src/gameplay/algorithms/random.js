export const randomAlgorithm = (curPosition, state) => {
  return Math.floor(Math.random() * state.boardSize);
}