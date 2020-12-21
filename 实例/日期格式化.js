/** @format */

console.log(new Date("2020-12-01"));
function dateFormat(date, format) {
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  y = y.toString().padStart(2, "0");
  m = m.toString().padStart(2, "0");
  d = d.toString().padStart(2, "0");
  return format.replace("yyyy", m).replace("MM", m).replace("dd", d);
}

const res = dateFormat(new Date("2020-12-01"), "yyyy/MM/dd");
console.log(res);
