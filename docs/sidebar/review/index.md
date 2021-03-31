---
title: 源计划
---

<big>作者：chenglNG(yuanchenglang)</big>

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
<br/>
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
可用于设置水平方向的布局。解决行内块（留白问题），浮动（浮动元素不能随空间变化而变化），表格水平布局（不能应用外边距，不能排序）带来的一些问题。flex布局会忽略float和display属性（通常设置float和display用于向后兼容），少量代码可以简单实现水平布局。里面的非定位元素也可以通过z-index控制层叠次序（网格布局同理）
不好的就是，刚打开页面时，元素开始计算（变大），造成页面跳动的，体验不好，通常给元素设置固定宽高，可以减少影响。
### 关于CSS的动画与过渡问题

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
<picture>.一个picture可以包含多个source，如果浏览器匹配到合适的source，就让source要显示的内容在img上显示，如果浏览器不支持该语法和没有匹配到，则img标签的src作为兜底属性。
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

### 服务器推送

### 多路复⽤

### HTTP的缓存的过程是怎样的？

### 什么时候会触发强缓存或者协商缓存？

### 服务器判断缓存是否是新鲜的⽅法就是依靠HTTP的另外两组信息

### 响应头

### http的整个流程，涉及tcp/ip协议

## 浏览器原理

- 点击关注本公众号获取⽂档最新更新,并可以领取配套于本指南的 《前端⾯试⼿册》 以及最标准的简历模板.
- 常⻅的浏览器内核有哪些?
- 浏览器的主要组成部分是什么？
- 浏览器是如何渲染UI的？
- 浏览器如何解析css选择器？
- DOM Tree是如何构建的？
- 浏览器重绘与重排的区别？
- 如何触发重排和重绘？
- 如何避免重绘或者重排？
- 前端如何实现即时通讯？
- 什么是浏览器同源策略？
- 如何实现跨域？
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
- XSS分为哪⼏类?
- 如何预防XSS?
- 针对第⼀个要素：我们是否能够在⽤户输⼊的过程，过滤掉⽤户输⼊的恶意代码呢？
- 在⽤户提交时，由前端过滤输⼊，然后提交到后端。这样做是否可⾏呢？
- 那么，换⼀个过滤时机：后端在写⼊数据库前，对输⼊进⾏过滤，然后把“安全的”内容，返回给前端。这样是否可⾏
- 呢？
- 如何应对⽹络劫持?
- HTTPS⼀定是安全的吗?


## webpack
- webpack与grunt、gulp的不同？
- 有哪些常⻅的Loader？
- 有哪些常⻅的Plugin？
- Loader和Plugin的不同？
- webpack的构建流程是什么?
- 是否写过Loader和Plugin？描述⼀下编写loader或plugin的思
- 路？
- webpack的热更新是如何做到的？说明其原理？
- 如何⽤webpack来优化前端性能？
- 如何提⾼webpack的打包速度?
- 如何提⾼webpack的构建速度？
- 怎么配置单⻚应⽤？怎么配置多⻚应⽤？

## Vue
- 你对MVVM的理解?
- MVVM是什么?
- MVVM的优缺点?
- 你对Vue⽣命周期的理解？
- 异步请求适合在哪个⽣命周期调⽤？
- Vue组件如何通信？
- computed和watch有什么区别?
- Proxy与Object.defineProperty的优劣对⽐?
- 既然Vue通过数据劫持可以精准探测数据变化,为什么还需要虚拟
- DOM进⾏diff检测差异?
- Vue为什么没有类似于React中shouldComponentUpdate的⽣
- 命周期？
- Vue中的key到底有什么⽤？

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
 


