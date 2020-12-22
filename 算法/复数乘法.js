/** @format */
// a + bi
// c + di
function multiplicate(num1, num2) {
  const [a, b] = num1.split("+");
  const [c, d] = num2.split("+");
  if (b.includes("i") && d.includes("i")) {
    const int =
      Number(a) * Number(c) - Number(b.slice(0, -1)) * Number(d.slice(0, -1));
    const fushu =
      Number(a) * Number(d.slice(0, -1)) +
      Number(b.slice(0, -1)) * Number(c) +
      "i";
    return `${int}+${fushu}`;
  } else if (b.includes("i") && !d.includes("i")) {
    const e = Number(c) + Number(d);
    const int = Number(a) * e;
    const fushu = Number(b.slice(0, -1)) * e + "i";
    return `${int}+${fushu}`;
  } else if (!b.includes("i") && d.includes("i")) {
    const e = Number(a) + Number(b);
    const int = Number(c) * e;
    const fushu = Number(d.slice(0, -1)) * e + "i";
    return `${int}+${fushu}`;
  }
}

const res = multiplicate("1+2i", "3+4i");
console.log(res);
