# window对象

全局变量不能通过delete操作符删除，但是定义在window对象上的属性可以删除

``` js
const age = 29
window.color = 'red'

delete age // return false
delete window.color // return true

```

## 部分常用的属性

innerwidth/innerheight（只读），窗口文档显示区域宽度/高度；
outerwidth/outerheight（只读），浏览器的宽度和高度；
pageXoffset/pageYoffset（读写），设置或返回当前页面相对于显示区左上角的X/Y位置；
parent/top（只读），返回父窗口/顶层祖先窗口的window对象；
screenTop/screenLeft（只读），浏览器窗口相对于屏幕的左上角的坐标；


## 部分常用方法

alert/confirm/prompt，原生弹窗，阻塞性；
setInterval/clearInterval，周期性调用/取消；
setTimeout/clearTimeout，延迟调用/取消；
close/open，当前浏览器窗口关闭/打开；
blur/focus，键盘焦点移出/移入窗口；
print，打印窗口内容；
resizeBy/resizeTo，按照像素差值/像素值调整窗口的大小；
scrollBy/scrollTo，按照像素差值/像素值滚动内容；


## 挂载在window对象上的其他全局对象

document
navigator
location
