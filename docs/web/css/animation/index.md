---
title: 动画
---

<big>作者： chenglNG(yuanchenglang)</big>

<big>日期：2020年8月30号</big>

<big>CSS 是前端工程是的基本技能，知识点比较多，然后我最近对动画这一块越来越不熟悉，现在进行一下回顾，
 巩固一下，也分享给你们。</big>

# Transition

transition 通常用于做过渡动画; 我的使用方法是，先写好基本界面样式，然后写好过渡以后期望的样式，最后给对应的元素添加过渡。
有以下属性：

  - transition-property: 哪个属性需要执行过渡效果,默认值为all
    
  - transition-duration：过渡效果持续的时长,默认值为0
    
  - transition-delay: 延迟多少秒之后开始执行过渡动画,默认值为0
    
  - transition-timing-function: 控制过渡动画的速度,默认值为ease,一共有5个值:
      - linear (匀速)
      - ease (逐渐慢下来)
      - ease-in (加速)
      - ease-out (减速)
      - ease-in-out (先加速后减速)
      - cubic-bezier 贝塞尔曲线 (*<https://cubic-bezier.com>*)
      - transition 属性连写顺序：transition: property duration timing-function delay
   
  ***例子***：
```css
div {
   width: 100px;
   height: 100px;
   background-color: rgb(247, 215, 237);
   <!-- 多个属性需要同时执行过渡效果时，用逗号分隔。
       transition-property: width, background-color;
       transition-duration: 5s, 5s;
       transition-delay: 1s;
    -->
   <!-- 过渡连写：
        transition: width 5s, background-color 5s linear 0s; 
   -->
   transition: 1s;//一般我为了添加过渡效果，就简单就一个秒数
   注意：各个浏览器的兼容不一样，请查看相关资料
 }

 div:hover {
   width: 300px;
   background-color: rgb(241, 124, 204);
 }
```

# Animation

与过渡不同的是，过渡必须人为的触发才会执行动画，动画不需要人为的触发就能执行。
满足以下3点，就能看到最基本的动画效果了。

### 动画属性：
 - animation-name (动画名称)
 
 - @keyframes [name] (动画帧)
 
 - animation-duration (动画持续时间)
 
 - animation-delay (延期多少秒开始)
 
 - animation-timing-function (控制过渡动画的速度)
    - linear 
    - ease （默认）
    - ease-in 
    - ease-out
    - ease-in-out 
    - cubic-bezier()
    
 - animation-iteration-count
    - infinite  无限次 | [number]（默认 1）
    
 - animation-direction (动画方向)
    - normal：(默认)(正常方向) 
    - reverse： (反方向运行) 
    - alternate：(动画先正后反方向运行)	
    - alternate-reverse：(先反后正方向运行)
    
 - animation-fill-mode (动画对象动画时间之外的状态)
    - none：默认值,不设置对象动画之外的状态 (对象原始状态>动画>对象原始状态)
    - forwards：设置对象状态 对象原始状态 为动画开始时的状态
    - backwards：设置对象状态 对象原始状态 为动画结束时的状	 	
    - both：设置对象状态为 动画开始为开始 动画结束为结束 （忽略原始状态） 
     			

 ```css
div {
    width: 50px;
    height: 50px;
    background: pink;
    animation-name: run; 
    animation-duration: 3s;    
}
@keyframes  run {
	10% {width:500px;background:red;}
	20% {width:500px;background:red;}
    /*合法值：0-100% from to*/
}
```
# Transform
 - ### transform 2D变换 
    - transform: translate(x, y)
        - x-angle 正值 下看（右拉）
        - y-angle 正值 右看（下拉）
    - transform: (x-angle, y-angle) 
    - transform: scale(x, y)
       - 如果取值是1，代表不变；大于1则放大，小于1则缩小
    - transform: scale(2) 
       - 相当于 transform: scale(2, 2)
    - transform: rotate(angle) 
       - angle旋转角度，deg为单位
    - transform-origin: x y (设置旋转元素的基点位置)
        - x 值：left | center | right | 百分比
        - y 值：left | center | right | 百分比
        
 - ### transform 3D变换 
    - transform-style(建立3D空间)
        - flat 默认,指定子元素位于此元素所在平面内
        - preserve-3d 指定子元素定位在三维空间内
    - perspective 视镜 查看 3D 元素的距离[none | length]
    - perspective-origin：x, y
        - X :定义基点被置于 X 轴的何处。值：left | center | right  
        - Y :定义基点被置于Y 轴的何处。值：left | center | right  
    - rotateX(angle) 
        - 定义沿着 X 轴的 3D 旋转。右侧看顺时针
    - rotateY(angle) 
        - 定义沿着 Y 轴的 3D 旋转。下看顺时针
    - rotateZ(angle) 
        - 定义沿着 Z 轴的 3D 旋转。 顺时针 
    - rotate3D(x,y,z,angle) 
        - x y z ，是表示你是否希望沿着该轴旋转，是为1，不是为0
        - angle：是一个角度值，主要用来指定元素在3D空间旋转的角度，[deg]
    - transform-origin: x y z(设置旋转元素的基点位置)
        - x 值：left | center | right | 百分比
        - y 值：left | center | right | 百分比
        - z 值：left | center | right | 百分比
```css
ul{
    width:800px;
    height:500px;
    margin:20px auto;
    border:1px solid red;
    transform-style:preserve-3d;/*3d舞台*/
    perspective:800px; /* 观看的距离*/ 
    perspective-origin:right top;/**/
    
}
ul li{
    list-style:none;
    width:200px;
    height:200px;
    transition:1s;
    transform-origin:center center;

}
```

# End
我的回顾就到这里，不知道你们学懂了没。基于上面的css知识点，我个人实现了一个css的3d旋转盒子动画(内部视角)
这里我就粘贴部分代码：
```css
*{margin:0;padding:0;}
/*省略*/
ul{
    /*省略*/
    transform-style: preserve-3d;
    transform-origin: center center 100px;
    animation:abc 20s infinite ;
    transform:rotateY(0deg) translateZ(400px);
}
@keyframes abc{
    0,25%{
        transform:rotateY(0deg) translateZ(400px);
    }
    26%,50%{
        transform:rotateY(90deg) translateZ(400px);
    }
    51%,75%{
        transform:rotateY(180deg) translateZ(400px);
    }
    76%,90%{
        transform:rotateY(270deg) translateZ(400px);
    } 
    91%,100%{
        transform:rotateY(360deg) translateZ(400px);
    }
}
    /*省略*/
```
*<small>源码</small>：<https://github.com/JhonLandy/Css3Animate>*
#### 有兴趣的同学一起可以深入讨论、研究！
