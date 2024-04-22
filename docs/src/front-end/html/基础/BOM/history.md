## History 对象属性

length 返回浏览器历史列表中的URL数量

## History 对象方法

1. back()    加载history列表中的前一个URL

2. forward() 加载history列表中的下一个URL

3. go()      加载history列表中的某个具体页面 history.go(number|URL) 例:

``` js
window.history.go(-1)  // 例子会加载历史列表中的前一个页面 go(0)刷新当前页面
```