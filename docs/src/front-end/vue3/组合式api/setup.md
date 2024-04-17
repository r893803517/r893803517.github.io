#### 参数

setup函数接收两个参数 1. props  2. context

#### Props

`setup` 函数中的 `props` 是响应式的，当传入新的 prop 时，它将被更新

> 因为 `props` 是响应式的，你**不能使用 ES6 解构**，它会消除 prop 的响应性。

如果需要解构 prop，可以在 `setup` 函数中使用 [`toRefs`](https://v3.cn.vuejs.org/guide/reactivity-fundamentals.html#响应式状态解构) 函数来完成此操作：

```js
import { toRefs } from 'vue'

setup(props) {
    const { title } = toRefs(props)
    console.log(title.value)
}
```

如果 `title` 是可选的 prop，则传入的 `props` 中可能没有 `title` 。在这种情况下，`toRefs` 将不会为 `title` 创建一个 ref 。你需要使用 `toRef` 替代它：

```js
import { toRefs } from 'vue'

setup(props) {
    const { title } = toRef(props, 'title'}
    console.log(title.value)
}
```

#### Context

context是一个普通JavaScript对象（不是响应式的），暴露了其他可能在setup中有用的值

```js
setup(props, { attrs, slots, emit, expose })
```

context.attrs 等同于 vue2 中的$attrs

context.slots 等同于 $slots

context.emit 等同于 $emit

context.expose 暴露公共property（函数）

> attrs和slots是有状态的对象，它们总是会随组件本身的更新而更新，所以不能对他们进行结构，与 `props` 不同，`attrs` 和 `slots` 的 property 是**非**响应式的。如果你打算根据 `attrs` 或 `slots` 的更改应用副作用，那么应该在 `onBeforeUpdate` 生命周期钩子中执行此操作。



#### 访问组件的property

执行setup时可以访问的property

- props
- attrs
- slots
- emit

不能访问的组件选项

- data

- computed

- methods

- refs

  

#### 结合模板使用

从 `setup` 返回的 [refs](https://v3.cn.vuejs.org/api/refs-api.html#ref) 在模板中访问时是[被自动浅解包](https://v3.cn.vuejs.org/guide/reactivity-fundamentals.html#ref-解包)的，因此不应在模板中使用 `.value`

#### 使用渲染函数

`setup` 还可以返回一个渲染函数，该函数可以直接使用在同一作用域中声明的响应式状态

返回一个渲染函数将阻止我们返回任何其它的东西。从内部来说这不应该成为一个问题，但当我们想要将这个组件的方法通过模板 ref 暴露给父组件时就不一样了。

我们可以通过调用 `expose` 来解决这个问题，给它传递一个对象，其中定义的 property 将可以被外部组件实例访问

```js
import { h, ref } from 'vue'
export default {
	setup(props, { expose }) {
		const count = ref(0)
		const increment = () => ++count.value
		
		expose({
      		increment
    	})

    	return () => h('div', count.value)
	}
}
```

这个increment方法现在可以通过父组件的模板 ref 访问

