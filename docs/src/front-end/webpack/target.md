JavaScript 既可以编写服务端代码也可以编写浏览器代码，所以 webpack 提供了多种部署 *target*



#### 用法

```javascript
module.exports = {
  target: 'node',
};
```



#### 多target

虽然 webpack **不支持** 向 `target` 属性传入多个字符串，但是可以通过设置两个独立配置，来构建对 library 进行同构：

```javascript
const path = require('path');
const serverConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js',
  },
  //…
};

const clientConfig = {
  target: 'web', // <=== 默认为 'web'，可省略
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
  },
  //…
};

module.exports = [serverConfig, clientConfig];
```

上述示例中，将会在 `dist` 文件夹下创建 `lib.js` 和 `lib.node.js` 文件。







