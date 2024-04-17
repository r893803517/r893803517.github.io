#### 什么是genenrator函数

ES6提供的一种异步编程解决方案

一种可以暂停执行的函数，yield表达式就是暂停标志

##### 返回

执行generator函数会返回一个函数遍历器，这个遍历器可以依次遍历generator函数内部的每个状态

##### 特征

1. function关键字和函数名之间有一个星号
2. 函数内部使用yield表达式，定义不同的内部状态（yield意为‘产出’）

##### 使用

拿到generator函数运行后返回的遍历器对象后，需要调用对象的next方法，使得指针移向下一个状态（yield表达式或者return语句），yield表达式是暂停执行的标记，而next方法可以恢复执行

>遍历器的next方法返回一个对象，包含value和done属性，如：
>
>``` { value: 'hello', done: false } ```
>
>value为yield后接的表达式的值，类型为any
>
>done表示运行是否结束，boolean类型



##### yield表达式运行逻辑

1. 遇到yield表达式，就暂停表达式下面的语句执行，并将紧跟在yield后的那个表达式的值，作为返回的对象的value属性值
2. 下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式
3. 当执行到函数结尾时，如果有return语句，则将return后接的表达式的值作为返回的对象value属性值，如果没有return语句，则返回对象的value属性值为undefined，此时函数执行完毕，返回对象的done属性值由false变为true

##### yield使用注意

1. yield表达式只能用在generator函数里面，用在其他地方会报错

2. yield表达式如果用在另一个表达式之中，必须放在圆括号里面。

   ```js
   console.log('Hello' + yield 123); // SyntaxError
   console.log('Hello' + (yield 123)); // OK
   
   //yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号。
   function* demo() {
     foo(yield 'a', yield 'b'); // OK
     let input = yield; // OK
   }
   ```

   

#### 与Iterator接口的关系

任意一个对象的Symbol.iterator方法， 等于该对象的遍历器**生成函数**，调用该函数会返回该对象的一个遍历对象

由于Generator就是遍历器生成函数，因此可以把Generator赋值给对象的Symbol.iterator属性，从而使得该对象具有iterator接口

```js
let myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

[...myIterable] // [1, 2, 3]
```

> 遍历器对象也有Symbol.iterator属性，也是一个遍历器对象生产函数，执行后返回它自己





#### next方法的参数

yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数会被当做上一个yield表达式的返回值。

通过这个传参，generator函数获得了运行时获取外部参数的能力，并根据参数值动态调整函数行为。

