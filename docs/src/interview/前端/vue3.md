

# 六大亮点

- `Performance`：性能更比`Vue 2.0`强。

- `Tree shaking support`：可以将无用模块“剪辑”，仅打包需要的。

- `Composition API`：组合`API`

- `Fragment, Teleport, Suspense`：“碎片”，`Teleport`即`Protal传送门`，“悬念”

- `Better TypeScript support`：更优秀的Ts支持

- `Custom Renderer API`：暴露了自定义渲染`API`

下面将按顺序分别描述。

## `Performance`

1. 重写了虚拟`Dom`的实现（且保证了兼容性，脱离模版的渲染需求旺盛）。

2. 编译模板的优化。

3. 更高效的组件初始化。

4. `update`性能提高1.3~2倍。

5. `SSR`速度提高了2~3倍。

### 要点1：编译模板的优

### 要点2: 事件监听缓存：`cacheHandlers`

## 4. `Tree shaking support`

可以将无用模块“剪辑”，仅打包需要的（比如`v-model,`，用不到就不会打包）。

一个简单

<pre spellcheck="false" class="md-fences md-end-block ty-contain-cm modeLoaded" lang="" cid="n98" mdtype="fences" style="box-sizing: border-box; overflow: visible; font-family: var(--monospace); font-size: 0.9em; display: block; break-inside: avoid; text-align: left; white-space: normal; background-image: inherit; background-position: inherit; background-size: inherit; background-repeat: inherit; background-attachment: inherit; background-origin: inherit; background-clip: inherit; background-color: rgb(248, 248, 248); position: relative !important; border: 1px solid rgb(231, 234, 237); border-radius: 3px; padding: 8px 4px 6px; margin-bottom: 15px; margin-top: 15px; width: inherit;">HelloWorld</pre>

大小仅为：13.5kb

11.75kb，仅`Composition API`。

包含运行时完整功能：22.5kb

拥有更多的功能，却比`Vue 2`更迷你。

很多时候，我们并不需要 `vue`提供的所有功能，在 `vue 2` 并没有方式排除掉，但是 3.0 都可能做成了按需引入。

## 5. `Composition API`

与`React Hooks`类似的东西，实现方式不同。

- 可与现有的 `Options API`一起使用

- 灵活的逻辑组合与复用

- `vue 3`的响应式模块可以和其他框架搭配使用

混入(`mixin`) 将不再作为推荐使用， `Composition API`可以实现更灵活且无副作用的复用代码。

## 6. 新标签

### fragment标签

`Fragment`翻译为：“碎片”

- 不再限于模板中的单个根节点

- `render` 函数也可以返回数组了，类似实现了 `React.Fragments` 的功能 。

### teleport标签

### Suspense标签

`Suspense`翻译为：“悬念”

- 可在嵌套层级中等待嵌套的异步依赖项

- 支持`async setup()`

- 支持异步组件

虽然`React 16`引入了`Suspense`，但直至现在都不太能用。如何将其与异步数据结合，还没完整设计出来。

Vue 3 的``更加轻量：

**仅5%应用能感知运行时的调度差异，综合考虑下，Vue3 的`` 没和React一样做运行调度处理**

## 7. 更好的`TypeScript`支持

- `Vue 3`是用`TypeScript`编写的库，可以享受到自动的类型定义提示

- 支持`TSX`

- `class`组件还会继续支持，但是需要引入`vue-class-component@next`，该模块目前还处在 alpha 阶段。



## 8. `Custom Renderer API`：自定义渲染器API

- 正在进行`NativeScript Vue`集成

- 用户可以尝试`WebGL`自定义渲染器，与普通Vue应用程序一起使用（`Vugel`）。

意味着以后可以通过 `vue`， `Dom` 编程的方式来进行 `webgl` 编程 。感兴趣可以看这里：[Getting started vugel](https://links.jianshu.com/go?to=https%3A%2F%2Fvugel.planning.nl%2F%23application)
