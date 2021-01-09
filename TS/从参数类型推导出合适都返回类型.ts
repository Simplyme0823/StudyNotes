/** @format */

// https://www.typescriptlang.org/docs/handbook/intro.html

//  类型声明1 默认情况下，不传入fn
function map(): <V>(arr: V[]) => V[];
// 类型声明2
function map<V, R>(fn: (value: V) => R): (arr: V[]) => R[];

// 实现
function map(fn = (x: any) => x) {
  return (arr: any[]) => {
    const res: any[] = [];
    for (const item of arr) {
      res.push(fn(item));
    }
    return res;
  };
}

const emptyMap = map();

const mapNumberToString = map((v: number) => "str");
const result3 = mapNumberToString([1, 2, 3]);
console.log(result3);
