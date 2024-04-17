#### 设置在容器上的属性

- flex-direction   row | row-reverse | column | column-reverse

- flex-wrap  nowrap | wrap | wrap-reverse

- flex-flow   以上简写

- justify-content  主轴对齐方式   flex-start | flex-end | center | space-between | space-around

- align-items  交叉轴上如何对齐   flex-start | flex-end | center | stretch | baseline

- align-content  多根交叉轴线的对齐方式  flex-start | flex-end | center | space-between | space-around | stretch;

  

#### 项目的属性

- order  数值越小，排列越靠前，默认为0。

- flex-grow   剩余空间分配比例  默认0 可以是百分比

- flex-shrink 空间不足缩小比例   默认1   0不缩小

- flex-basis  分配多余空间前项目占据的主轴空间，根据这个属性计算是否有多余空间

- flex  前面三个简写

- align-self  允许单个项目有不一样的对齐方式，可覆盖align-items属性 默认为auto

  除了auto，其他都与align-items属性完全一致。



