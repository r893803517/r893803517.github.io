## super指向

而super作为函数调用时，代表父类的构造函数；

而super作为对象时，在普通方法中，指向父类的原型对象，在静态方法中，指向父类；



oppo 23届秋招 前端真题

下述代码的执行结果为（）

```js
let obj1 = {
    name: '张三',
    getName() {
        return this.name;
    }
}
 
let obj2 = {
    name: '李四',
    getName() {
        return super.getName();
    }
}
 
Object.setPrototypeOf(obj2, obj1);
console.log(obj2.getName());
```

正确答案：

"李四"



 如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象。在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例。

所以，值为：“李四”

```js
super.getName()   类似于    this.__proto__  /*--------------------*/ super.getName()     等于        this.__proto__.getName.call(this)
```


