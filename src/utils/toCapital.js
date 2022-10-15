export function toCapital(string) {
  const capitals = string.replace(/^[a-z]|(?<=\.)[ ]*[a-z]/gmi, (e) => e.toUpperCase())
  return capitals
}