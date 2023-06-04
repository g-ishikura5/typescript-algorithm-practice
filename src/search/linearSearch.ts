export function search(arr: number[], x: number) {
  let i = 0;
  let count = arr.length;
  while (i < count) {
    if (arr[i] == x) {
      return i;
    }
    i++;
  }
  return null;
}
