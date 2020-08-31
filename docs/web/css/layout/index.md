---
title: 基础部分
---

<big>作者： chenglNG(yuanchenglang)</big>

<big>日期：2020年8月1号</big>

***tips: 开发时，你有注意到html文文件头部吗？***
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <!-- content属性值 :
        width:可视区域的宽度，值可为数字或关键词device-width
        height:同width
        intial-scale:页面首次被显示是可视区域的缩放级别，取值1.0则页面按实际尺寸显示，无任何缩放
        maximum-scale=1.0, minimum-scale=1.0;可视区域的缩放级别，
        maximum-scale用户可将页面放大的程序，1.0将禁止用户放大到实际尺寸之上。
        user-scalable:是否可对页面进行缩放，no 禁止缩放 -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id=""></div>
    </body>
</html>
```
****
# CSS布局
- ### flex弹性布局（设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效）
Flex 布局将成为未来布局的首选方案。本文介绍常见布局的 Flex 写法。
```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1,user-scaleble=no">
<meta name="Keywords" content="">
<meta name="Description" content="">
<title>Hello World~~!!</title>
<style>
*{margin:0;padding:0;}
/*
   display:flex; 设置弹性盒子容器
   display:inline-flex; 设置内联弹性盒子容器

   flex-direction   盒子方向
      row(默认)		横排
      row-reverse		反向横排
      column			竖排
      column-reverse	反向竖排
   flex-wrap	 要不要换行
      nowrap默认         不换行(一行)
      wrap				换行
      wrap-reverse        换行后 第一行成第二行

   flex-flow:flex-direction flex-wrap;

   justify-content 主轴项目对齐方式
      flex-start		 主轴开始(默认)
      flex-end	     主轴结束
      center			 主轴居中
      space-between    两端对齐
      space-around     每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
   align-items 交叉轴单行对齐方式
      flex-start		 交叉轴开始
      flex-end	     交叉轴结束
      center
      baseline		项目的第一行文字的基线对齐。
      stretch（默认值）：如果项目未设置宽高或设为auto，将沿交叉轴占满整个容器的高度或宽度。
   
   align-content 交叉轴多行对齐方式
      flex-start		 交叉轴开始
      flex-end	     交叉轴结束
      center			 交叉轴居中
      space-between
      space-around
      stretch（默认值）：如果项目未设置宽高或设为auto，将沿交叉轴占满整个容器的高度或宽度。

   ----------flex 项目属性-----------------
   order：	
      属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。可以负值
   flex-grow 伸长比例 默认0
      flex-grow：<number>  定义项目的放大比例，（默认为0） 即如果存在剩余空间，也不放大

   子元素的尺寸=父级盒子剩余空间尺寸*子元素的box-grow属性值 / 所有子元素的flex-grow属性值的和

   flex-shrink 属性定义了项目的缩小比例，（默认为1），即如果空间不足，该项目将缩小。。
   元素收缩宽度 =  超出宽度 * 元素收缩比/收缩总比

   flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）浏览器根据这个属性，
   计算主轴是否有多余空间。它的默认值为auto
      值：<length> | <percentage> | auto | content
      <length>：		用长度值来定义宽度。不允许负值
      <percentage>：	用百分比来定义宽度。不允许负值
      auto：			无特定宽度值，取决于其它属性值，auto的计算规则是 
      检索一下你是否设置了width（或者height值，取决于flex-direction）就会采用这个值，
      否则的话最后使用的值是 content
      content：		基于内容自动计算宽度
   
   flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选
   flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
   该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
   建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

*/
ul{
   border:1px solid red;
   list-style:none;
   height:600px;
   display:flex;
   /*flex-direction:row;     盒子方向
   flex-wrap:wrap;	 要不要换行*/
   flex-flow:row nowrap;
   justify-content:space-around;
   align-items:center;
   align-content:stretch;
   
}
ul li{
   width:300px;
   height:300px;
   font-size:100px;
   color:white;
   text-align:center;
   margin:5px;
   background: green;

}
ul li:nth-child(1){align-self:flex-start;}
ul li:nth-child(2){align-self:flex-end;}
ul li:nth-child(3){align-self:auto;}
ul li:nth-child(4){align-self:auto;}
</style>
</head>
<body >
	<ul class='box'>
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>	
	</ul>
</body>	
</html>
```
*参考: <http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool>*
- ### grid网格布局

Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。

Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。
```html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
#box {
   display: grid;
   grid-template-rows: 1fr 1fr  1fr;
   grid-template-columns: 1fr 1fr 1fr;
   grid-column-gap: 10px;
   grid-row-gap: 20px;
   /* grid-template-areas:
                     "1 . ."
                     "2 . ."
                     "3 . ."; */
   width: 800px;
   height: 600px;
   margin: 100px auto;
}
#box div {
   border: 1px solid #ccc;
}
.project {
   /* grid-area: 1 */
   /* grid-column-start: 2;
   grid-column-end: 3; */
}
.project1 {
   /* grid-area: 2 */
   /* grid-column-start: 2;
   grid-column-end: 3; */
   
}
.project2 {
   /* grid-area: 3 */
   /* grid-column-start: 2;
   grid-column-end: 3; */
   
}
/* grid-auto-columns、grid-auto-rows; grid-auto-flow 
//如果设置为1x1的网格布局,如果多于一个，
则多出的将按这个值来设置宽（grid-auto-columns）、高(grid-auto-rows) */
</style>
</head>
<body>
   <div id="box">
      <div class="project">121</div>
      <!-- <div class="projec2t"></div> -->
      <div class="project1"></div>
      <div class="project2"></div>
   </div>
</body>
</html>
```
*参考: <http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html>、<https://github.com/JhonLandy/Grid>*
- ### rem布局(一般应用移动端)
   rem,em区别：rem,em都是顺应不同网页字体大小展现而产生的。其中，em是相对其父元素，在实际应用中相对而言会带来很多不便；而rem是始终相对于html
   大小，即页面根元素。虽然rem布局可以根据不同手机进行缩放，但是不同设备的字体都不统一，细节调整还是有点出入。
   
   *参考: <https://github.com/JhonLandy/modile>*
- ### 流式布局（设计方案，依赖百分比）
   流式布局是页面中元素的宽度按照屏幕分辨率自动进行适配调整，也就是我们常说的适配，它可以保证当前屏幕分辨率发生改变的时候，页面中的元素大小也可以跟着改变，所以流式布局是移动端开发常用的一种布局（并不是所有的东西都是自适应的。）
   - 特征:
      1. 宽度自适应，高度写死，并不是百分百还原设计图。
      2. 图标都是固定死大小的，包括字体等也是固定死的。并不是所有的东西都是自适应的。
      3. 一些大的图片，设置宽度为百分比自适应即可，随着屏幕大小进行变化,对于小图标或者文本等, 一般都是定死宽高大小。
   - 经典的流式布局结构:
      1. 左侧固定，右侧自适应
      2. 右侧固定，左侧自适应
      3. 两侧固定，中间自适应（圣杯布局，双飞翼布局）
      4. 等分布局
   - ### 自适应布局(设计方案)
自适应布局就是指能使网页自适应的显示在不同大小终端设备上的新网页设计方式及技术，它需要开发多套界面来适应不同的终端。（多套css样式解决不同终端）
   - ### 响应式布局(设计方案，@media-媒体)
自适应布局的特点是分别为不同的屏幕分辨率定义不同布局，改变屏幕分辨率可以切换不同的布局（页面元素位置发生改变），但在每个静态布局中，页面元素不随窗口大小的调整发生变化。可以把自适应布局看作是静态布局的一个系列。配合与其他布局更佳（一套css解决多终端）

# 总结
- 响应式布局与自适应布局的区别是什么？

    1. 自适应布局通过检测视口分辨率，来判断当前访问的设备是：pc端、平板、手机，从而请求服务层，返回不同的页面；响应式布局通过检测视口分辨率，针对不同客户端在客户端做代码处理，来展现不同的布局和内容。

    2. 自适应布局需要开发多套界面，而响应式布局只需要开发一套界面就可以了。

    3. 自适应对页面做的屏幕适配是在一定范围：比如pc端一般要大于1024像素，手机端要小于768像素。而响应式布局是一套页面全部适应。

    4. 自适应布局如果屏幕太小会发生内容过于拥挤。而响应式布局正是为了解决这个问题而衍生出的概念，它可以自动识别屏幕宽度并做出相应调整的网页设计。

    总之，响应式布局还是要比自适应布局要好一点，但是自适应布局更加贴切实际，因为你只需要考虑几种状态就可以了而不是像响应式布局需要考虑非常多状态。所以的说无论哪种设计都有它们各自的特点，我们要根据项目的需求来选择适合的布局方式。
- 感想

    ***其实，不管是什么布局，其实都是一种设计模式，没必要固化,根据不同场景合理使用css,提升用体验就行。不管是黑猫还是白猫，能捉到老鼠就是好猫***




