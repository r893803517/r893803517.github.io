### 意义及使用

使用back forwar和go方法来完成在用户历史记录中向后和向前的跳转

> 出于安全和隐私方面的考虑，浏览器不支持通过接口获取历史浏览地址记录

### 跳转到history中指定的一个点

window.history.go(-1) 向后跳转
window.history.go(2) 向前跳转2次


### 添加和修改历史记录中的条目

html5引入了history.pushState和history.changeState方法用于添加和修改历史记录条目（在不刷新页面的情况下）
