# document

document 对象是 HTML 文档的根节点

document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。

document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问。

## 常用属性

### body

获取body元素

### title

### URL

### domain

可以赋值，但是有限制，原本域名是一级域名，不能设置为当二级域名

### referrer

连接到当前页面的那个页面的URL

### activeElement

当前聚焦的属性

## 特殊集合

### document.anchors 

所有带name特性的\<a>元素

### applets 

### forms

### images

### links 

所有带href特性的\<a>元素

## 常用方法

### createElement

### createTextNode

### getElementById

### getElementsByClassName

### getElementsByTagName

### getElementsByTagNameNs

### getElementsByName

### getSelection 获取当前选择的内容

