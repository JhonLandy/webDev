---
title: 源计划
---

<big>作者：chenglNG(yuanchenglang)</big>

<big>日期：2021年2月10号</big>

# 源计划

## javascript

### 基础

- 谈谈你对原型链的理解？ ✨
- 如何判断是否是数组？
- ES6模块与CommonJS模块有什么区别？
- 聊⼀聊如何在JavaScript中实现不可变对象？
- JavaScript的参数是按照什么⽅式传递的？
- js有哪些类型?
- 为什么会有BigInt的提案？
- null与undefined的区别是什么？
- 0.1+0.2为什么不等于0.3？
- 类型转换的规则有哪些？
- 类型转换的原理是什么？

### js机制

- 解释下变量提升？✨
- ⼀段JavaScript代码是如何执⾏的？✨
- JavaScript的作⽤域链理解吗？✨
- 谈⼀谈你对this的了解？✨
- 箭头函数的this指向哪⾥？✨
- 理解闭包吗？✨
- 实现bind和call两个方法

### js内存

- 讲讲JavaScript垃圾回收是怎么做的？
- JavaScript的基本类型和复杂类型是储存在哪⾥的？

### 异步

- async/await 是什么？

### dom
- DOM的事件模型是什么？
- DOM的事件流是什么？
- 什么是事件委托?

### bom

## css

### 基础

- CSS选择器的优先级是怎样的？✨
- link和@import的区别？
- 有哪些⽅式（CSS）可以隐藏⻚⾯元素？
- em\px\rem区别？
- 块级元素⽔平居中的⽅法？
- CSS有⼏种定位⽅式？
- 如何理解z-index？✨
- 如何理解层叠上下⽂？✨
- 清除浮动有哪些⽅法？
- 你对css-sprites的理解
- 你对媒体查询的理解？
- 你对盒模型的理解？✨
- 标准盒模型和怪异盒模型有什么区别？✨
- 谈谈对BFC(Block Formatting Context)的理解？ ✨
- 为什么有时候⼈们⽤translate来改变位置⽽不是定位？
- 伪类和伪元素的区别是什么？
- 你对flex的理解？✨
- 关于CSS的动画与过渡问题

## html

### 基础

- doctype(⽂档类型) 的作⽤是什么？✨
- 这三种模式的区别是什么？(接上⼀问追问)
- HTML、XML 和 XHTML 有什么区别？
- 什么是data-属性？
- 你对HTML语义化的理解？✨
- HTML5与HTML4的不同之处
- 有哪些常⽤的meta标签？
- src和href的区别？
- 知道img的srcset的作⽤是什么？（追问）
- 还有哪⼀个标签能起到跟srcset相似作⽤？（追问）
- script标签中defer和async的区别？✨
- 有⼏种前端储存的⽅式？✨
- 这些⽅式的区别是什么？（追问）✨

## http

- HTTP有哪些⽅法？这些⽅法的具体作⽤是什么？
- GET和POST有什么区别？
- PUT和PATCH都是给服务器发送修改资源，有什么区别？
- http的请求报⽂是什么样的？
- 聊⼀聊HTTP的部⾸有哪些？
  内容很多，重点看标『✨ 』内容
- 聊⼀聊HTTP的状态码有哪些？
- HTTP的keep-alive是⼲什么的？
- 为什么有了HTTP为什么还要HTTPS？
https是安全版的http，因为http协议的数据都是明⽂进⾏传输的，所以对于⼀些敏感信息的传输就很不安全，HTTPS就
是为了解决HTTP的不安全⽽⽣的。
- HTTPS是如何保证安全的？
- 但是问题来了，如果中间⼈篡改了证书，那么身份证明是不是就⽆效了？这个证明就⽩买了，这个时候需要⼀个新的技
术，数字签名。
- HTTP2相对于HTTP1.x有什么优势和特点？
- 服务器推送
- 多路复⽤
- HTTP的缓存的过程是怎样的？
- 什么时候会触发强缓存或者协商缓存？
- 服务器判断缓存是否是新鲜的⽅法就是依靠HTTP的另外两组信息
- 响应头
- http的整个流程，涉及tcp/ip协议

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
 


