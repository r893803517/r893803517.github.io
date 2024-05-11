# 思路

promise用法，三种状态，状态改变不可逆

promise最关键的then方法实现

过程中的异常处理



1. 如何创建一个promise，最常用new，那么就先实现promise的构造函数

2. 构造函数接收一个回调函数，入参判断

3. 回调函数传入resolve和reject方法，实现resolve，reject方法

4. 构造函数返回promise，将非promise返回值用promise包起来

5. promise可以通过.then实现回调，实现then方法

6. then方法接收onfullfiled和onreject两个回调函数





## 具体实现



```js
class MyPromise {
    constructor() {
        
    }
}
```


