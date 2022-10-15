let doubleChecked = false;

export const doubleCheck = (curPosition, state) => {
  if (!doubleChecked) {
    doubleChecked = true
    return curPosition
  } else {
    doubleChecked = false
    return curPosition + 1
  }
}