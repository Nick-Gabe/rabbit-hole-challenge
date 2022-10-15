let twoSteps = false;

export const alternateAlgorithm = (curPosition, state) => {
  if (state.rounds === 0) twoSteps = false

  if (state.position >= state.boardSize - 1) {
    twoSteps = !twoSteps
    return 0;
  }

  return curPosition + (twoSteps ? 2 : 1);
};