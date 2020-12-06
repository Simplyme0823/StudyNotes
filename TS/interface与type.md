<!-- @format -->

# 扩展方式不同

## interface 接口

1. 同名接口会自动合并

```typescript
interface User {
  id: number;
}
interface User {
  name: string;
}

// User接口{
//     id:number
//         name:string
// }
```

2. 接口可以继承接口，接口可以继承类；类不能继承接口，只能实现(implement)接口

3. 接口只对类的实例属性进行检查

4. interface 内部如果使用 new 关键字，说明该函数必须作为构造函数调用

5. 有点像抽象类，但是抽象类有定义与实现，interface 只有定义

https://www.tslang.cn/docs/handbook/interfaces.html

## type 类型别名

1. 类型别名可以继承，但是语法不一样，使用&符号

```typescript
type PartialPointX = { x: number };
type Point = PartialPointX & { y: number };
```

2. typeof 获取实例的类型并进行赋值

```typescript
let div = document.createElement("div");
type test = typeof div;
```

https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types

## implement

1. 实现接口

2. 一个类可以实现多个接口
