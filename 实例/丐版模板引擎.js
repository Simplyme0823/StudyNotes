/** @format */

const year = "2017";
const month = "09";
const day = "21";
const str = render("${year}−${month}-${day}")({ year, month, day });
console.log(str); //输出2017-09-21

function render(template) {
  return function (data) {
    return template.replace(/\$\{([a-zA-Z]+?)\}/gim, function ($$, $i) {
      // $$ 匹配到的字符
      // $i 子表达式捕获的字符
      //   return data[$$.match(/[a-zA-Z]+/gim)];
      return data[$i];
    });
  };
}
