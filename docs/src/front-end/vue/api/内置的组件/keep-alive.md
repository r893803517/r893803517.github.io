#### Prop

- 2.1.0新增 `include` - 字符串或正则表达式。只有名称匹配的组件会被缓存。
- 2.1.0新增  `exclude` - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
- 2.5.0新增 `max` - 数字。最多可以缓存多少组件实例。



#### 用法

主要用于保留组件状态或避免重新渲染

<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

和<transition>相似，keep-alive是一个抽象组件：自身不会渲染一个DOM元素，也不会出现在组件的父组件链中

在vue2.2.0及以上版本中，activated和deactivated将会在keep-alive树内的所有嵌套组件中触发



<span style="color: red">注意</span>，`<keep-alive>` 是用在其一个直属的子组件被开关的情形。如果你在其中有 `v-for` 则不会工作。如果有上述的多个条件性的子元素，`<keep-alive>` 要求同时只有一个子元素被渲染。

```html
<!-- 基本 -->
<keep-alive>
	<component :is="view"></component>
</keep-alive>

<!-- 多个条件判断的直属子组件，同时只能有一个条件成立 -->
<keep-alive>
	<comp-a v-if="a > 1"></comp-a>
	<comp-b v-else></comp-b>
</keep-alive>

<!-- 和<transition>一起使用 -->
<transition>
	<keep-alive>
    	<component :is="view"></component>
    </keep-alive>
</transition>
```







