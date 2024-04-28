我在winter大神的重学前端专栏中，看到了比较符合我心意的，同时也是符合原理的描述：

- 以构造器的prototype属性为原型，创建新对象；
- 将this指向第一步构造的新对象，和调用参数传给构造器
- 执行函数中的代码；
- 如果构造器没有手动返回对象，则返回第一步创建的对象



```js
function myNew(Fn, ...args) {
    const instance = Object.create(Fn.prototype);
    const res = Fn.apply(instance, args);
    if (typeof res === "function" || (typeof res === "object" && res !== null)) {
        return res;
    }
  return instance;
}
```

