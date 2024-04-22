# Navigator

## Navigator对象属性

appCodeName 属性是一个只读字符串，声明了浏览器的代码名。

appName 属性可返回浏览器的名称。

appVersion 属性可返回浏览器的平台和版本信息。该属性是一个只读的字符串。

cookieEnabled 属性可返回一个布尔值，如果浏览器启用了 cookie，该属性值为 true。如果禁用了 cookie，则值为 false。

platform 属性是一个只读的字符串，声明了运行浏览器的操作系统和（或）硬件平台。

userAgent 属性是一个只读的字符串，声明了浏览器用于 HTTP 请求的用户代理头的值。

``` js
console.log("浏览器代号: " + navigator.appCodeName);
// 浏览器代号: Mozilla
console.log("浏览器名称: " + navigator.appName);
// 浏览器名称: Netscape
console.log("版本信息: " + navigator.appVersion);  
// 版本信息: 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36
console.log("是否启用 Cookie: " + navigator.cookieEnabled);
// 是否启用 Cookie: true
console.log("硬件平台: " + navigator.platform);
// 硬件平台: Win32
console.log("用户代理: " + navigator.userAgent);
// 用户代理: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36
```

## Navigator对象方法

1. javaEnabled() 方法可返回一个布尔值，该值指示浏览器是否支持并启用了 Java。如果是，则返回 true，否则返回 false。

2. taintEnabled() 方法可返回一个布尔值，该值声明了当前浏览器是否启用了数据污点 (data tainting)。
