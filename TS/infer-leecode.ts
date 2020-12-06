/** @format */
interface Action<T> {
  payload?: T;
  type: string;
}
// asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>

// syncMethod<T, U>(action: Action<T>): Action<U>

class EffectModule {
  count = 1;
  message = "hello!";

  delay(input: Promise<number>) {
    return input.then(i => ({
      payload: `hello ${i}!`,
      type: "delay",
    }));
  }

  setMessage(action: Action<Date>) {
    return {
      payload: action.payload!.getMilliseconds(),
      type: "set-message",
    };
  }
}

type Connected = {
  delay(input: number): Action<string>;
  setMessage(action: Date): Action<number>;
};

const effectModule = new EffectModule();
const connected: Connected = connect(effectModule);

type findMethod<T, U> = {
  [key in keyof T]: T[key] extends U ? key : never;
};

type filterNevers<T, U> = findMethod<T, U>[keyof T];

type orginMehtod<T, U> = Pick<T, filterNevers<T, U>>;

type transformSingleMethod<T> = T extends (
  input: Promise<infer R>,
) => Promise<Action<infer I>>
  ? (input: R) => Action<I>
  : T extends (action: Action<infer R>) => Action<infer I>
  ? (action: R) => Action<I>
  : never;

type test = orginMehtod<EffectModule, Function>;

type transformAllMethods<T> = {
  // [K in keyof T]: transformSingleMethod<K>; 错误写法
  [K in keyof T]: transformSingleMethod<T[K]>;
};

type Connect = transformAllMethods<orginMehtod<EffectModule, Function>>;

function connect(arg: EffectModule) {
  // 提取所有函数
  let res: Connect;
  return res;
}

// https://juejin.cn/post/6844904147167215624
