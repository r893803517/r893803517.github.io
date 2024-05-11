XMLHttpRequest 简称 XHR

1999年加入IE5

基于AJAX架构（异步JS和XML）

用于与服务器交互 可以获取任何类型的数据，甚至支持http以外的协议（包括file:// 和 FTP）

使用方法

GET请求

```
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.responseType = 'JSON'
xhr.onload = function() {
    console.log(xhr.response)
}
xhr.onerror = function() {
    console.log('error')
}
xhr.send
```

XHR属性

- XHR.readyState
  
  状态 0，1，2，3，4
    有5个状态，且转态转化是不可逆的
  
    0: 请求未初始化，还没有调用open
    1：请求已经建立，还没有调用send
    2：请求已经发送
    3：请求正在处理中，通常响应中已有部分数据可用了，没有全部完成
    4：响应完成

- XHR.onreadystatechange
  
    状态变化的回调

- XHR.response
  
    响应实体，类型取决于responseType

- XHR.responseType
  
    定义响应类型的枚举值， 'arraybuffer' blob document json text(默认)

- XHR.status
  
    请求的响应状态

- XHR.timeout

- XHR.ontimeout 

- XHR.upload 
  
    只读，代表上传进度

XHR 方法

- open

- abort

- send

- setRequestHeader

- setAllResponseHeaders
  
    获取所有CRLF（回车）分隔的响应头，如没有收到响应则返回null。

- getResponseHeaer(key)
  
    获取指定响应头的字符串，如果不存在该响应头或者响应未收到，则返回null

XHR事件

- abort 
- error
- load
- loadstart
- loadend
- progress
- timeout

XHR的不足

从使用方法上看http的request和response以及事件监听都在同一个xhr对象上，代码组织缺少语义化且可能造成回调地狱，手写一个xhr还是比较麻烦的
