/** @format */

function quickSort(arr, start, end) {
  if (start >= end) return;
  const index = partition(arr, start, end);
  partition(arr, start, index - 1);
  partition(arr, index + 1, end);
}
function partition(arr, start, end) {
  if (!arr) return;
  let left = start;
  let right = end;
  let target = arr[start];
  while (left != right) {
    while (left < right && target < arr[right]) {
      right--;
    }
    while (left < right && target >= arr[left]) {
      left++;
    }

    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }
  arr[start] = arr[left];
  arr[left] = target;
  return left;
}

let a = [1, 5, 0, 6, 4];

quickSort(a, 0, 4);
console.log(a);
