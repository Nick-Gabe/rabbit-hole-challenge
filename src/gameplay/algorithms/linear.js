import { checkBorder } from "../../utils/checkBorder"

export const linearAlgorithm = (curPosition, state) => {
  const isOnBorder = checkBorder(curPosition, state)
  if (isOnBorder === -1) curPosition = 0
  else curPosition++
  return curPosition;
}