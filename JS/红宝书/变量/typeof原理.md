<!-- @format -->

在 javascript 的最初版本中，使用的 32 位系统，为了性能考虑使用低位存储了变量的类型信息：

1.  000：对象
    1：整数
    010：浮点数
    100：字符串
    110：布尔

2.  有 2 个值比较特殊：

undefined：用 - （−2^30）表示。
null：对应机器码的 NULL 指针，一般是全零。

3. typeof null 为 object
   这样一来，null 就出了一个 bug。根据 type tags 信息，低位是 000，因此 null 被判断成了一个对象。这就是为什么 typeof null 的返回值是 object。
   https://www.zhihu.com/search?type=content&q=%E4%B8%80%E5%B9%B4%E5%8D%8A%E5%89%8D%E7%AB%AF%20%E8%B7%B3%E6%A7%BD
