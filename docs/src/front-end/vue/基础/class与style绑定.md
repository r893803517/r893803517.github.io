### 绑定class

#### 对象语法

```html
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```



#### 数组语法

```html
<div v-bind:class="[activeClass, errorClass]"></div>
```



#### 数组语法中写对象语法

```html
在数组语法中也可以使用对象语法：

<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```



### 绑定内联样式

#### 对象语法

CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名

```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

data: {
  activeColor: 'red',
  fontSize: 30
}
```



#### 数组语法

```html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```



> 当 `v-bind:style` 使用需要添加[浏览器引擎前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix)的 CSS property 时，如 `transform`，Vue.js 会自动侦测并添加相应的前缀。



#### 多重值

> 2.3.0+

从 2.3.0 起你可以为 `style` 绑定中的 property 提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：

```
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 `display: flex`。

