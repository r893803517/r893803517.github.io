# Cookie 是什么

1. Cookie 是浏览器访问服务器后，服务器传给浏览器的一段数据。
2. 浏览器需要保存这段数据，不得轻易删除。
3. 此后每次浏览器访问该服务器，都必须带上这段数据。
4. Cookie 就是这么简单，这就是 Web 开发里 Cookie 的含义。

Cookie是保存在浏览器document对象下的一段有规则字符串。由一系列键值对组成。为了解决http请求无状态的问题，会在每一次http请求时在请求头自动添加Cookie。这样服务器就可以通过读取Cookie来判断客户端的状态了。

## 优点

- `BOM`丰富的api使其具有高扩展性
- 存储在浏览器端，减少了服务器存储的压力
- 遵循同源策略，可设置域名和路径对数据进行隔离
- 可通过SSL传输，降低了请求被破解的可能性
- 可设置Cookie失效时间，防止Cookie永久保留在浏览器端引起的资源浪费和数据过期

## 缺点

- 每次请求都会携带Cookie，对带宽资源有一定浪费
- 虽然传输过程安全，但是可通过浏览器端轻易修改数据，敏感数据不建议使用Cookie或加密后使用
- Cookie只能存储字符串类型数据，对媒体数据无能为力
- 不同浏览器对Cookie的大小限制不同，通常在4KB，因此Cookie只能存储简短的内容
- 用户可手动关闭Cookie，这样使得Cookie不是稳定的存储方式

## 浏览器中的cookie

### 请求头中的cookie

在HTTP请求头中，Cookie头的标准格式如下：

``` http
Cookie: name1=value1; name2=value2; name3=value3
```

#### ​语法结构​​

由多个name=value键值对组成
不同键值对之间用分号和空格(;)分隔

#### ​示例
​​
``` http
Cookie: sessionId=abc123; userId=42; theme=dark
```

#### ​重要特性​​

名称和值通常需要URL编码（特殊字符需转义）
每个cookie对最大通常为4KB
一个域名下的所有cookie总大小通常限制在4KB左右（浏览器差异）

#### ​服务端设置​

服务端通过Set-Cookie响应头设置cookie：

``` http
Set-Cookie: name=value; Expires=Wed, 21 Oct 2025 07:28:00 GMT; Secure; HttpOnly
```

​​安全相关属性​​（这些属性只在Set-Cookie中使用，不会出现在请求头的Cookie中）：

- Secure- 仅HTTPS传输

- HttpOnly- 禁止JavaScript访问

- SameSite- 控制跨站发送

### document.cookie

浏览器window并没有封装对于cookie的操作，只有唯一的一个document.cookie可以查看（不能查看http-only属性的cookie）  通过document.cookie我们可以看到cookie

### cookie的属性

1. Name：cookie的名字
2. Value：cookie的值
3. Domain：cookie所在的域
4. Path：所在的路径
5. Expires/Max-age：cookie的有效期，默认为0，只在session期有效
6. Size：cookie的大小
7. HTTP：http-only属性，是否只读，默认false
8. Secure：是否只在https协议中传输，默认false  这里就不展开细致讲解属性了，具体请百度

### cookie操作封装

浏览器只提供了`doucment.cookie`属性，如果需要操作，我们需要手动封装操作方法

#### 添加cookie 值为中文需要转码 重复名称会覆盖

```javascript
function setCookie(name, val, day) {
  let expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + day);
  document.cookie = `${name}=${val};expires=${expireDate.toGMTString()}`;
}
```

通常我们只需要名称、值和生命期，更多的属性设置修改按照`prop=val;`的形式修改最后一条代码即可。

#### 读取cookie 返回一个包含cookie键值对的数组

```javascript
function getCookies() {
  let cookies = [];
  if(document.cookie) {
    let cookieArr = document.cookie.split(';');
    for (let i = 0;i<cookieArr.length;i++) {
      let keyArr = cookieArr[i].split("=");
      let name = keyArr[0];
      let val = keyArr[1];
      cookies.push({name: val});
    }
  } else {
    return false;
  }
  return cookies;
}
```

#### 删除cookie 把失效日期设置为过期

```javascript
function removeCookie(name) {
  let cookies = getCookies();
  if (cookies) {
    for(let cookie of cookies) {
     if(cookie.name === name) {
        setCookie(name, null, -99);
        break;
      }
    }
  } else {
    return false;
  }
}
```

#### 封装为一个单例

通常我们不会允许这些方法称为全局对象，因此需要封装为一个单例CookieManager

```javascript
let CookieManager = {
  setCookie,
  getCookies,
  removeCookie
};
```