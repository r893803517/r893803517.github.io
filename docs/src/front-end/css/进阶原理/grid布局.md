### 基本概念

#### 容器和项目

采用网格布局的区域称为容器 container

容器内部采用网格定位的子元素，称为项目 item

#### 行和列

容器里的水平区域称为行 row 垂直区域称为列 column

#### 单元格

行和列的交叉区域，被称为单元格 cell，正常情况下n行和m列会产生n * m个单元格

#### 网格线

划分网格的线，称为“网格线” grid line

### 容器属性

- display: grid、inline-grid
  
  > 容器指定了网格布局后，容器内项目的float、display：inline-block、display：table-cell、vetical-align和column-*等设置都将失效

- grid-template-columns、grid-template-rows
  
    容器指定了grid布局后，接着就要划分行和列，grid-template-columns定义每一列的宽，grid-template-rows属性定义每一行的行高
  
  ```
  // 定义了一个3行3列的网格，列宽行高都是100px
  .container {
      display: grid;
      grid-template-columns: 100px 100px 100px;
      grid-template-rows: 100px 100px 100px;
  }
  ```
  
  - 可以使用repeat函数，简化重复的值 repeat(3, 33.33%)或者重复某种模式repeat(2, 100px 20px 80px)
  
  - repeat函数中可以使用auto-fill关键字  repeat(auto-fill, 100px) 表示宽度或高度为100
  
  - fr单位 fraction的缩写，意为片段，如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍
  
  - minmax minmax函数产生一个长度范围，表示数值就在这个范围之中，它接受两个参数，分别为最小值和最大值
    
    ```
    // 上面代码中  minmax(100px, 2fr)表示列宽不小于100px，不大于2fr（300px）
    grid-template-columns: 150px 1fr 1fr minmax(100px, 2fr);
    ```
  
  - auto 关键字表示有浏览器自己决定长度（大部分情况下等于该列最大宽度，除非段元个内容设置了min-width且min-width值大于最大宽度）
  
  - 网格线的名称
    
      grid-template-rows和grid-template-columns中可以使用方括号指定每一根网格线的名字(方括号内可以写多个名字)，方便以后引用
    
    ```
    .container {
        display: grid;
        grid-template-columns: [c1] 100px [c2] 200px [c3] auto [c4 column-line-4];
        grid-template-rows: [r1] 100px [r2] 200px [r3] auto [r4];
    }
    ```
  
  - 布局实例
    
      两栏式布局：
    
    ```
        .wrapper {
            display: grid;
            grid-template-rows: 30% 70%;
        }
    ```
    
      传统12网格布局：
    
    ```
        .wrapper {
            display: grid;
            grid-template-rows: repeat(12, 1fr)
        }
    ```

- row-gap、column-gap、gap属性
  
  - row-gap设置行与行的间隔(行间距)
  - column-gap设置列与列的间隔（列间距）
  - gap 上面两个属性的简写，如果grid-gap省略了第二个值，浏览器会认为第二个值等于第一个值

- grid-template-areas
  
    网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。grid-template-areas属性用于定义区域。
  
    定义了三个区域：
  
  ```
  grid-template-areas: 'a a a'
                  'b b b'
                  'c c c';
  ```
  
    某些区域不需要利用，则使用"点"（.）表示。
  
  ```
  grid-template-areas: '. a .'
                      'b b b'
                      '. c .';
  ```
  
  > 注意，区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为区域名-start，终止网格线自动命名为区域名-end。比如，区域名为header，则起始位置的水平网格线和垂直网格线叫做header-start，终止位置的水平网格线和垂直网格线叫做header-end。

- grid-auto-flow
  
    子元素会按照属性设置的顺序，自动放置在每一个网格
  
    默认值是 row ，放置顺序是"先行后列"，即先填满第一行，再开始放入第二行
  
    值为 column 时，变成"先列后行"
  
    还可以设成row dense和column dense

- justify-items、align-items、place-items
  
    justify-items设置单元格内容的水平位置（左右中）
  
    align-items设置单元格内容的垂直位置
  
    place-items是justify-items align-items两个属性的简写形式，如果省略第二个值，浏览器会默认其与第一个值相等
  
  ```
  .container {
      justify-items: start | end | center | stretch 拉伸，占满单元格的整个宽度（默认值）;
      align-items: start | end | center | stretch;
  }
  ```

- justify-content、align-content、place-content
  
    justify-content属性是整个内容区域在容器里面的水平位置（左右中）
  
    align-content属性是整个内容区域的垂直位置（上中下）
  
    place-content是align-content属性和justify-content属性的合并简写形式。
  
    如果省略第二个值，浏览器就会假定第二个值等于第一个值。
  
  ```
  .container {
      justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
      align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
  }
  
  .container {
      place-content: space-around space-evenly;
  }
  ```

- grid-auto-columns、grid-auto-rows
  
    决定新增网格的列宽和行高。

- grid-template、grid

### 项目属性

- grid-column-start、grid-column-end grid-row-start grid-row-end
  
    指定项目四个边框所在位置，没有指定的边框会采用默认位置
  
    当容器内同时存在已指定位置的项目和未指定位置的项目时，未指定位置的项目会根据grid-auto-flow决定位置

- grid-column、grid-row
  
    grid-column是grid-column-start和grid-column-end的简写形式
  
    grid-row同理
  
  ```
  .item {
      grid-column: <start-line> / <end-line>;
      grid-row: <start-line> / <end-line>;
  }
  ```
  
    可以使用span关键字，表示跨越多少个网格。
  
  ```
  .item-1 {
      background: #b03532;
      grid-column: 1 / 3;
      grid-row: 1 / 3;
  }
  /* 等同于 */
  .item-1 {
      background: #b03532;
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
  }
  ```

- grid-area
  
    grid-area属性指定项目放在哪个区域
  
  ```
  .item-1 {
      grid-area: e;
  }
  ```
  
    grid-area还可用作grid-row-start grid-row-end grid-column-start grid-column-end 的简写形式
  
  ```
  // 注意这里的位置
  .item {
      grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
  }
  ```

- justify-self align-self place-self
  
    justify-self 属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。
  
    align-self属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目。
  
  ```
  .item {
      justify-self: start | end | center | stretch;
      align-self: start | end | center | stretch;
  }
  ```
  
    lace-self属性是align-self属性和justify-self属性的合并简写形式。
  
  ```
  .item {
      place-self: <align-self> <justify-self>
  }
  ```
  
    如果省略第二个值，place-self属性会认为这两个值相等。