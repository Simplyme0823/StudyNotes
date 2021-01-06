<!-- @format -->

## 插件安装过程

1. Vue.mixin 全局混入对象，其值为{beforeCreate: vuexInit}
2. vuexInit 作用：注入 store 实例，根组件注入后，其所有子组件会通过父子关系直接获取根组件的 store 实例

## 插件初始化过程

1. new ModuleCollection -> newModule 递归遍历所有的子模块，建立父子关系

2. installModule，安装模块
   创建模块的上下文 local 对象，主要是为 dispatch/commit/getters 添加命名空间，在模块内部调用的时候用户就不用书写命名空间；构建具有层级关系的 state 对象
   2.1 local 有 dispatch/commit 属性，这两个函数的第一个参数为 mutation/action 名称，如果有命名空间会自动带上命名空间
   2.2 local 对象有 getters 属性，通过从 store.getters 与 gettersProxy 获取带命名空间的 getters，免去用户在模块内部书写命名空间
   2.3 local 对象有 state 属性，state 是具有层级关系的

   注：

   1. store.getters 含所有模块的 getters(没有父子关系，带有命名空间/不带命名空间的值)
   2. store.makeLocalGettersCache 是一个缓存对象，其 key 的值为模块的命名空间(没有父子关系)，其值为 getterProxy。getterProxy 的 key 为各个模块内部不带有命名空间的 getters 的 key，值会从 store.getters 内取出。
      local.getters 就是返回 store.makeLocalGettersCache[key]

3. 注册 action getter mutation

   1. registerAction, warp 用户的 action 函数，传入 local 的 dispatch/commit/getters/state，store 的 getters/state，执行结果用 promise 返回，达到异步效果
   2. registerMutation，warp 用户的 mutation 函数，传入 local.state
   3. registerGetter，wrap 用户的 getter 函数，传入 local 的 state/getters，store 的 state/getters
      注： 以上注册的时候都会添加命名空间(有的话)

4. resetStoreVM
   store.\_vm = new Vue()
   data 为 state, computed 为 getters，加入响应式系统后，就可以进行依赖收集与派发更新

问：如何区分是直接修改 state 还是通过 commit 修改 state。
答：Vuex 内部有一个\_committing 变量，通过 commit 修改前后会修改此值，所有可以通过 watch state 方法，当 state 变化的时候，检测\_committing 值是否变化，变化了就是通过 commit 改变的，否则就是直接改变

问：调试时的“时空穿梭”功能是如何实现的？
问：devtoolPlugin 中提供了此功能。因为 dev 模式下所有的 state change 都会被记录下来，’时空穿梭’ 功能其实就是将当前的 state 替换为记录中某个时刻的 state 状态，利用 store.replaceState(targetState) 方法将执行 this.\_vm.state = state 实现。

问：map 函数的作用
map 函数有两个参数，第一个为 namespace，第二个为对象，第一个值不传的时候赋值为空字符串
然后根据对象自动寻找 state/getters 的值，或者进行一些逻辑处理(对象的值为 function 时)
本质上是返回一个对象，所以要使用展开运算符，

mapState 的用法：传入一个 Object/Array，会被 normalize 处理。返回 state.val 或者执行 val 函数并返回。
mapMutation/mapAction 的用法：传入一个 Object，通过命名空间找到模块，然后使用 module.text 实现 commit/dispatch 方法，如果 Object 的 val 是一个函数会执行此函数
mapGetters 的用法： 传入一个 Object，通过命名空间找到对应的 getter，然后返回一个对象

## 为什么要区分 mutation 与 action

中文翻译可能有些偏差（不是我翻的）。区分 actions 和 mutations 并不是为了解决竞态问题，而是为了能用 devtools 追踪状态变化。事实上在 vuex 里面 actions 只是一个架构性的概念，并不是必须的，说到底只是一个函数，你在里面想干嘛都可以，只要最后触发 mutation 就行。异步竞态怎么处理那是用户自己的事情。vuex 真正限制你的只有 mutation 必须是同步的这一点（在 redux 里面就好像 reducer 必须同步返回下一个状态一样）。同步的意义在于这样每一个 mutation 执行完成后都可以对应到一个新的状态（和 reducer 一样），这样 devtools 就可以打个 snapshot 存下来，然后就可以随便 time-travel 了。如果你开着 devtool 调用一个异步的 action，你可以清楚地看到它所调用的 mutation 是何时被记录下来的，并且可以立刻查看它们对应的状态。其实我有个点子一直没时间做，那就是把记录下来的 mutations 做成类似 rx-marble 那样的时间线图，对于理解应用的异步状态变化很有帮助。

作者：尤雨溪
链接：https://www.zhihu.com/question/48759748/answer/112823337
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
