### hook使用规则

hook就是JavaScript函数，但是使用他们会有两个额外的规则：

- 只能在函数最外层调用hook，不要在循环、条件判断或者子函数中使用
- 只能在react的函数组件中调用hook。不要在其他JavaScript函数中调用。（还有一个地方就是自定义的hook中）

> more details [Hook 使用规则](https://react.docschina.org/docs/hooks-rules.html)

### hook是什么

一个特殊的函数，可以让你在函数组件中钩入react的特性，例如useState允许你在函数组件中添加state