# vue3和vue2区别



## 源码层面

#### 类型检测

vue2 使用flow进行类型检测

vue3 使用ts重构



## 性能层面

#### 响应式方式改变

vue2使用Obejct.defineProperty来劫持数据的setter和getter方法

vue3使用Proxy来实现数据劫持

#### 算法优化

differ算法优化

block tree算法优化



### 代码写法方面

#### 逻辑统一

vue2选项式api将逻辑代码分布在data、methods、生命周期钩子等多个地方中，比较分散

vue3组合式api将逻辑统一在setup钩子中



#### 逻辑代码复用

vue2通常使用mixin实现逻辑代码复用，混入的组件通常也是由一大堆options组成，且多个mixins可能造成命名冲突

vue3通过hook函数，将独立的逻辑抽离，并且同样是响应式



#### 生命周期

使用组合式api时，setup钩子替换beforeCreate和created钩子，其他钩子需要按需引入，钩子名前加on，destroy钩子改名为unmount


