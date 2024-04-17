1 区别
1.1 encodeURI()
encodeURI()通常用于转码整个 URL，不会对URL 元字符以及语义字符进行转码，URL元字符：

URL 元字符：分号（;），逗号（,），斜杠（/），问号（?），冒号（:），at（@），&，等号（=），加号（+），美元符号（$），井号（#）

语义字符：a-z，A-Z，0-9，连词号（-），下划线（_），点（.），感叹号（!），波浪线（~），星号（*），单引号（'），圆括号（()）

1.2 encodeURIComponent()
encodeURIComponent()通常只用于转码URL组成部分，如URL中?后的一串；会转码除了语义字符之外的所有字符，即元字符也会被转码
注：若整个链接被encodeURIComponent()转码，则该链接无法被浏览器访问，需要解码之后才可以正常访问。

2 使用场景
  对于无特殊参数的链接，都可以使用encodeURI()进行转码，那什么特殊情况需要用到encodeURIComponent()呢？通常是链接带着一些特殊参数的时候，就比如以下链接：

```
https://www.baidu.com/s?returnURL=HTTP://WWW.TEST.COM/
```

链接内包含一个回调地址，回调地址是另外一个URL，此时我们就需要使用encodeURIComponent()对回调地址进行转码，这样一来，URL中就不会出现多个http://，多个&这样的特殊字符；方便对回调地址进行处理；以上链接处理如下：


