### 渲染多个组件

可以通过 {} 在JSX内构建一个元素集合

```
const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map(number => <li>{number}</li>)

// 可以将整个listItems插入到<ul>元素中
<ul>{ listItems }</ul>
```

### 基础列表组件

列表组件输出一个元素列表

### key

元素的key只有放在就近的数组上下文中才有意义

一个好的经验法则是: 在map方法中的元素设置key属性

#### key值必须唯一


