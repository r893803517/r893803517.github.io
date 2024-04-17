#### String.prototype.replaceAll 

#### Promise.any

当Promise列表中的*任意一个*promise成功resolve则*返回第一个*resolve的结果状态 如果*所有*的promise均*reject*，则抛出异常表示所有请求失败

#### WeakRefs

使用WeakRefs的Class类创建对对象的弱引用(对对象的弱引用是指当该对象应该被GC回收时不会阻止GC的回收行为)

#### 逻辑运算符和赋值表达式

逻辑运算符和其他的复合赋值运算符工作方式不同

表达式：*a op= b*

等同于：*a = a op (a = b)*

```js
a ??= b
//等价于
a = a ?? (a = b)
```

- *&&=*：当LHS值存在时，将RHS变量赋值给LHS
- *||=*：当LHS值不存在时，将RHS变量赋值给LHS
- *??=* ：当LHS值为null或者undefined时，将RHS变量赋值给LHS

#### 数字分隔符号

