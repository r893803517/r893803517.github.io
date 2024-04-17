#### 评价

状态没有跟视图分离，直接操作dom很麻烦，vue、react这样的mv框架还是少不了。
样式安全封装在组件内部，不暴露任何class，有一些特殊情况下，需要修改样式，就不方便了。
感觉只是提供了基础的API，很多问题还是需要框架解决！除了上面两点，还要状态管理问题。



#### 使用

先定义一个继承 HTMLElement的类

```javascript
class UserCard extends HTMLElement {
  constructor() {
    super();
  }
}
```

接着，使用浏览器原生的`customElements.define()`方法，告诉浏览器`<user-card>`元素与这个类关联。

```javascript
window.customElements.define('user-card', UserCard);
```

##### 添加内容

```javascript
class UserCard extends HTMLElement {
  constructor() {
    super();

    var image = document.createElement('img');
    image.src = 'https://semantic-ui.com/images/avatar2/large/kristy.png';
    image.classList.add('image');

    var container = document.createElement('div');
    container.classList.add('container');

    var name = document.createElement('p');
    name.classList.add('name');
    name.innerText = 'User Name';

    var email = document.createElement('p');
    email.classList.add('email');
    email.innerText = 'yourmail@some-email.com';

    var button = document.createElement('button');
    button.classList.add('button');
    button.innerText = 'Follow';

    container.append(name, email, button);
    this.append(image, container);  // 最终调用append添加子节点
  }
}
```

##### template标签

使用 JavaScript 写上一节的 DOM 结构很麻烦，Web Components API 提供了`<template>`标签，可以在它里面使用 HTML 定义 DOM。

 ```html
 <template id="userCardTemplate">
 <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" class="image">
    <div class="container">
      <p class="name">User Name</p>
      <p class="email">yourmail@some-email.com</p>
      <button class="button">Follow</button>
   </div>
  </template>
 ```


然后，改写一下自定义元素的类，为自定义元素加载`<template>`。

```js
class UserCard extends HTMLElement {
   constructor() {
     super();
 
     var templateElem = document.getElementById('userCardTemplate');
     var content = templateElem.content.cloneNode(true);
     this.appendChild(content);
   }
 }  
```

上面代码中，获取`<template>`节点以后，克隆了它的所有子元素，这是因为可能有多个自定义元素的实例，这个模板还要留给其他实例使用，所以不能直接移动它的子元素。

##### 添加样式

组件的样式应该与代码封装在一起，只对自定义元素生效，不影响外部的全局样式。所以，可以把样式写在`<template>`里面。

```html
<template id="userCardTemplate">
  <style>
   .image {
     flex: 0 0 auto;
     width: 160px;
     height: 160px;
     vertical-align: middle;
     border-radius: 5px;
   }
  </style>

  <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" class="image">
</template>
```



##### 参数

```js
class UserCard extends HTMLElement {
  constructor() {
    super();

    var templateElem = document.getElementById('userCardTemplate');
    var content = templateElem.content.cloneNode(true);
    content.querySelector('img').setAttribute('src', this.getAttribute('image'));
    content.querySelector('.container>.name').innerText = this.getAttribute('name');
    content.querySelector('.container>.email').innerText = this.getAttribute('email')
    this.appendChild(content);
  }
}
window.customElements.define('user-card', UserCard);    
```



##### shadow dom

Web Component 允许内部代码隐藏起来，这叫做 Shadow DOM，即这部分 DOM 默认与外部 DOM 隔离，内部任何代码都无法影响外部。

下面代码中，`this.attachShadow()`方法的参数`{ mode: 'closed' }`，表示 Shadow DOM 是封闭的，不允许外部访问。

```javascript
class UserCard extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow( { mode: 'closed' } );

    var templateElem = document.getElementById('userCardTemplate');
    var content = templateElem.content.cloneNode(true);
    content.querySelector('img').setAttribute('src', this.getAttribute('image'));
    content.querySelector('.container>.name').innerText = this.getAttribute('name');
    content.querySelector('.container>.email').innerText = this.getAttribute('email');

    shadow.appendChild(content);
  }
}
window.customElements.define('user-card', UserCard);
```

