export default function checkIfFavorited(item) {
  const objKeys = [...Object.keys(localStorage)];
  const itemId = item.id.toString();
  const isFavorited = objKeys.includes(itemId);
  return isFavorited;
}
