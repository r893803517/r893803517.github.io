### 规范要求原地址

https://promisesaplus.com/

### 术语

- 1.1 **promise**是一个拥有符合本规范的**then方法**的对象或函数
- 1.2 **thenable**是定义了一个then方法的对象或函数
- 1.3 **值**（value）任意合法的JavaScript值
- 1.4 **异常**（exception）使用throw语句抛出的一个**值**
- 1.5 原因（reason）表示promise为什么会被拒绝的一个**值**

### 必要条件

#### 2.1 promise状态

promise必须是三个状态中的一种： pending、fulfilled、rejected

- 当一个promise处于pending状态时：
  - 可变为fulfiled或rejected状态
- 当一个promise处于fulfiled状态时
  - 不能转为其他状态
  - 必须有一个不能改变的常量值
- 但一个promise处于rejected状态时
  - 不能不能转为其他状态
  - 必须有一个不能改变的常量值

#### 2.2 then方法

promise必须提供一个then方法来访问当前或最终的值或原因

promise的then方法接收两个参数： 

    promise.then(onFulFilled, onRejected)

##### 2.2.1  onFulFilled、onRejected可选，如果不是一个函数，必须被忽略

##### 2.2.2 onFulfilled函数调用时机

- 必须在promise被解决后调用，promise的值作为它的首个参数
- 一定不能在promise被解决前调用
- 只能被调用一次

##### 2.2.3 onRejected调用时机

- 必须在promise被拒绝后调用，promise的值作为它的首个参数
- 一定不能在promise被拒绝前调用
- 只能被调用一次

##### 2.2.4 在执行上下文栈中只包含平台代码之前，onFulfilled和onRejected一定不能被调用

##### 2.2.5 onFulfilled和onRejected一定被作为函数调（严格模式下this值为undefined，非严格模式下this值为全局对象）

##### 2.2.6 同一个promise上的then可能被调用多次

- 如果promise被解决，所有相应的onFulfilled回调必须按照所在的then方法的顺序执行
- 如果promise被解决，所有相应的onRejected回调必须按照所在的then方法的顺序执行

##### 2.2.7 then必须返回一个promise（允许promise2 === promise1)

    promise2 = promise1.then(onFulfilled, onRejected)

- 如果onFulfilled或onRejected返回一个值x，运行promise解决程序\[\[Resolve\]\](promise2, x)
- 如果onFulfilled或onRejected抛出一个异常e，promise2必须用e作为原因被拒绝
- 如果onFulfilled不是一个函数并且被promise1解决，promise2必须用promise1相同的值被解决
- 如果onRejected不是一个函数并且promise1被拒绝，promise2必须用promise1相同的原因被拒绝

#### 2.3 promise解决程序

promise解决程序是一个抽象操作，它以一个promise和一个值作为输入，我们将其表示为\[\[Resolve]](promise, x)。如果x是一个thenable，它尝试让promise常用x的状态，并假设x的行为至少在某种程度上类似于promise，否则它将会用x解决promise

这种thenable的特性是的promise的实现更具有通用性：只要其暴露一个遵循promise/A+协议的then方法即可。

要运行\[\[Resolve]](promise, x)，需要执行以下步骤：

##### 2.3.1 如果promise和x引用同一个对象，用一个typeError作为原因来拒绝promise

##### 2.3.2 如果x是一个promise（通常这个promise来自当前平台实现，但也允许符合规范的特定的promise实现），采用它的状态

- 如果x是pending状态，proimse必须保持等待状态，直到x被拒绝或解决
- 如果x是fulfilled状态，使用相同的值解决promise
- 如果x是rejected状态，使用相同的值解决promise

##### 2.3.3 如果x是一个对象或函数

- 让then成为x.then，即将x.then存入then变量中，主要防止x.then在执行中发生改变，并提高访问效率
- 如果检索属性x.then导致抛出一个异常e，用e作为原因拒绝promise
- 如果then是一个函数，用x作为this调用它。then方法的参数为两个回调函数，第一个参数叫做resolvePromise，第二个参数叫做rejectPromise
  - 如果resolvePromise用一个值调用，运行\[\Resolve](proimse, y)
  - 如果resolvePromise用一个原因r调用，用r拒绝promise
  - 如果resolvePromise和rejectedPromise都被调用，或者对同一个参数进行多次调用，那么第一次调用优先，以后调用的都会被忽略，因为promise状态一旦改变就不会再改变
  - 如果调用then抛出了一个异常e
    - 如果resolvePromise或rejectedPromise已经被调用，忽略它
    - 否则，用e作为原因拒绝promise
- 如果then不是一个函数，用x解决promise

##### 2.3.4 如果x不是一个对象或函数，用x解决promise

如果promise用一个循环的thenable链解决，由于\[\[Resolve]](promise, thenable)的递归特性，最终将导致\[\[Resolve]](promise, thenable)被再次调用，遵循上面的算法将导致无限递归。规范中并没有强制要求处理这种情况，promise实现不应该在thenable链的深度上做限制，只有真正的循环才应该引发一个TypeError

这里的循环thenable可能是指如下情况

    const obj = {
        then: function() {
            // ...
        }
    }
    obj.then.then = obj.then
