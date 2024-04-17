#### 三种状态

- pending
- fulfilled
- rejected



promise状态不受外界影响

promise一旦改变状态就不会再变

状态的改变只能是pending -> fulfilled 或者 pending -> rejected



#### 基本用法

```js
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```



#### then方法

返回一个新的promise实例



#### catch方法

`Promise.prototype.catch()`方法是`.then(null, rejection)`或`.then(undefined, rejection)`的别名

如果 Promise 状态已经变成`resolved`，再抛出错误是无效的。因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。

Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个`catch`语句捕获。

如果没有使用`catch()`方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应



#### finally方法

`finally()`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是`fulfilled`还是`rejected`。这表明，`finally`方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。



#### Promise.all

用于将多个 Promise 实例，包装成一个新的 Promise 实例。

```javascript
const p = Promise.all([p1, p2, p3]);
```

`Promise.all()`方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。



`p`的状态由`p1`、`p2`、`p3`决定，分成两种情况。

（1）只有`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数。

（2）只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数。



如果作为参数的 Promise 实例，自己定义了`catch`方法，那么它一旦被`rejected`，并不会触发`Promise.all()`的`catch`方法。



#### Promise.race

将多个 Promise 实例，包装成一个新的 Promise 实例。

```javascript
const p = Promise.race([p1, p2, p3]);
```

只要`p1`、`p2`、`p3`之中有一个实例率先改变状态，`p`的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给`p`的回调函数。



#### Promise.allSettled

```javascript
allSettledPromise.then(function (results) {
  console.log(results);
});
```

每个results对象都有`status`属性，该属性的值只可能是字符串`fulfilled`或字符串`rejected`。`fulfilled`时，对象有`value`属性，`rejected`时有`reason`属性，对应两种状态的返回值。



#### Promise.any

只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。

`Promise.any()`跟`Promise.race()`方法很像，只有一点不同，就是不会因为某个 Promise 变成`rejected`状态而结束。