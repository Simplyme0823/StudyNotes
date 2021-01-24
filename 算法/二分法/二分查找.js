/** @format */

function find(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else if (target === arr[mid]) {
      while (arr[mid] === arr[mid - 1]) {
        mid--;
      }
      return mid;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

const res = find([1, 2, 3, 4, 4, 5, 7, 7, 7, 7, 7, 7, 7, 8], 4);
console.log(res);
