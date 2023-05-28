export function sort(items: number[]): number[] {
  let result: number[] = [];
  if (items.length === 1) return items;

  const lLeft = Math.floor(items.length / 2);
  const lRight = items.length - lLeft;
  const left = sort(items.slice(0, lLeft));
  const right = sort(items.slice(lLeft, items.length));

  let l = 0;
  let r = 0;

  while (l < lLeft && r < lRight) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }

  while (l < lLeft) {
    result.push(left[l++]);
  }

  while (r < lRight) {
    result.push(right[r++]);
  }

  return result;
}
