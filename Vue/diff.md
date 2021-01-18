<!-- @format -->

## key 的设置

1. 使用 index
   render 函数重新执行的时候，不同节点的 key 一样，不能正确更新节点
2. 使用 math.random()
   render 函数重新执行的时候，同一个节点更新前后的 key 不一样，不能达到相同节点复用的效果

https://segmentfault.com/a/1190000019961419
