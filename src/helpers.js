/** Given array, return random item from array */
function choice(items) {
  const idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

/** Given items array and item, find first item and remove, otherwise return
 * undefined
*/
function remove(items, item) {
  const itemIndex = items.indexOf(item);
  if (itemIndex === -1) return undefined;

  items.splice(itemIndex, 1);
  return items;
}

export { choice, remove };