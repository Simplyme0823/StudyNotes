/** @format */

// 提取对象特定类型的属性

type filterTypes<T, U> = {
  [key in keyof T]: T[key] extends U ? key : never;
};

type filterNever<T, U> = filterTypes<T, U>[keyof T];

// 提取一个或多个对象属性
type pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

type SubType<T, U> = pick<T, filterNever<T, U>>;

type ArgAsReturn<T> = {
  // 更改了返回值类型
  [K in keyof T]: T[K] extends (arg: infer U) => any ? (arg: U) => U : never;
};

interface Logger {
  a: "a";
  test: (input: string) => number;
}

type Translate = ArgAsReturn<SubType<Logger, Function>>;
