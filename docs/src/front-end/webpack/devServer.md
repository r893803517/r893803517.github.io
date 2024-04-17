#### 代理proxy

```javascript
module.exports = {
    devServer: {
        proxy: [
            { 
                context: ['/api', '/api1'],
                target: 'http://localhost:3000',
                reWrite: {  } 
            }
        ]
    }
}
```
