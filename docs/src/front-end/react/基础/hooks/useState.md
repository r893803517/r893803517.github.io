### 引入

```
// 按需引入
import { useState } from 'react' 

// 全局模式
React.useState
```

### useState做了什么

定义了一个变量，useState是一个新方法，它与class里面的this.state提供的功能完全相同, 一般来说,在函数执行完成退出后变量就会消失, 而state中的变量会被React保留

### 参数

一个初始值

### 返回值是什么

一个数组, 保存当前state和更新state的函数

### 读取state

在class组件中我们读取this.state.count

在函数中我们直接访问count

### 更新state

通过调用useState返回的更新函数，更新state值

``` 
function Example() {
    // 声明一个叫 count 的state变量
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>you click {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}
```


useState 会返回一对值：当前状态和一个让你更新它的函数
更新函数类似class组件的this.setState，但是它不会把新的state和旧的state进行合并
