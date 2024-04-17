Fetch API 使用Promise语法结构 

返回一个Promise

可以使用async、await

代码比XHR简洁

使用方法

get请求

```
fetch(url)
.then(response => console.log(response.json))
.then(json => console.log(json))
.catch(error => console.log('error', error))
```

POST请求

```
const option = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'applicatoin/json;charset=UTF-8'
    },
    body: JSON.stringify({
        pageNum: 1,
        pageSize: 10
    })
}

fetch(url, option).then(response => {
    console.log(response.status)
})
```

fetch方法传参

第一个input参数

可以使一个Request对象实例或者一个字符串

第二个init参数

接受一个对象，保存请求的配置，具体如下

- method
- headers
- body
- mode
- credentials
- cache
- redirect
- referrer
- referrerPolicy
- integrity

fetch的不足

- 默认不会发送cookies，需要设置init参数 credentials: 'same-origin'

- 请求错误不会reject，http请求错误时，fetch返回的Promise不会被标记为reject，也不会执行catch，需要在resolve函数中判断response.ok是否为true

    ```
    fetch(url)
    .then( response => {
        if (response.ok) return response.json();
        throw new Error('Network error')
    })
    .then( json => console.log(json))
    .catch(error => console.error('error', error))

- 原生fetch API没有提供超时timeout设置，可以使用promise.race来实现，或者通过signal参数（配合AbortController对象使用）

    Promise.race([
        fecth(url),
        new Promise(resolve => setTimeout(() => resolve('timeout'), 3000))
    ]).then( response => {
        console.log(response)
    })

- 没有abort，旧版fetch一旦发起请求无法中止，现在支持AbortController API的浏览器可以通过调用abortController.abort()中止，通过修改init参数中的signal属性，Promise会被标记为reject状态，同样可以实现timeout效果

    ```
    const controller = new AbortController()

    fetch(url, { signal: controller.signal }).then( response => {
        if (response.ok) return response.json()
        throw new Error('Network error');
    })
    .then( json => console.log(json))
    .catch( error => console.error('error': error))

    setTimeout(() => controller.abort(), 3000)

- 没有progress，不能显示文件上传和大型表单提交的进度