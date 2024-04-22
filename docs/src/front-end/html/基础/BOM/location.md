# Location

## Location对象的属性

1. location.href获取或者设置整个URL
2. location.host返回主机（域名）
3. location.port 获取端口，没有指定端口返回空字符串
4. location.pathname 返回路径
5. location.search 返回参数
6. location.hash 返回锚点内容

## Location对象的方法

1. assign()载入一个新的文档, 会记录在history对象中可以通过后退跳转回原来的文档
2. reload()重新载入当前文档
3. replace()用新的文档替换当前文档, 会在history记录中替换当前的文档