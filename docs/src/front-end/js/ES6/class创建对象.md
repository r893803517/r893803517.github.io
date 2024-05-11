# class对象模板

基本上，ES6 的class可以看作只是一个[语法糖](https://www.zhihu.com/search?q=%E8%AF%AD%E6%B3%95%E7%B3%96&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22361387348%22%7D)，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像[面向对象编程](https://www.zhihu.com/search?q=%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22361387348%22%7D)的语法而已。

而提到面向对象，就绕不开继承。

### super关键字

ES6 class 可以通过`extends`关键字实现继承，而同时子类必须在 `constructor` 方法中调用`super`方法，否则新建实例时会报错。

这是因为子类自己的`this`对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用`super`方法，子类就得不到`this`对象。

ES5 的继承的实质是先创造子类的实例对象`this`，然后再将父类的方法添加到`this`上面（`Parent.apply(this)`）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到`this`上面（所以必须先调用`super`方法），然后再用子类的构造函数修改`this`。

**因此子类的构造函数中，只有调用`super`之后，才可以使用`this`关键字，否则会报错。** 这是因为子类实例的构建，基于父类实例，只有`super`方法才能调用父类实例。

同时子类没有定义`constructor`方法，`super`方法会被默认添加。

#### 用法

`super`这个关键字，既可以当作函数使用，也可以当作对象使用。

super作为函数调用时，代表父类的构造函数；作为函数时，`super()`只能用在子类的构造函数之中，用在其他地方就会报错。

super作为对象时，在普通方法中，指向父类的原型对象，在静态方法中，指向父类；

### static

js的静态函数只能让类名调用，对象调用会出错
