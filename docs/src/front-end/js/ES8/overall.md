#### async/await  

#### Object.values 

#### Object.entries 

#### String.prototype.padStart/padEnd

#### Object.getOwnPropertyDescriptiors

#### SharedArrayBuffer

*有了 SharedArrayBuffer 后，多个 web worker 就可以同时读写同一块内存了你再也不需要 postMessage 伴有时延的通信了，多个 web worker 对数据访问都没有时延了*

初步理解为一种共享内存机制。读取的时候需要建立视图。记住在worker之间共享内存就行，以后用到了在研究吧。

#### Atomics对象

Atomics 对象提供了一组静态方法用来对 SharedArrayBuffer 对象进行原子操作。

与一般的全局对象不同，Atomics 不是构造函数，因此不能使用 new 操作符调用，也不能将其当作函数直接调用。Atomics 的所有属性和方法都是静态的（与 Math 对象一样）。

多个共享内存的线程能够同时读写同一位置上的数据。原子操作会确保正在读或写的数据的值是符合预期的，即下一个原子操作一定会在上一个原子操作结束后才会开始，其操作过程不会中断。

