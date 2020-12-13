<!-- @format -->

## 路由传参

### params

1. name + params
2. path(path + params 组合 Parmas 会被忽略的，可以使用 query)
3. pushState/replaceState 方法可以传入一个 state，但是这个方法以及被使用了，不能传递 state

### query

显示在浏览器地址栏(安全问题)

## 路由懒加载

异步组件解析.md

## 完整的导航解析流程

1. 导航被触发
2. 失活的组件调用 beforeRouteLeave
3. 调用全局的 beforeEach
4. 重用的组件内调用 beforeRouteUpdate
5. 路由配置里调用 beforeEnter
6. 解析异步路由组件
7. 被激活的组件里调用 beforeRouteEnter
8. 调用全局的 beforeResolve
9. 导航被确认
10. 调用全局的 afterEach
11. 触发 DOM 更新
12. beforeRouterEnter 守卫中传给 next 回调函数 vm 实例

## 嵌套路由实现原理

路由构建的时候父子路由存在父子关系，当一个路由匹配到之后，会有一个 matched 属性，属性的值为匹配到的路径上的所有路由对象，然后根据深度值确定当前渲染的是哪一个层级的路由

## 为什么要用 depth

情景：当前路由 a/b/c，点击跳转到 d/e/f 时
整个页面要重新渲染，但是路径匹配的时候只能匹配到 d/e/f 对应的子路由，而其父路由页面的值取不到。因此根据路由的父子关系来获取路径上的所有路由组件。而 depth 就是对应路由在 matched 数组内的位置
