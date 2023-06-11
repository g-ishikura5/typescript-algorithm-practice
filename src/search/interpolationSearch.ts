function search(arr: number[], x: number) {
  let low = 0;
  let high = arr.length - 1;
  while (arr[low] < x && x < arr[high]) {
    let mid = low + ((x - arr[low]) * (high - low)) / (arr[high] - arr[low]);
    if (arr[mid] < x) {
      low = mid + 1;
    } else if (arr[mid] > x) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  if (arr[low] === x) {
    return low;
  } else if (arr[high] === x) {
    return high;
  }

  return null;
}
