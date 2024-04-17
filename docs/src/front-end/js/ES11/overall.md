#### 链式合并  ?.

在调用的时候判断左侧的对象是否为null或undefined。如果是的，就不再往下运算，而是返回undefined。

**三种用法：**

- obj?.prop // 对象属性

- obj?.[expr] // 同上

- func?.(...args) // 函数或对象方法的调用

  

#### nullish运算符

属性值为null或undefined时，指定默认值

