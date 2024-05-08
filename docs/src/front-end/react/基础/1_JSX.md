# 什么是JSX

一个JavaScript的语法扩展，可以很好地描述UI应该呈现出它应有交互的本质形式。

JSX可以生成React元素

## 为什么使用JSX

React认为渲染逻辑本质上与其他UI逻辑内在耦合，比如在UI中需要绑定处理事件、在某些时刻状态发生改变时需要通知到UI，以及需要在UI中展示准备好的数据。

## JSX中嵌入表达式

在大括号内放置任何有效的JavaScript表达式

## JSX也是一个表达式

可以将JSX赋值给变量、把JSX当做参数传入、以及在函数中返回JSX

## JSX中指定属性

可以使用引号来将属性值指定为字符串字面量

也可以使用大括号，来在属性值中插入一个JavaScript表达式，在属性中嵌入JavaScript表达式时，不要再大括号外面加上引号

> 因为JSX语法上更接近JavaScript而不是HTML，所以React DOM使用camelCase（小驼峰命名）来定义属性的名称，而不是使用HTML属性名称的命名约定

> 例如JSX里的class变成了className，而tabindex变成tabIndex

## 使用JSX指定子元素

像XML语法一样如果一个标签没有内容，可以使用 /> 来闭合标签

## JSX防止注入攻击

可以安全地在JSX当中插入用户输入内容

ReactDom在渲染所有输入内容之前，默认会进行转义

## JSX表示对象

Babel会把JSX转译成一个名为React.createElement()函数调用

React.creatElement会预先执行一些检查,以帮助你编写无错代码，但它实际上创建了一个React元素，用于抽象和描述、构建DOM



