/** @format */

// "[abc[bcd[def]]]"-- >
//   { value: "abc", children: { value: "bcd", children: { value: "def" } } };

function generate() {
  const str = "[abc[bcd[def]]]";
  let arr = str.split(/[\[\]]/g).filter(Boolean);
  return loop(arr, 0, {});
  function loop(arr, index, res) {
    if (index >= arr.length) return;
    if (index === arr.length - 1) {
      return { value: arr[index] };
    }
    res.children = loop(arr, index + 1, {});
    res.value = arr[index];
    return res;
  }
}

const res = generate();
console.log(res);
