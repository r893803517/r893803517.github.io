Reflect 是一个内置对象，提供**拦截**JavaScript操作的方法，这些方法和proxy handler方法相同

Reflect不是一个函数对象，因此不可构造，不能用new运算符新建对象

Reflect的所有方法都是静态的

### 静态方法

#### Reflect.apply(target, thisArgument, argumentList)

对一个函数进行调用操作，可以传入一个数组作为调用参数，和Function.prototype.apply()

#### Reflect.construct()
