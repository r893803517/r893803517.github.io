1. 我们通过调用React.createRef 创建了一个React ref并将其赋值给ref变量
2. 我们通过指定ref为jsx属性，将其向下传递给\<FancyButton ref={ref}>
3. React传递ref给forwardRef内函数(props，ref)=> ...，作为其第二个参数
4. 我们向下转发给该ref参数到\<button ref={ref}\>, 将其指定为jsx属性
5. 当ref挂载完成， ref.current将指向\<button> DOM节点

> 第二个参数ref只在使用React.forwardRef定义组件时存在。常规函数和class组件不接收ref参数，且props中也不存在ref
> 
> ref 转发不仅限于DOM组件，你也可以转发refs到class组件实例中