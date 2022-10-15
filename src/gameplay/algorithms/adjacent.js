import { checkBorder } from "../../utils/checkBorder";

export const adjacentAlgorithm = (curPosition, state) => {
  const isBorder = checkBorder(curPosition, state);
  if (isBorder !== null) return curPosition + isBorder;

  const result = Math.random() > 0.5;
  if (result === 0.5) return adjacentAlgorithm(curPosition);
  return curPosition + (result ? 1 : -1);
};