## 概念

用于返回一个路径的最后一部分，也就是文件名或文件夹名

## 语法

```
path.basename(path, [,ext])
```
## 参数

- path (必选) 要提取文件名的路径字符串
- ext (可选) 用于指定要排除的文件拓展名。如果指定了这个参数，那么返回文件名时将不包括指定的文件拓展名

## 示例

```
path.basename('/docs/packages/back-end/nestjs/介绍.md'， '.md') // 返回 '介绍'
```