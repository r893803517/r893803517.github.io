loader 可以使你在 `import` 或 "load(加载)" 模块时预处理文件。

oader 甚至允许你直接在 JavaScript 模块中 `import` CSS 文件！



#### 使用loader

两种方式

- 配置方式： 在 **webpack.config.js** 文件中指定 loader
- 内联方式： 在每个 `import` 语句中显式指定 loader。



#### 配置方式

loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)。



#### 内联方式

可以在 `import` 语句或任何 [与 "import" 方法同等的引用方式](https://webpack.docschina.org/api/module-methods) 中指定 loader。使用 `!` 将资源中的 loader 分开。每个部分都会相对于当前目录解析。

添加前缀，可以覆盖 [配置](https://webpack.docschina.org/configuration) 中的所有 loader, preLoader 和 postLoader



#### 特性

- 支持链式调用
- 可以是同步的，也可以是异步
- loader 运行在 Node.js 中，并且能够执行任何操作
- loader 可以通过 `options` 对象配置（仍然支持使用 `query` 参数来设置选项，但是这种方式已被废弃）
- 除了常见的通过 `package.json` 的 `main` 来将一个 npm 模块导出为 loader，还可以在 module.rules 中使用 `loader` 字段直接引用一个模块。
- 插件(plugin)可以为 loader 带来更多特性
- loader 能够产生额外的任意文件



#### 解析loader

遵循**模块解析**规则。多数情况下，loader 将从 [模块路径](https://webpack.docschina.org/concepts/module-resolution/#module-paths) 加载（通常是从 `npm install`, `node_modules` 进行加载）。

我们预期 loader 模块导出为一个函数，并且编写为 Node.js 兼容的 JavaScript。通常使用 npm 进行管理 loader，但是也可以将应用程序中的文件作为自定义 loader。按照约定，loader 通常被命名为 `xxx-loader`（例如 `json-loader`）。

