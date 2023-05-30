function sort(arr: number[]) {
  let items = new Array(arr.length);

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  let counts = Array(max - min + 1).fill(0);

  for (let x of arr) {
    counts[x - min]++;
  }

  let total = 0;
  for (let i = min; i <= max; i++) {
    let oldCount = counts[i - min];
    counts[i - min] = total;
    total += oldCount;
  }

  for (let x of arr) {
    items[counts[x - min]] = x;
  }
  return items;
}
