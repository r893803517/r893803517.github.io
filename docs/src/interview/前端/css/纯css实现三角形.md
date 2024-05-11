# 实现方式

CSS 提供了三种出色的方法可以实现基本的形状。本文就来看看如何使用这些方法来实现一个三角形。三种方法如下：

- border
- linear-gradient
- clip-path

## **1. border**

给定一个宽度和高度都为 0 的元素，其 border 的任何值都会直接相交，我们可以利用这个交点来创建三角形。也就是说，border属性是三角形组成的，下面给每一边都提供不同的边框颜色

## **2. linear-gradient**

linear-gradient 需要结合 background-image 来实现三角形，下面就来逐步使用渐变实现一个三角形。

## **3. clip-path**

clip-path 就是使用它来绘制多边形（或圆形、椭圆形等）并将其定位在元素内。实际上，浏览器不会绘制 clip-path 之外的任何区域，因此我们看到的是 clip-path 的边界。

下面来绘制一个指向右侧的三角形：

```text
clip-path: polygon(0 0, 0% 100%, 100% 50%);
```

这个值是怎么来的呢？使用 clip-path 可以为沿路径放置的每个点定义坐标。在这种情况下，就定义了三个点：`top-left (0 0)`、`bottom-left (0% 100%)`、`right-center (100% 50%)`。
