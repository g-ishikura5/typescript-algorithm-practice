export function sort(arr: number[]) {
  let items = arr.slice();
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < items[i]) {
        let tmp = items[j];
        items[j] = items[i];
        items[i] = tmp;
      }
    }
  }
  return items;
}
