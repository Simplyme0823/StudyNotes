/** @format */

var x = 1;

function func(
  x,
  y = function () {
    console.log(x);
    x = 2;
  },
) {
  var x = 3;
  x = 3;
  y();
  console.log(x);
}

func(5);

console.log(x);
