### 组件&Props

组件允许你将UI拆分为独立可复用的代码片段

从概念上组件类似JavaScript函数, 它接受任意的入参(即props), 并返回用于描述页面展示内容的React元素

### 函数组件与class组件

- 编写JavaScript函数
- 使用ES6的class来定义组件

### 渲染组件

React元素可以使用户自定义的组件

当React元素为用户自定义组件时, 它会将JSX所接收的属性(attribute)以及子组件(children)转换为单个对象传递给组件, 这个对象被称为 props

~~~
function Welcome(props) {
    return <h1>hello, {props.name}</h1>
}

const elemnt = <Welcome name="Sara" />

ReactDOM.reander(element, Document.getElementById('root'))
~~~

> 组件名必须以大写字母开头

> React会将以小写字母开头的组件视为原生DOM标签例如\<div />代表HTML的div标签, 而\<Welcome />则代表一个组件, 并且需要在作用域内使用Welcome.

### 组合组件

组件可以在其输出中引用其他组件

### 提取组件

就是多层元素嵌套堆叠, 需要拆分提取成高内聚、低耦合的多个组件

建议以自身的角度命名props，而不是依赖于调用组件的上下文命名

### Props的只读性

组件无论是使用函数声明还是通过class声明，都不能修改自身的props。

所有React组件都必须像纯函数一样保护它们的props不被更改

