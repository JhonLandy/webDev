---
title: async/await
---

<big>作者： 枸杞</big>

<big>日期：2020年10月7号</big>

# async-await Promise语法糖

## 认识asny-cawait

平常开发中是否经常使用promise，是不是为回调地狱头疼，是不是想以另一种更加优雅的方式处理代码?async/await是不错的选择，它也是es7的新增语法，需要babel兼容。
下面我们来看看，这个语法糖到底如何使用。
```javascript
    function fn(num) {
      return new Promise((resolve) => {
          resolve(num + 1)
      })
    }
    async function kk() {

        const num = await fn(1)

        console.log(num) //2
    }
```
js代码执行的时候，当遇到await，就会暂停后面代码的执行，等待 fn函数执行完毕再继续执行下去。如果有多个异步任务，则可以多写几个await的异步任务，这样是可以确保异步任务执行顺序，防止出现依赖问题。
##### 举个例子：
```javascript
    function fn1(num) {
      return new Promise((resolve) => {
          resolve(num + 1)
      })
    }
    function fn2(num) {
      return new Promise((resolve) => {
          resolve(num + 1)
      })
    }
    async function kk() {
        const num1 = await fn1(1)
        const num2 = await fn2(num1)
        console.log(num2) //2
        console.log(num2) //3
    }
```
这样是不是优雅很多，相反，如果使用promise来实现上面这段代码，那么会是什么效果呢？下面我们来看看
```javascript
  function kk() {
    let num1 = 1
    new Promise((resolve) => {

      resolve(num1 + 1)//想相当于fn1
    })
    .then(val => {

        return new Promise(resolve => {
            resolve(val + 1)//想相当于fn2
        })
    })
  }
  kk() //Promise fulfilled 3

```

使用Promise虽然也能实现一样的功能，但是代码看上去一点都不整洁、优雅，写多了，有点高血压。后面还不是一定好维护代码，还是async.await舒服。

## 原理

我使用babel对asnyc/await代码进行了转义，得到了下面的代码，看了之后大概知道asnyc/await是怎么给promise做语法糖的。先来认识一下迭代器iterator,这样后面好理解。

### 迭代器iterator

<small>publish：2020-12-11 14:15:41</small>

迭代器（iterator）是一种对象，它能够用来遍历容器中的部分或全部元素。来认识一下，它是什么样子。
```js
//自定义迭代器
class Iterator {
    length = 0
    constructor(length) {
        this.length = length
    }
    [Symbol.iterator]() {
        let index = 0
        let next = val =>{
            return {
                value: val || index,
                done: index++ >= this.length ,
            }
        }
        return {
            next
        }
    }
}
const iterator= new Iterator(3)
const i = iterator[Symbol.iterator]()
// 第一种，传参
i.next('foo')//{done: false, value: 'foo'}
i.next('jk')//{done: false, value: 'jk'}
i.next('bar')//{done: true, value: 'bar'}
//第二种，不传参
i.next()//{done: false, value: 0}
i.next()//{done: false, value: 1}
i.next()//{done: true, value: 2}
for (let val of iterator) {
  console.log(val)
}
//0
//1
//2
```
好了，Iterator的介绍就到这里，这里有个认识就好，这是为下面做个铺垫。继续往下看。

### 分析原理

以上面<a href="/sidebar/javascript/async-await.html#%E4%B8%BE%E4%B8%AA%E4%BE%8B%E5%AD%90%EF%BC%9A">kk函数的例子</a>继续分析。现在对那部分代码进行babel处理。
###### 第一部分代码：
```javascript
"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { 
    //这段代码块是主体
    //key: 'next' | 'throw'
    try {
        var info = gen[key](arg); 
        var value = info.value; 
    } catch (error) { 
        reject(error); 
        return; 
    } if (info.done) { 
        resolve(value); 
    } else { 
      Promise.resolve(value).then(_next, _throw); 
    } 
}
```
<code>asyncGeneratorStep</code>中，参数<code>key</code>的值是<code>'next'</code> 或者 <code>'throw'</code>。<code>info</code>是一个对象，属性有next、value。看到这里是不是觉得和<code>iterator</code>返回的对象有一点相似。这里就是执行上面自定义iterator的执行逻辑。<code>value</code>这里是一个promise或者是一个值。<code> Promise.resolve</code>根据promise的状态（<a href="/nav/web/javascript/promise/#promise-resolve">参考</a>），去执行<code>next</code>或<code>throw</code>方法。如果执行throw,就会在被<code>try{}catch{}</code>捕捉到异常，最终整个async函数返回reject的Promise，后面的逻辑不再执行（从<code>return</code>看出）。

###### 第二部分代码：
这里就是<a href="/sidebar/javascript/async-await.html#第一部分代码：">第一部分代码</a>中 <code>gen</code>执行的大概逻辑，可以参考在进行思考，或许会有更深的理解。
```js
function _kk() {
  ...
  while (1) {
    switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return fn(1);

      case 2:
        num = _context.sent;
        _context.next = 5;
        return fn(num);

      case 5:
        num1 = _context.sent;
        _context.next = 8;
        return fn(num1);

      case 8:
        num2 = _context.sent;
        return _context.abrupt("return", num2);

      case 10:
      case "end":
        return _context.stop();
    }
  }
  ...
}
```
## 总结
最终，async都会返回一个promise，promise没有返回结果，状态就是pending；有返回结果，状态是rejected或者rsolved, 这个取决于 <a href="/sidebar/javascript/async-await.html#第一部分代码：">第一部分代码</a> 逻辑执行流程了。async函数还有妙用，就是：可以把内部的所有报错，都统一在async函数反映出来，进行统一处理。但如果里面使用了<code>try{}catch{}</code>,则错误就会被它拦截了，async函数无法捕抓改错误，返回resolved的Promise。










  
