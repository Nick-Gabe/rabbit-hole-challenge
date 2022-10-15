import { checkBorder } from "../../utils/checkBorder"

export const reverseLinearAlgorithm = (curPosition, state) => {
  const isOnBorder = checkBorder(curPosition, state)
  if (isOnBorder === 1) curPosition = state.boardSize - 1
  else curPosition--
  return curPosition;
}