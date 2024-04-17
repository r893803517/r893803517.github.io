```
function Example() {
    const [count, setCount] = useState(0);

    // 相当于componentDidMount和componentDidUpdate：
    useEffect(() => {
        // 使用浏览器API更新页面标题
        document.title = `You Clicked ${count} times`;
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}
```

组件中执行过数据获取、订阅或者手动修改过DOM，这些操作统称为‘副作用’

useEffect就是一个EffectHook, 给函数组件增加了操作副作用的能力，与class组件中的componentDidMount componentDidUpdate和componentWillUnmount具有相同用途，只不过被合并成一个API

传入useEffect的副作用函数还可以通过返回一个函数来指定如何‘清除’副作用，例如下面例子react会在组件销毁时取消对ChatAPI的订阅，然后再后续渲染时重新执行副作用函数

```
function FriendStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
        setIsOnline(status.isOnline)
    }

    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

        return () => {
            ChatAPI.unsubscribeToFriendStatus(props.friend.id, handleStatusChange);
        }
    })

    if (isOnline === null) {
        return 'Loading...'
    }

    return isOnline ? 'Online' : 'offline';
}
```