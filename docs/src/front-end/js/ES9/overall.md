#### 异步Iterator

和常规遍历器一样，除了next方法返回的是一个Promise,因此`await`可以和`for...of`循环一起使用，以串行的方式运行异步操作。例如：

```js
async function process(arrary) {
    for await (let i of array) {
        doSomething(i)
    }
}
```

#### Promise.finally

#### Rest/Spread 属性

#### 正则表达式命名捕获组

#### 正则表达式反向断言

#### 正则表达式dotAll模式

#### 正则表达式Unicode转义

#### 非转义序列的模板字符串



