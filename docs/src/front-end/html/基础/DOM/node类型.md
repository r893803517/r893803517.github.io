# NODE类型

DOM1级文案定义了一个node接口，该接口将由DOM中的所有节点类型实现。

在JavaScript中实现了node接口的就是node类型。

JavaScript中的所有节点类型都继承自node类型


## 属性

### nodeName

nodeName的值是元素的标签名

### nodeVlaue 

可以手动设置

### nodeType

每个节点都有那Note type属性，该属性表示节点类型，节点类型由node类型中定义12个常量表示



## 方法

### 节点遍历

#### parentode

#### childNodes

#### firstChild

#### lastChild

#### previoussibling/nextsibling

#### onnerbocument 


### 节点操作

#### appendChild

用于添加子节点，它会向 childNodes末尾添加一个节点。

#### insertBefore

方法用于添加兄弟节点，它会在指定的已有的子节点之前插入新节点。

```js
node.insertBefore(newnode,existingnode)
```

#### replaceChild

可以将指定的节点移除，并使用新插入的节点替换原节点位置。

```js
document.getElementById("myEle").replaceChild(newnode, oldnode);
```

#### cloneNode

该方法接受一个布尔型参数，用于设置是否执行深度复制。默认为 fa1se，当为 true时，会复制指定节的整个子节点树。

#### removeChild

操作成功后会以 Node 对象返回被删除的节点，如果节点不存在则返回 nu11

#### normailize

由于解析和DOM操作等原因，可能会出现文本节点没有文本或出现两个连续的文本节点的情况。 normalize()方法会移除空的文本节点，并连接相邻的文本节点。示例如下:

```js
document.getElementById("myEle").normalize();
```


节点关系图：

[关系图](./img/tree.png)


参考文档：

https://blog.csdn.net/bfboys/article/details/54350721