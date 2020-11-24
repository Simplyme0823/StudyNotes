/** @format */

// versions是一个项目的版本号列表，因多人维护，不规则 var versions=['1.45.0','1.5','6','3.3.3.3.3.3.3'] 要求从小到大排序，注意'1.45'比'1.5'大 。var sorted=['1.5','1.45.0','3.3.3.3.3.3','6']

const versions = ["1.45.0", "1.5.5", "1.5", "6", "3.3.3.3.3.3.3"];
function rule(a, b) {
  const aArr = a.split(".");
  const bArr = b.split(".");
  const min = Math.min(aArr.length, bArr.length);
  let index = 0;
  while (index <= min) {
    if (aArr[index] === bArr[index]) {
      index++;
    } else if (!aArr[index] || !aArr[index]) {
      return aArr.length - bArr.length;
    } else {
      return aArr[index] - bArr[index];
    }
  }
}

const res = versions.sort(rule);
console.log(res);
