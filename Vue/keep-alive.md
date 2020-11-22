<!-- @format -->

# 原理

1. keep-alive 组件内部具有 cache 缓存对象，能够缓存符合条件的 vnode
2. 缓存条件：include/exclude/max

# 表现

actived
deactived

## 流程

1. 获取匿名插槽的第一个 vnode
2. 获取 vnode 的 key，没有的话就给定义一个
3. cache 对象内部有缓存就返回对应的 componentInstance，并更新 keys 数组
4. cache 对象内部无缓存就存储 componentInstance，并更新 keys
5. 标记 vnode.data.keepAlive 为 true
6. 返回 vnode

## vnode.data.keepAlive 作用

1. 搭配 VueRouter 使用
   router-view 内部虽然也有 cache 对象，但是 router-view 内部的 cache 对象是有条件地存储；当被剔除 router-view 内部 cache 缓存对象的组件二次渲染的时候，由于之前被 keep-alive 缓存了，所以 vnode 上有 componentInstance 属性，因此直接返回该属性值即可。
2. 生命周期更换
   添加了 actived 与 deactived 生命周期。

# 缓存算法：LRU

Vue 中使用 keys 数组缓存组件名,cache 缓存组件。
每次读取缓存就把 key 放到数组第一个位；超出 max 就销毁组件，并从数组中剔除

# 缓存配置方案

1. 利用路由元信息，可以做成配置表
   <keep-alive>
   <router-view v-if="$route.meta.keepAlive"></router-view>
   </keep-alive>
   <router-view v-if="!$route.meta.keepAlive"></router-view>
2. include/exclude
