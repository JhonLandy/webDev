---
title: 源计划
---

<big>作者：糯米</big>

<big>日期：2021年2月10号</big>

# 源计划

## javascript

### 基础

### 谈谈你对原型链的理解？ ✨
原型是一个对象或者类实例的一个数据共享区。访问对象或者类实例的属性或方法时，先查找自身的属性或方法，如果找不到，继续查找原型。例如函数的portotype就是原型属性。

原型中保存着着另一个原型的引用，另一个原型又保存着另一个原型的引用，像这样的引用关系就叫做原型链。访问对象或者类实例的属性或方法时，先查找自身的属性或方法，如果找不到，继续查找原型，如果还找不到，继续查找下一个原型，直到结束，如果还找不到，返回undefind。对象或类实例通过继承实方式现原型链，能够复用父类对象，实例中的属性和方法。
我们还可以 通过hasOwnProperty判断属性是否在原型上，true表示不在。
### 如何判断是否是数组？
Array.isArray、instance of Array
### ES6模块与CommonJS模块有什么区别？


同步和异步是在于程序中的各个任务是否按顺序执行，异步操作可以改变程序的正常执行顺序。
阻塞和非阻塞就是发起调度，会不会挂起当前线程，停止执行代码，直到调度完才继续执行代码。
<br/>
异步加载：不按代码执行顺序加载。
<br/>
同步加载：按照代码的执行顺序加载，什么时候执行代码发起调度就什么时候调度。

#### AMD:
异步加载模块，不阻塞html等其他资源的加载（不阻塞线程），回调函数遵循时间循环（不一定按顺序执行）

#### CommonJS
1.单例模式
2.同步加载，按顺序执行代码，同时会阻塞当前代码执行（挂起当前线程）
3. 当有导入的时候（import或require）,都会暂停当前模块执行的代码，并产生一些奇妙的效果。（export fn,函数声明）（node环境）
#### es6:
1.单例模式
2.异步加载（挂起当前线程，先加载执行，之后再执行当前代码），不按顺序执行代码（异步），会挂起当前线程（阻塞）
3.当有导入的时候（import或require）,都会暂停当前模块执行的代码，并产生一些奇妙的效果。（export fn,函数声明）（浏览器环境）
4. 不能重新赋值
#### 相同：
都是单例模式，创建过的实例会被缓存。
当有导入的时候（import或require）,都会暂停当前模块执行的代码，并产生一些奇妙的效果。（export fn,函数声明）

#### 不同：
CommonJS先require同步加载（require时才加载执行，有一定的阻塞,更适合服务器，读取文件无需请求下载)，ES6异步加载（先加载执行完所有模块，再来执行当前代码（当前代码的函数声明会比加载模块靠前完成），适合浏览器）
commonJS使用的module.exports导出（对象是浅拷贝），es6采用export default等语法导出，导出的对象是直接引用。
es6 导出的对象不能重新赋值（会报错），commonjs不会.

- 聊⼀聊如何在JavaScript中实现不可变对象？
- JavaScript的参数是按照什么⽅式传递的？
- js有哪些类型?
  number,string,null,undefind,boolean
- 为什么会有BigInt的提案？


- null与undefined的区别是什么？
null 表示 空值

undefind表示 不是空值，表示值不存在
### 0.1+0.2为什么不等于0.3？
首先，计算时要将小数的10进制转换为标准机器读懂的编码，在这个过程中，因为位数原因，造成精度会顺损失，导致计算出的结果大于0.3
### 类型转换的规则有哪些？
if语句，while,==，数学运算符
### 类型转换的原理是什么？
当遇到转换规则时，则在内部代码会判断 值类型，好比如[] + 1,先调用valueOf()方法，发现类型不是原始值类型，接着再调用toString(),最后[]得到 ""转换，相当于""+1,结果为"1"
### js机制

### 解释下变量提升？✨
javascript代码在真正执行前会根据词法环境注册var、let、const声明的变量及声明函数。首先会进行函数的声明，给对应的标识符进行函数绑定，若标识符已存在，则覆盖之前的值。然后进行变量的声明。 若该变量（标识符）没注册过，则默认等于undefind。若声明了变量或函数，并在声明变量或函数语句前执行console.log打印变量，如果是变量则打印undefind，如果是函数则打印函数体。但let，const会报错，因为console.log处于暂时性死区。

### ⼀段JavaScript代码是如何执⾏的？✨
javascript是逐行执行的，执行的时候，首先会创建一个全局执行上下文，执行上下文里有词法环境，函数上下文等执行所需的变量，当遇到一个执行函数时，引擎会停止当前执行上下文的执行，创建一个函数执行上下文，并，压入执行栈，执行栈是用来管理跟踪当前执行上下文的位置，保存着全局执行上下文和所有的函数执行上下文，当函数执行完毕时，函数执行上下文弹出执行栈，相关的作用域等数据也随之回收，继续执行全局执行上下文。当前执行全局代码相当于执行宏任务，如果遇到宏任务，则把宏任务放到宏任务队列，等待下一次时间循环，如果是微任务，则放到微任务队列，等待在下一次宏任务执行前全部执行完毕。

### JavaScript的作⽤域链理解吗？✨
作用域就是在函数执行上下文中用于查找变量或函数。作用域又称词法环境，当函数执行时，就会生成，用于跟踪函数中声明的变量和函数。let、const声明的变量保存在块级作用域，var声明的变量放在名为local作用域。作用作用域有可能引用着父级作用域。
### 谈⼀谈你对this的了解？✨
this指的函数上下文，和函数执行上下文不是一个东西。this相当于一个动态的作用域，函数中，this可以是指向一个对象或全局对象window，或者undefind。通过call，bind，apply可以修改函数this的指向，严格模式下，this为undefind，在箭头函数中，this指向箭头函数所在执行上下文的函数上下文。
### 箭头函数的this指向哪⾥？✨
this指向箭头函数所在执行上下文的函数上下文
### 理解闭包吗？✨
闭包就是作用域的特殊应用（个人感觉差别不大）。在外部函数内声明内部函数时，闭包就创建了。闭包保存着内部函数所需要变量或函数（内部函数作用域没有的），并存在于作用域链上。只要有函数引用着闭包就不会消失（可能会引起内存泄漏问题），请不要多度使用闭包，或者清空无用的函数。（let fn = null）
### 实现bind和call两个方法
```js

Function.portotype.call = function(content, ...args) {
    content.fn = this
    const result = content.fn(...args)
    content.fn = null
    return result
}
Function.portotype.apply = function(content = window, args = []) {
    content.fn = this
    const result = content.fn(...args)
    content.fn = null
    return result
}
Function.portotype.bind = function(content = window, ...args) {
    const fn = function(...local) {
        if (this instanceof fn) {
          content = this
        }
        this.apply(content, args.concat(local))
        content.fn = null
        return result
    }
    fn.portotype = Object.create(this.portotype)
    return fn
}

```
### js内存

### 讲讲JavaScript垃圾回收是怎么做的？
js对象 种类分为分新生代和老生代，新生代分配的攻坚比老生代小很多，新生代主要存储着很快不用的对象，老生代存储着长期存活的对象（window等），新生代的对象在多次回收中都没被回收，会晋升为老生代。变量那些数据会随着 执行上下文的销毁被回收。回收垃圾前，会对对象进行标记，从根对象往下遍历并标记，能遍历的为可达，不能遍历为不可达，之后会回收不可达的对象。

### JavaScript的基本类型和复杂类型是储存在哪⾥的？
基本类型存储在栈内存里面，复杂类型存储在堆内存
### 异步

### async/await 是什么？
async/await 是 promise的语法糖，允许 一组 promise 对象 按照一定顺序执行。

1. async声明一个异步函数
2. 异步函数默认返回promise对象
3. 异步函数内部执行到await时，会暂停当前执行上下文执行，直到promise 有返回结果
4. await 只能在异步函数使用
5. 异步函数中所有的promise执行完成后，异步函数返回的promise对象才会执行then方法

与promise的优势：
解决回调地狱，以同步方式编写代码，代码更加优雅
方便调试

### dom
- DOM的事件模型是什么？
脚本模型，内联模型，动态绑定
```html
<!--⾏内绑定：脚本模型--> 
<button onclick="javascrpt:alert('Hello')">Hello1</button> 
<!--内联模型--> 
<button onclick="showHello()">Hello2</button> 
<!--动态绑定--> 
<button id="btn3">Hello3</button>
```
- DOM的事件流是什么？
事件流又称为事件传播，指发生 行为交互时触发相应事件，触发时按照一定顺序传递事件。事件传播分为三个阶段，捕获阶段，目标阶段，冒泡阶段。当事件发生时，先触发，捕获事件，再触发目标事件，最后再触发冒泡事件，一直往上冒泡。
- 什么是事件委托?
在元素的最外部元素统一绑定事件，最外部元素内部的任何元素无需绑定事件，只要触发事件，事件就会冒泡到最外部元素，执行绑定的事件。
1. 好处 
减少内存占用
1. 坏处
focus、blur 之类的事件本身没有事件冒泡机制，所以⽆法委托 
mousemove、mouseout 这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗⾼，不适 合事件委托
### bom



## css

### 基础

### CSS选择器的优先级是怎样的？✨
不同选择的优先级不一样。如果按优先级分类abcd,a包含行内样式（1），b包含id选择器，c包含类选择器，伪类和属性选择符个数（n）,d包含类型选择器和伪元素个数。abcd不同种类的选择器个数按照abcd顺序拼接，得到的值最大的，优先级最大
- link和@import的区别？

link：


import
1. 增加请求数目
（影响页面加载速率）

建议会用link，尽量少用import

### 有哪些⽅式（CSS）可以隐藏⻚⾯元素？
display:none
visbility:hidden
opacity: 0
### em\px\rem区别？
他们都会字体大小的单位。
px是一个基础的单位，描述字体显示的大小
em 是基于父级元素字体大小来计算，如父元素字体为12px，子元素1em，那么子元素字体大小就是(12 x 1 )px
rem 是基于html字体大小来计算,同理em

### 块级元素⽔平居中的⽅法？
```css
 margin: 0 auto;

 //浮动
 position：absolute

 left：50% - 自身宽度一半

 // 弹性盒子
 父元素 display: flex
 子元素 align-items：center

```
### CSS有⼏种定位⽅式？

3种。
1. static默认的。
2. absolute。参考包含块（position为非static）定位（top,left）,r如果没有可参考的position包含块，就以html根元素作为包含块参考。不占用原来空间
3. relative。参考原来的位置做偏移，偏移后仍占据原来的空间
4. fixed 相对于浏览器窗口进行定位。
- 如何理解z-index？✨
z-index属性 控制 层叠上下文中层叠元素次序。
层叠上下文中 不同元素 层叠顺序不一样。它们是按照这样的规则排序。z-index 为 负 positioned元素 > 非positioned block元素 > 非positioned float元素 >  非positioned inline元素 > positioned z-index为0或者auto的元素 > positioned (z-index > 1 )元素.z-index 控制 positioned元素离屏幕的距离（堆叠次序）

### 如何理解层叠上下⽂？✨
z-index 不为auto的定位元素会在 一定 空间按照 堆叠次序 排序（里屏幕的距离），这个空间就叫做层叠上下文。z-index不为auto的定位元素、opacity小于1 的元素、ransform 属性值不为 none的元素、perspective 值不为 none 的元素都会创建自己的层叠上下文，层叠上下文的堆叠次序，不会影响外部的堆叠次序。

### 清除浮动有哪些⽅法？
1. 给 父元素 添加伪元素 
2. 给父元素设置为BFC（块级格式化上下文），如：overflow 不是 visible元素、绝对定位元素、浮动元素、display为inline-block元素。
### 你对css-sprites的理解
css-sprite就是雪碧图，把许多图片整合到一张图，减少网页请求次数，提升网页加载速度，提高体验。以后有图标要扩展的时候，只需在一张图添加就可以了。很方便。
- 你对媒体查询的理解？
### 你对盒模型的理解？✨

页面中所有元素都看作是一个矩形盒子，这个盒子包含元素的内容，内边距(padding)，外边距（marign），边框(border)。我们通过css样式（浮动，定位，行内块）设置盒子的属性（宽高，边框）和布局。盒子有块级盒子，行内盒子（在行盒子里头）。常规块级盒子里有相邻外边距折叠（折叠发生在常规块级盒子，行内盒子，浮动元素，绝对定位盒子（absolute或fixed）不会发生外边距折叠）等特性，垂直外边距对行内盒子没影响等特性。当然可以通过border-sizing：border-box改变计算盒子的大小方式。

- 标准盒模型和怪异盒模型有什么区别？✨

### 谈谈对BFC(Block Formatting Context)的理解？ ✨
BFC顾名思义就是块级格式化上下文。overflow不为auto的元素，浮动元素，绝对定位，display为inline-block之类的元素都可以自己创建内部的块级格式化上下文。BFC中，会有外边距重叠（相邻的外边距会重合，取最大值），会自动包含 浮动元素。块级盒子左边距默认和包含块左边距对齐。防止文字环绕浮动元素。防止相邻元素外边距重叠（但同一个bfc上下文会发生外边距折叠，只能防止不同bfc元素外边距折叠）

### 为什么有时候⼈们⽤translate来改变位置⽽不是定位？
translate性能比 定位性能要好。因为 定位会放生浏览器重绘和复合，translate只会发生复合；tranlate会创建一个GPU图层使用，定位元素却是用cpu，tranlate更高效。

### 伪类和伪元素的区别是什么？
伪类：如:focus,:link,:visited,:active,:hover,用于给元素在特定状态添加样式
伪元素: 如:before,:after,:first-letter(第一行)。可以减少页面 元素的个数，无需添加额外的元素标签就可以给页面添加css效果

### 你对flex的理解？✨
- flex布局是一维布局，控制垂直、水平方向的排序方式， 有交叉轴和主轴，主轴默认是水平方向。二位布局的有grid布局。

- flex的直系子元素就是felx元素，flex元素有以下特性：
    1. 水平方向自动排序。
    2. 宽度不会拉伸，可以被压缩。
    3. 高度会被自适应拉伸
    4. 不会自动换行
    5. 里面的非定位元素也可以通过z-index控制层叠次序（网格布局同理）
- 属性
  1. row-reverse 或 row-cloumns 改变 某个方向的排序方向
  2. flex-direction 改变默认的主轴方向
  3. flex-wrap 設置是否換行
  4. flex-grink/flex-grow/flex-basic控制伸縮比例，寬度
  5. justify-content 用来使元素在主轴方向上对齐
  6. align-item 控制flex元素在交错轴的排序方式，（单行）
  7. align-ocntent （多行）
  8. align-self 只控制flex元素自身 

- 优势： 
可用于设置水平方向的布局。解决行内块（留白问题），浮动（浮动元素不能随空间变化而变化），表格水平布局（不能应用外边距，不能排序）带来的一些问题。flex布局会忽略float和display属性（通常设置float和display用于向后兼容），少量代码可以简单实现水平布局。里面的非定位元素也可以通过z-index控制层叠次序（网格布局同理）
- 缺陷：
不好的就是，刚打开页面时，元素开始计算（变大），造成页面跳动的，体验不好，通常给元素设置固定宽高，可以减少影响。

### 关于CSS的动画与过渡问题

### css3新特性
- box-reflect(倒影，含图片遮罩)
```css
  -webkit-box-reflect:方向[ above-上 | below-下 | right-右 | left-左 ]，偏移量，遮罩图片
```
<p style="height: 649px">
  <img 
    src="https://img0.baidu.com/it/u=103721101,4076571305&fm=26&fmt=auto&gp=0.jpg"
    style="box-reflect: below 0 url(https://segmentfault.com/img/bVTepE?w=200&h=200)"
  />
</p>

- text-shadow(文字阴影)
```css
text-shadow: 水平阴影，垂直阴影，模糊的距离，以及阴影的颜色
```
<p style="text-shadow: 0 0 10px #f00">哈喽</p>

- background-blend-mode/mix-blend-mode混合模式
- Filter(滤镜)
- 渐变
  1. 线性渐变（-webkit-linear-gradient)	
  2. 径向渐变（-webkit-radial-gradient)
- 颜色
  1. rgba(rgb为颜色值，a为透明度）
  2. hsla(h:色相”，“s：饱和度”，“l：亮度”，“a：透明度”)
- background-clip(绘制（显示）区域)
  1. border-box （默认值，从边框绘制）
  2. padding-box(从padding绘制)
  3. content-box(从内容绘制)
## html

### doctype(⽂档类型) 的作⽤是什么？✨

声明浏览器解析类型，声明浏览器按照html5的标准解析 html和css内容。

浏览器浏览的类型有 怪异模式（不声明doctype，默认是这个模式），标准模式。
js通过 window.document.compatMode可以知道 当前浏览器模式。
怪异模式下，盒子的宽度是包括 边跨 + 内边距 + 实际内容，怪异盒子，还有一些css不被浏览器识别 ！important。

标准模式下，浏览器按照w3c标准解析文档，就算是跨浏览器也不会出现页面不一致问题。

### 这三种模式的区别是什么？(接上⼀问追问)
怪异模式下，盒子的宽度是包括 边跨 + 内边距 + 实际内容，怪异盒子，还有一些css不被浏览器识别 ！important。

标准模式下，浏览器按照w3c标准解析文档，就算是跨浏览器也不会出现页面不一致问题。

ie8有一介于两种模式之间的模式（基本淘汰）
### HTML、XML 和 XHTML 有什么区别？
HTML(超⽂本标记语⾔):就是我们平时所用到的html元素
XML（可扩展标记语⾔）：是一种通用的数据传输 标准（不管是在什么地方），作用和json类似。
XHTML（可扩展超⽂本标记语⾔)）：以前html4版本以前 标准比较混乱，所以XHTML是HTML的新规范（用xml规范html），通过开头doctype 声明。现在XHTML被淘汰了，现在是HTML5新一代的规范。
### 什么是data-属性？
html的数据属性，可以通过js操作dom的dataset属性获取数据（ie9）.有了前端框架，现在不流行了
### 你对HTML语义化的理解？✨
使用恰当语气的表情，如文章就是用article。
好处：
更好的seo，提升搜索排名
对开发者友好，标签知名达意，增强可读性，能够清晰看出网页结构，便于维护（避免div麻疹）
能够让阅读器理解，帮助听力有障碍的人阅读
### HTML5与HTML4的不同之处
1. ⽂件类型声明（<!DOCTYPE>）仅有⼀型：<!DOCTYPE HTML>。 
2. 新的解析顺序：不再基于SGML。 
3. 新的元素：section, video, progress, nav, meter, time, aside, canvas, command, datalist, details, embed, figcaption, figure, footer, header, hgroup, keygen, mark, output, rp, rt, ruby, source, summary, wbr。 input元素的新类型：date, email, url等等。 
4. 新的属性：ping（⽤于a与area）, charset（⽤于meta）, async（⽤于script）。
### 有哪些常⽤的meta标签？
```html
//设置移动端 显示
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

initial-scale 初始显示的比例，1表示默认尺寸
maximum-scale 最大可放大的比例，1表示不能的放大
//设置http缓存过期日期
<meta http-equiv="expires" content="Wed, 20 Jun 2019 22:33:00 GMT">

//设置文档格式
<meta charset="utf-8">
```
### src和href的区别？
src指向的外部资源，通过src指定的资源地址，会请求下载外部资源，并（执行）应用到文档，如css，js
href是 指网络资源的地址，通常是连接标签元素和 其他文档，如果地址是指向文件，会现在文件。
### 知道img的srcset的作⽤是什么？（追问）
srcset数属性是用来设置响应式图片。因为在手机端上或者分辨率很小的设备上，不需要很大的图片，这样会造成更多流量的使用（用户可能不愿意）和 很多的处理器处理时间和内存。srset属性设置一组图片的地址（逗号分隔），根据不同设备的分辨率下载对应的图片（这个和浏览器的算法有关）。如果不需要根据分辨率大小来切换图片，也可以设置sizes属性（媒体所声明的宽度）去选择图片（声明宽度 * 物理像素与css像素比 < srcset 声明的宽度描述值（400w））
### 还有哪⼀个标签能起到跟srcset相似作⽤？（追问）
picture.一个picture可以包含多个source，如果浏览器匹配到合适的source，就让source要显示的内容在img上显示，如果浏览器不支持该语法和没有匹配到，则img标签的src作为兜底属性。
### script标签中defer和async的区别？✨
他们都是script便签上的属性，都是让js文件进行异步加载。defer规定脚本在dom解析完后按照下载顺序执行。async先下载完先执行（有先后依赖关系的情况，并不适⽤），可能会阻塞html解析，也有可能导致获取不到没解析的dom元素。
### 有⼏种前端储存的⽅式，这些⽅式的区别是什么？✨
localStorage，sessionStorage， cookie，indexDB，Web SQL
- localStorage可以存储 5m大的数据，不手动清除，是不会随着浏览器推出而清除。
- sessionStorag同样是5m的数据，浏览器tab退出时就会清除数据，有相关事件，不能在同源窗口公用，会话级别存储。
- cookie，通常只能存储4kb的数据，通常不会存放敏感的数据，会自动随着请求头带到服务器，
- indexDB，是被正式纳⼊HTML5标准的数据库储存⽅案，它是NoSQL数据库，⽤键值对进⾏储存，可以进⾏快 速读取操作，⾮常适合web场景，同时⽤JavaScript进⾏操作会⾮常⽅便
- Web SQL 2010年被W3C废弃的本地数据库数据存储⽅案，但是主流浏览器（⽕狐除外）都已经有了相关的实 现，web sql类似于SQLite，是真正意义上的关系型数据库，⽤sql进⾏操作，当我们⽤JavaScript时要进⾏转换， 较为繁琐。
## http

### HTTP有哪些⽅法？这些⽅法的具体作⽤是什么？
1. GET
- 无请求体
- 有响应体
- 安全（不会修改服务器状态）
- 冥等（发请求多次的过也是等于一次的效果）
- 缓存
- 可用于表单提交
2. POST（增删查改，但不是标准，增加一条数据不要用patch）
- 有请求体
- 有响应体
- 不是幂等，多次调用多次请求，多次改变服务器状态（如增加一条数据）
- 不安全（会改变服务器状态）
- 可用于表单提交
- 有效缓存（仅当包含新鲜度信息时）
3. PUT（对已知的资源进行替换；替换资源）
- 有请求体
- 没有响应体
- 冥等
- 不安全
- 不缓存
- 不可用于表单提交
4. OPTION （预检测）
5. DELETE （删除资源）
- 没请求体
- 没响应体
- 冥等（多次删除同一id的数据，会返回404）
- 不能等用于 表单
- 不能缓存
- 不安全
6. CONNECT（建立隧道，发送tcp流）
7. TRACER（用于调试才测试）
8. PATCH（对已知资源进⾏局部更新、修改）
- 有请求体
- 有响应体
- 多次请求多次调用
- 不安全
- 不缓存
- 不可用于表单提交
9. HEAD（用于获取一个文件大小 再来判断是否需要下载）
- 没有请求头
- 没有响应头
- 不可用于表单提交
- 安全
- 冥等
- 没缓存
### GET和POST有什么区别？
- get表示获取资源，psot表示 修改资源（类似的有patch）
- get会被缓存。 post不会
- get没有请求体。post有
- get安全，post不安全
- get是冥等，psot不是
### PUT和POST都是给服务器发送新增资源，有什么区别？
- PUT幂等性，post没有
- put没有响应体（返回的数据），post有
- put不能用于表单提交，post可以
- tips:put和psot本身都可以用来创建资源
### PUT和PATCH都是给服务器发送修改资源，有什么区别？
PUT的用意是直接（覆盖）替换资源，Patch只是修改已知服务器资源
put 冥等，patch不是冥等

### POST和PATCH都是给服务器发送修改资源，有什么区别？
post可以用于创建资源，patch旨在对已知资源进行修改

### http的请求报⽂是什么样的？
- 请求行
描述请求方法，http协议版本， URL字段
- 请求头部 
有一些属性，content-type，host，user-agent
- 请求体（put,post用在存放要运输的数据）

### 聊⼀聊HTTP的部⾸有哪些？
1. 通用：
实体⾸部字段（Entiy Header Fields）:针对请求报⽂和响应报⽂的实体部分使⽤⾸部 
- Allow 资源可⽀持http请求的⽅法 ✨ 
- Content-Language 实体的资源语⾔ 
- Content-Encoding 实体的编码格式 
- Content-Length 实体的⼤⼩（字节） 
- Content-Type 实体媒体类型 38
- HTTP⾯试题 Content-MD5 实体报⽂的摘要 Content-Location 代替资源的yri Content-Rnages 实体主体的位置返回 Last-Modified 资源最后的修改资源 ✨ Expires 实体主体的过期资源 ✨
一般字段
- Cache-Control 控制缓存 ✨ 
- Connection 连接管理、逐条⾸部 ✨ 
- Upgrade 升级为其他协议 
- via 代理服务器的相关信息
- Wraning 错误和警告通知 
- Transfor-Encoding 报⽂主体的传输编码格式 ✨ 
- Trailer 报⽂末端的⾸部⼀览 
- Pragma 报⽂指令 Date 创建报⽂的⽇期
2. 请求头
- Accept 客户端或者代理能够处理的媒体类型 ✨ 
- Accept-Encoding 优先可处理的编码格式 
- Accept-Language 优先可处理的⾃然语⾔ 
- Accept-Charset 优先可以处理的字符集 
- If-Match ⽐较实体标记（ETage） ✨ 
- If-None-Match ⽐较实体标记（ETage）与 If-Match相反 ✨ 
- If-Modified-Since ⽐较资源更新时间（Last-Modified）✨ 
- If-Unmodified-Since⽐较资源更新时间（Last-Modified），与 If-Modified-Since相反 ✨ 
- If-Rnages 资源未更新时发送实体byte的范围请求 
- Range 实体的字节范围请求 ✨ 
- Authorization web的认证信息 ✨ 
- Proxy-Authorization 代理服务器要求web认证信息 
- Host 请求资源所在服务器 ✨ 
- From ⽤户的邮箱地址 
- User-Agent 客户端程序信息 ✨ 
- Max-Forwrads 最⼤的逐跳次数 
- TE 传输编码的优先级 
- Referer 请求原始放的url
- Expect 期待服务器的特定⾏为
3. 响应头
- Accept-Ranges 能接受的字节范围 
- Age 推算资源创建经过时间 
- Location 令客户端重定向的URI ✨
- vary 代理服务器的缓存信息 
- ETag 能够表示资源唯⼀资源的字符串 ✨ 
- WWW-Authenticate 服务器要求客户端的验证信息 
- Proxy-Authenticate 代理服务器要求客户端的验证信息 
- Server 服务器的信息 ✨ 
- Retry-After 和状态码503 ⼀起使⽤的⾸部字段，表示下次请求服务器的时间
### 聊⼀聊HTTP的状态码有哪些？
1. 2xx成功
- 200请求成功
- 202 Accepted 请求已接受，但是还没执⾏，不保证完成请求
- 204 响应体没有数据
2. 3xx重定向
- 301 永久性重定向
- 302 found，临时性重定向，表示资源临时被分配了新的 URL ✨ 
- 303 see other，表示资源存在着另⼀个 URL，应使⽤ GET ⽅法丁⾹获取资源 
- 304 not modified，表示服务器允许访问资源，但因发⽣请求未满⾜条件的情况 
- 307 temporary redirect，临时重定向，和302含义相同
3. 4xx客户端错误
- 400 bad request，请求报⽂存在语法错误 ✨
- 401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息
- 403 orbidden，表示对请求资源的访问被服务器拒绝 ✨
- 404 notfound,没找到资源
4. 5xx服务端错误
- 500， 服务器在执行请求时发生错误
- 501 Not Implemented 请求超出服务器能⼒范围，例如服务器不⽀持当前请求所需要的某个功能，或者请求是服务 器不⽀持的某个⽅法 
- 503 service unavailable，表明服务器暂时处于超负载或正在停机维护，⽆法处理请求 
- 505 http version not supported 服务器不⽀持，或者拒绝⽀持在请求中使⽤的 HTTP 版本
### HTTP的keep-alive是⼲什么的？
每次创建连接的时候都要耗费资源和时间（tcp三次握手），为了解决这样的问题，可以重用连接，不关闭连接，下次发送请求时继续使用这个连接。在请求头设置connection: keep-alive
### 为什么有了HTTP为什么还要HTTPS？
https是安全版的http，因为http协议的数据都是明⽂进⾏传输的，所以对于⼀些敏感信息的传输就很不安全，HTTPS就
是为了解决HTTP的不安全⽽⽣的。
### HTTPS是如何保证安全的？
- 对称加密就是用一个密钥 来进行数据加密解密
- 非对称加密就是用公钥来加密，对应的私钥解密，私钥加密，对应的公钥才能解密。
- https协议是结合非对称解密和对称加密来进行通信的。先用非对称加密来传输密钥，然后双方再用密钥进行文明的加密和密文的解密。
如果只是用对称加密，那么密钥有可能被中间人盗取，信息会泄密，那么客户端和服务端都需要传递各自的公钥，双方再结合自己的私钥、公钥还有其他数据（随机数，服务器信息），通过ECDHE算法计算通信所用的会话密钥（双方计算的密钥是一样的）。那么公钥也可能是中间人伪造的（中间人代替客户端发送公钥），那么就需要属于自己（服务器或客户端）CA的签名证书去验证公钥，但是签名证书（其中一端的通过私钥生成CSR和ca的证书和私钥生成的，就是将证书内容通过HASH算法生成一个摘要，再用私钥进行加密）的真伪性同样也需要验证，需要CA的证书和公钥去验证（用私钥解密的内容得到摘要，在进行对比验证真伪性，正确的话，用得到的摘要用公钥解密，对比服务名称，ip地址等，如果没问题，则证明公钥是正确的。），一般知名机构的CA的证书都会放在浏览器，自动完成验证，否则需要企业自己去验证。

如果使用非对称加密，每次传送数据就非常慢，经过很多繁琐的验证步骤。
### 但是问题来了，如果中间⼈篡改了证书，那么身份证明是不是就⽆效了？这个证明就⽩买了，这个时候需要⼀个新的技术，数字签名。

### HTTP2相对于HTTP1.x有什么优势和特点？
- 二进制分层帧。
帧就是http2数据的最小单位，每一帧都有一个streamID.
二进制传输代替原本的明文传输，原本的报文消息被划分为更小的数据帧，二进制更容易被解析
- 多路复用
同一个域，一次tcp连接可用于多个请求，可以不断地像服务端发送帧，然后服务器根据每一帧的sreamID拼接一整块数据。http1.x协议多个请求多个tcp连接，而且同一个域最多可有4个tcp连接的建立。http2相比HTTP1，能节省更多的资源和时间。
- 头部压缩
- 服务端推送
浏览器发一个请求，服务器可以主动向浏览器推送和这个请求相关的资源，不用浏览器发起后续请求。
### HTTP的缓存的过程是怎样的？
- 客户端发起资源请求
- 服务器返回资源，并标记该资源是否缓存
- 如果缓存，客户端就缓存
- 下次客户端发起请求相同资源时，先去服务端验证资源的有效期，
- 如果有效，则直接应用缓存，无效则服务器返回最新资源
### 什么时候会触发强缓存或者协商缓存？
#### 强缓存
- Expires
  -
  Wed, 11 May 2018 07:20:00 GMT
  - 介绍
  它描述的是⼀个绝对时间，由服务器返回。如果修改了本地时间，会有影响。
- cache-control
-格式：
max-age=315360000
-介绍
描述是一个相对时间。优先级比 expires高，目前主流是使用这种方式。
- 还有其他值表示
  - cache-contol: no-cache.先缓存本地，但是在命中缓存之后必须与服务器验证缓存的新鲜度才能使⽤
  - Cache-Control: no-store，不会产⽣任何缓存
  - Cache-Control: public可以被所有⽤户缓存，包括终端和CDN等中间代理服务器 
  - Cache-Control: private只能被终端浏览器缓存，不允许中继缓存服务器进⾏缓存

#### 协商缓存
当cache-control或expires过期，cache-control为no-cache，就去和服务器协商，看看缓存和服务器资源版本是否一致，一致返回304，不一致就返回新的资源

### 服务器判断缓存是否是新鲜的⽅法就是依靠HTTP的另外两组信息
- last-Modify-Since/if-Modify-Since
服务端返回 last-Modify-Since的时间，当资源过期了，再发起一个请求时就会与服务器协商，根据请求中的if-Modify-Since的值（last-Modify-Since的时间）判断资源是否最新
- Etag/If-None-match
Etag存放内容摘要，当资源过期了，再发起一个请求时就会与服务器协商，根据请求中的If-None-match值判断资源是否最新。精度比last-Modify-Since/if-Modify-Since高
### http的整个流程，涉及tcp/ip协议

### TCP粘包是怎么回事，如何处理? ✨
发送数据包时，服务器会启用延迟发送算法，短时间内，可能会会缓冲几个数据包，然后发送的时候，可能会有一个或多个包。主要是节省网络资源的目的
解决：. 多次发送之前间隔⼀个等待时间；关闭算法；数据分包（在数据上做标记，在分开组合完整的数据），
### 为什么udp不会分包
1. TCP协议是⾯向流的协议，UDP是⾯向消息的协议 
2. UDP段都是⼀条消息，应⽤程序必须以消息为单位提取数据，不能⼀次提取任意字节的数据
3. UDP具有保护消息边界，在每个UDP包中就有了消息头（消息来源地址，端⼝等信息），这样对于接收端来说就容易 进⾏区分处理了。
### IOS7层模型
应用层 > 表示层 > 会话层 > 传输层 > 网络层 > 链路层 > 物理层
### 讲⼀下三次握⼿？
客户端 向服务器 发起 请求，申请简历连接，这是第一次握手。
服务端收到请求，同意连接，然后返回确认的信号，这是第二次握手。
客户端收到服务端回应后，确认可以建立连接，然后建立tcp连接了，这是第三次握手。
### 讲⼀下四次握⼿？
客户端想关闭连接，向服务器发起了申请（1）
服务端收到后，接受客户端关闭连接，但还准备好关闭连接。（2）
服务端准备好关闭后，告诉客户端，我可以了（3）
客户端收到服务端 回应，然后对服务器说，你关闭吧。之后服务器关闭了，客户端等待了某个固定时间（两个最⼤段⽣命周期，2MSL，2 Maximum Segment Lifetime）之后，没有收到服务器端的 ACK ，认为服务器端已经正常关闭连接，于是⾃⼰也关闭连接，进⼊ CLOSED 状态。（4）
### 如何理解 TCP backlog？
#### backlog 指的 是连接缓冲队列，缓存服务器无法立即处理的握手请求。

- 有两种情况：
    - 只有一个队列，队列包含 状态为SYN RECEIVED（已接收syn包） 或 ESTABLISHED（已连接）的 连接
    - 有个队列，一个是syn队列，一个是accept队列，syn队列缓存SYN RECEIVED的连接，⻓度系统级别可设置，accept接受  ESTABLISHED（已连接）（等待被消费）的连接，backlog参数控制accept队列最大限制个数。一般我们的服务器是采用 第二种方案。
- 过程
    - 当客户端发起请求的时候，发送syn包。
    - 服务器接听到（listen）,接收到了syn包，把状态为SYN RECEIVED 的连接放入SYN队列，发回SYN/ACK确认包。
    - 客户端收到收到SYN/ACK包后，发送ACK包，客户端状态变为ESTABLISHED（已连接，此时服务器还不是ESTABLISHED状态，如果发送数据有可能重传，好在-服务器这时限载了最大的发送数据大小），服务器接收包后，状态变为ESTABLISHED（已连接）。
- 问题
    - 如果accept队列满了，服务器会强制限制 SYN 包的接收速率，会不断重复发送SYN/ACK包，客户端认为发送的ACK包丢失（正常情况，S客户端接收YN/ACK包后发送ACK包），反复重试，发送ACK包给服务器，直到banklog（accept队列有空位）减少，协议栈处理ACK包，然后把SYN队列中的连接状态改为ESTABLISHED（已连接），别移动到accept队列。否者服务器发送RST包，让请求异常。
    - 如果syn队列满了，如果连接处理时间过长，服务端丢弃SYN包（(⽽不是回⼀个 RST 包），以便客户端会重新发syn包，直到可以为止。
- 其他
banklog可以控制大小，什么时候扩大，什么时候扩小。
- 扩小
 1. 无用syn包越来越多（响应时间超多tcp超时重传时间）
 2. 服务器性能下降
 3. 常遭受syn flood攻击时

- 扩大
1. 服务器性能好，请求频繁
2. RRT往返时间 较长时

## 浏览器原理
### 常⻅的浏览器内核有哪些?
  - 浏览器-渲染引擎-js引擎
  - 苹果浏览器（Safari）-webkit-JavaScriptCore,
  - 谷歌-Blink(基于webkit封装)-V8, 
  - 火狐-Gecko-SpiderMonkey
  - IE-Trident-Chakra(for JScript)
  - Edge-EdgeHTML-Chakra
  - Node-无-V8
### 浏览器的主要组成部分是什么？
- 用户界面
- 浏览器引擎，负责传递用户界面的指令到呈现引擎
- 呈现引擎，解析HTML、CSS，呈现内容。
- 网络，用于处理网络请求，如HTTP请求
- 用户界面后端，绘制用户界面窗口，在底层调用操作系统接口
- js解析器，解析和执行js代码
- 数据储存，如cookie
### 浏览器是如何渲染UI的？
  - 解析html元素，生成dom节点树
  - 解析css，生成cssom树
  - 结合cssdom和dom树（基于css选择符匹配dom节点），生成渲染树，渲染树没有head，meta,title元素，包括display：none的元素。
  - 布局（计算每个节点的渲染属性，位置，大小）
  - 根据渲染树的数据绘制（计算元素在屏幕所占的像素）。如果与某部分任务不影响显示内容荣，则把绘制拆分成不同的任务（层）。例如动画需要GPU硬件加速，把像个元素提升到合成层，避免绘制的发生。
  - 把页面和层合并（渲染结果）
  - 然后层现画面
### 浏览器如何解析css选择器？
1. 解析HTML生成DOM树，同时下载css
2. 解析css，生成cssRule
3. 根据css选择器信息，遍历dom树，赋予相应节点的样式
- 遍历顺序是重右到左，因为这样可以筛选掉一部分没用的元素
```css
.ab nav span {
  ...
}
```
- 先在树找到span。
- 然后再往上找nav。
- 然后找到nav再往上找ab。
### DOM Tree是如何构建的？
1. 解析下载html的的⼆进制数据，通过解码器将数据转为真正的html字符串
2. 解析html。生成token（ast树）
3. 构建node，并对node添加父节点，兄弟节点等引用
4. 根据节点关系建立dom树

### 浏览器重绘与重排的区别？
重排需要重新计算元素渲染属性，然后重排，要重复这个过程。
重绘，不一定会发生重排，重排一定会发生重绘
### 如何触发重排和重绘？
- 重排（布局），改变元素大小，定位。需要重绘，再重排。
- 改变颜色只会触发重绘，因为不需要重新计算渲染属性，只需要执行重绘
- 添加、删除、更新DOM节点 
- 通过display: none隐藏⼀个DOM节点-触发重排和重绘 
- 通过visibility: hidden隐藏⼀个DOM节点-只触发重绘，因为没有⼏何变化 
- 移动或者给⻚⾯中的DOM节点添加动画 
- 添加⼀个样式表，调整样式属性 
- ⽤户⾏为，例如调整窗⼝⼤⼩，改变字号，或者滚动
### 如何避免重绘或者重排？
1. 把样式修改，放到一个样式，然后修改样式时，替换样式名称就可以。
2. 提升到合成层，比如使用tranform，opacity属性。他们把元素提升到合成层，发送到GPU处理，并且缓存下来，不会引起浏览器重绘。
  - 优化合成层：
    1. 避免使用隐式合成层，不仅会发送数据到GPU，还会引起一次重绘
    2. 不能压缩合成层
    3. will-change,告诉浏览器即将要渲染什么，让浏览器提前准备好，比如复杂的动画，就比较好，否则没必要，因为需要一定内存空间。
  - 触发合成层的属性有，tranform,opacity,filter,postioned:fixed,`<video>`，`<canvas>`和`<iframe>`元件,3D转换：translate3d，translateZ

3. 通过DocumentFragment创建一个游离的节点，然后在这个节点上批量操作，然后插到html中
```js
  var fragment = document.createDocumentFragment();
  for (let i = 0;i<10;i++){ 
    let node = document.createElement("p"); 
    node.innerHTML = i; 
    fragment.appendChild(node); 
  }
  document.body.appendChild(fragment);
```
3. 
### 前端如何实现即时通讯？
- 短查询，浏览器隔一段时间查询
  - 优点: 兼容性强，实现⾮常简单
  - 缺点：延迟性⾼，⾮常消耗请求资源，影响性能
- websocket(是⼀个全新的、独⽴的协议，基于TCP协议,其作⽤就是在服务器和客户端之间建⽴实时的双向通信)
  - 优点：真正意义上的实时双向通信，性能好，低延迟
  - 缺点：独⽴与http的协议，因此需要额外的项⽬改造，使⽤复杂度⾼，必须引⼊成熟的库，⽆法兼容低版本浏览器
- SSE(Server-Sent Events)
  - 优点：基于HTTP⽽⽣，因此不需要太多改造就能使⽤，使⽤⽅便
  - 缺点：基于⽂本传输效率没有websocket⾼，不是严格的双向通信，客户端向服务端发送请求⽆法复⽤之前的连 接，需要重新发出独⽴的请求
- comet
  - comet有两种主要实现⼿段，⼀种是基于 AJAX 的⻓轮询（long-polling）⽅式，另⼀种是基于 Iframe 及 htmlfile 的流 （streaming）⽅式，通常被叫做⻓连接。
  - 优点：兼容性好，资源浪费较⼩ 
  - 缺点：服务器hold连接会消耗资源，返回数据顺序⽆保证，难于管理维护
### 什么是浏览器同源策略？
- 协议，域名，端口一致就是同源，任何一个要素不一致，就是非同源，都会出现跨域的问题。
- 浏览器中的⼤部分内容都是受同源策略限制的，但是以下三个标签可以不受限制：
```html 
<img src=XXX /> 
<link href=XXX /> 
<script src=XXX></script> 
```
### 如何实现跨域？
- jsonp
- 代理转发（nigix，node服务器）
- 后端允许跨域
<http://taligarsiel.com/Projects/howbrowserswork1.html>

## 算法基础

- 选择排序
- 插入排序
- 希尔排序
- 归并排序
- 快速排序
- 二分查找

## 网络安全
- 有哪些可能引起前端安全的的问题?

  1. XSS(Cross-site-script,跨站脚本)攻击
    - 注入型
        - 浏览器网址输入参数，例如127.0.0.1?from=<\srcipt>alert(1)<\/sctript>，等收到响应后执行恶意代码
        - 插入script节点，浏览器下载解析执行脚本
        类似javascript代码存储在数据库，每个访问的用户打开网页就能下载外部脚本，盗取敏感信息（cookie）
    - 防御
      1. csp（content secure Policy）建立安全层.控制加载文件，如，content-secure-policy:default-src self(只能加载同源资源)，image-src *(控制加载图片资源)，还能控制外部样式加载，style-src
      2. 内容转义
      3. 控制黑名单
      4. httpOnly禁止读取cookie
      5. 增加代码阅读难度
      6. html转义
  2. CSRF(跨站请求伪造)攻击
        攻击者诱导受害者进⼊第三⽅⽹站，在第三⽅⽹站中，向被攻击⽹ 站发送跨站请求。利⽤受害者在被攻击⽹站已经获取的注册凭证，绕过后台的⽤户验证，达到冒充⽤户对被攻击的⽹站 执⾏某项操作的⽬的。（银行转账，在某评论区发表评论等操作等不良行为）
      - 类型
          1. POST类型的CSRF
            获取用户凭证，自动提交表单，模拟一次用户操作
          2. GET类型的CSRF
          3. 链接类型的CSRF
            用户浏览一些网站，如论坛，单击了一些外部链接
      - 防御
        1. 禁止用户跳转外部网站的操作（掘金，简书做法类似）
        2. 后端验证请求头refer（能修改伪造，hhtps模式下不能用），但不太好用
        3. 同源检测，sameSite(禁止cookie跨域携带)或者服务器验证 域名是否可信任（客户端带过来的带Origin字段）
        4. 要求请求携带攻击者无法携带的Token（表达提交，页面提交，服务器验证）
        5. 双重Cookie验证，请求头添加cookie，请求URL添加sdrfcookie参数，后端验证两个cookie是否一致。
        （只要对方知道你的规则，其实，csrf攻击很难防）
  3. 点击劫持（注入透明的iframe，iframe地址指向攻击者预先准备的网站，诱导用户点击隐藏的网站按钮，对要攻击的目标网站发起攻击）
  4. OS攻击（注入危险命令）
  5. HTTP劫持（篡改dns,让用户一模一样/非预期的网站）
  6. SQL注入
    比如 后台是读取前端某个值 进行sql查询，如果输入是 1 or ,本来是查询某一条数据，结果全部数据查出来了，暴露了信息。
  7. DDOS攻击
      SYN Flood, 利用tcp三次握手服务器接收到客户端请求连接的syn包时，后续操作需要一定的时间，不断的给服务器包发送syn包，服务器为了处理这些请求，会不断地申请内存资源，服务器会处理请求变得缓慢，严重会崩溃。
      HTTP Flood
        并不断发送http请求。靠谱的运行商会自动加入黑名单，防止攻击。
### XSS分为哪⼏类?
- 注入型
- 储存型
### 如何预防XSS?
  1. csp（content secure Policy）建立安全层.控制加载文件，如，content-secure-policy:default-src self(只能加载同源资源)，image-src *(控制加载图片资源)，还能控制外部样式加载，style-src
  2. 内容转义
  3. 控制黑名单
  4. httpOnly禁止读取cookie
  5. 增加代码阅读难度
  6. html转义
### 针对第⼀个要素：我们是否能够在⽤户输⼊的过程，过滤掉⽤户输⼊的恶意代码呢？
不知内容要输出到哪里，如果输出到浏览器，浏览器还能识别转义符，如果是用于vue模板，那么不能识别，原样输出。
### 在⽤户提交时，由前端过滤输⼊，然后提交到后端。这样做是否可⾏呢？
不可行。因为攻击者可能会绕过前端，伪造请求直接提交恶意代码
### 那么，换⼀个过滤时机：后端在写⼊数据库前，对输⼊进⾏过滤，然后把“安全的”内容，返回给前端。这样是否可⾏呢？
不行，万一别的网站也用到这个数据，那么如果没有过滤机，那么后果不堪设想，而且换一个过滤子需要一定成本
### 如何应对⽹络劫持?
- 网络劫持（强制指定跳转到非预期的网站（如果本来跳去京东，最后强制跳到淘宝）：
  HTTP劫持: (访问⾕歌但是⼀直有贪玩蓝⽉的⼴告),由于http明⽂传输,运营商会修改你的http响应内容(即加⼴告)
  DNS劫持：DNS解析劫持（修改运行商DNS记录）/302跳转
- 解决办法
  DNS劫持由于涉嫌违法,已经被监管起来,现在很少会有DNS劫持,⽽http劫持依然⾮常盛⾏. 最有效的办法就是全站HTTPS,将HTTP加密,这使得运营商⽆法获取明⽂,就⽆法劫持你的响应内容。
### HTTPS⼀定是安全的吗?
⾮全站HTTPS并不安全。
- 例子
  - 一个页面是HTTP页面一个非HTTP页面，黑客有可能冒充中间人，截获了，用户的账号密码。⽤户 <== HTTP ==> ⿊客 <== HTTPS ==> 银⾏
  - 中间人是指一个控制着两端的信息传输，窃取私密信息的角色，但是双方不知道这个角色的存在，以为还在进行私密的会话。

## webpack
- webpack与grunt、gulp的不同？
- 有哪些常⻅的Loader？
- 有哪些常⻅的Plugin？
- Loader和Plugin的不同？
- webpack的构建流程是什么?
- 是否写过Loader和Plugin？描述⼀下编写loader或plugin的思路？
- webpack的热更新是如何做到的？说明其原理？
- 如何⽤webpack来优化前端性能？
- 如何提⾼webpack的打包速度?
- 如何提⾼webpack的构建速度？
- 怎么配置单⻚应⽤？怎么配置多⻚应⽤？

## Vue
### 你对MVVM的理解? 
视图层-视图模型层-数据模型，视图模型层是核心，控制着视图层和数据模型层，实现数据和视图的解耦，是开法者专注于业务开发。比如vue的设计模式，只要改变数据就可以通知更新视图
### MVVM的优缺点?
- 优点
1. 数据层和视图层分离，开发者更加专注业务
2. 使用方便，自动更新dom

- 缺点
1. model层，view层出现bug，很难调试
2. 占用内存，消耗一定资源（闭包）
### 你对Vue⽣命周期的理解？
beforeCreate-> created ->beforeUpdated-> Updated -> beforemounted -> mounted
- beforeCreate的生命周期，绑定生命周期需要的钩子函数和属性。
- created的生命周期，对数据进行劫持。
- beforeUpdated就是数据改变触发更新前执行的阶段
- Updated就是更新完毕之后执行的阶段（虚拟dom遍历、对比，深度优先）
- beforemount就是再更新前执行阶段，vue在编译html生虚拟dom，一般脚手架帮我们编译好虚拟dom，减少挂载时间
- mounted就是挂载html之后执行的钩子，通常数据更新操作的订阅是在这里同时执行
### 异步请求适合在哪个⽣命周期调⽤？
- 如果是第一次挂载vue，请求一次数据
适合在creared钩子函数，如果在beforeCreated, 还不能获取data的属性。如果放在mounted，又感觉太慢，肯定会再出发一次更新，其他生命周期 更不用说了，第一次根本不会执行，或者第一次初始化拿不到$el属性
- 如果是dom变化之后请求
那么就得在updated钩子，还能获取最新的dom
### Vue组件如何通信？
props，project/inject, 自定义事件，model（sync）
### computed和watch有什么区别?
computed 是在属性有变化时才执行回调函数，没变化不执行，适合于复杂计算值的场景，可以缓存计算结果，避免多次调用回调函数
watch是在属性变化时才执行回调函数，不太适合缓存计算结果
### Proxy与Object.defineProperty的优劣对⽐?
Proxy缺点
兼容性差，不支持IE11
- Object.defineProperty优点
es5的api,兼容好
- Object.defineProperty缺点
1. vue中，对数据的劫持，需要深度遍历遍历对象的属性，会形成一层层的闭包，占用内存，除非关闭页面
2. 不支持数组
- Proxy 优点
1. 监听对象而非属性。vue3里因为这个，执行效率和内存占用减少了一半
2. 支持数组的代理
3. 支持对象多种方法的劫持，apply、ownKeys、deleteProperty、has
### 既然Vue通过数据劫持可以精准探测数据变化,为什么还需要虚拟dom进行diff?
- 浏览器dom的更新性能消耗的代价是非常昂贵的，当然浏览器执行很快，我们根本察觉不到。使用虚拟dom，是为了把组件所有的dom操作都在集中在一个节点上，然后批量更新，浏览器只需更新一次dom，如果不使用dom，那么浏览器可能会多次更新dom（浏览器也有自己的批量优化），造成不必要的性能开销。
- 每个组件就有一个对应的watcher，如果粒度过高，那么可能需要创建更多的wacher实例，性能开销更大，如果里度过低，又无法准确定位变化的位置。进行虚拟domdiff实质为一种折中的方法，解决了上面的问题，大概知道要更新的地方，让后再对这个地方进行细节的对比。
### Vue为什么没有类似于React中shouldComponentUpdate的⽣命周期？
因为react的更新，是更新整个树，通常会有不必要的diff，造成性能的开销，而vue使用数据劫持，diff粒度更精准，粒度更细，不会有无用的diff，所以vue不考虑加入shouldComponentUpdate的⽣命周期
### Vue中的key到底有什么⽤？
dif先会进⾏新旧节点的⾸尾交叉对⽐等四种方式,当⽆法匹配的时候会⽤新节点的 key 与旧节点进⾏⽐对,然后找出差异。
diff的时候，快速定位要diff的虚拟dom，提升diff的效率，如果没有diff，可能会出现非期望的效果，如更新一个列，如果不绑定key，那么更新可能会有问题。
### 你是如何理解Vue的响应式系统的
- 任何⼀个 Vue Component 都有⼀个与之对应的 Watcher 实例。 
- Vue 的 data 上的属性会被添加 getter 和 setter 属性。 
- 当 Vue Component render 函数被执⾏的时候, data 上会被 触碰(touch), 即被读, getter ⽅法会被调⽤, 此时 Vue 会去记录此 Vue component 所依赖的所有 data。(这⼀过程被称为依赖收集) 
- data 被改动时（主要是⽤户操作）, 即被写, setter ⽅法会被调⽤, 此时 Vue 会去通知所有依赖于此 data 的组件去 调⽤他们的 render 函数进⾏更新。
## React
- React最新的⽣命周期是怎样的?
- React的请求应该放在哪个⽣命周期中?
- setState到底是异步还是同步?
- React组件通信如何实现?
- React有哪些优化性能是⼿段?
- React如何进⾏组件/逻辑复⽤?
- mixin、hoc、render props、react-hooks的优劣如何？
- 你是如何理解fiber的?
- 你对 Time Slice的理解?
- redux的⼯作流程?
- react-redux是如何⼯作的?
- redux与mobx的区别?
- redux中如何进⾏异步操作?
- redux异步中间件之间的优劣?
 


