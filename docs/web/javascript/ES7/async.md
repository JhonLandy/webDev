---
title: async/await
---

<big>作者： chenglNG(yuanchenglang)</big>

<big>日期：2020年10月7号</big>

# async/await - Promise 的语法糖

- ##### 认识asnyc/await

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

- ##### asnyc/await 的原理

我使用babel对asnyc/await代码进行了转义，得到了下面的代码，看了之后大概知道asnyc/await是怎么给promise做语法糖的。

###### 原来的代码：

```javascript
function fn(num) {
    return new Promise((resolve) => {
        resolve(num + 1)
    })
}

async function kk() {
    const num = await fn(1)
    const num1 = await fn(num)
    const num2 = await fn(num1)

    return (num2)
}

console.log(kk())

```

###### babel处理过的代码：

```javascript

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { 
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

function _asyncToGenerator(fn) { 
  return function () { 
    var self = this, 
    args = arguments; 
    return new Promise(function (resolve, reject) { 
          var gen = fn.apply(self, args); 
          function _next(value) { 
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); 
          } 
          function _throw(err) { 
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); 
          } 
          _next(undefined); 
      }); 
    }; 
  }

function fn(num) {
  return new Promise(function (resolve) {
    resolve(num + 1);
  });
}

function kk() {
  return _kk.apply(this, arguments);
}

function _kk() {
  _kk = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var num, num1, num2;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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
    }, _callee);
  }));
  return _kk.apply(this, arguments);
}

```

  <code>function kk</code>被重新包装过，就是带有async标识的函数都会默认 包装为 返回Promise的函数。

```javascript
  async function kk() {
    const num = await fn(1)
    const num1 = await fn(num)
    const num2 = await fn(num1)

    return (num2)
  }

  //包装后
  function kk() {
  return _kk.apply(this, arguments);
}

function _kk() {
  //_asyncToGenerator默认返回 一个 返回promise的函数
  _kk = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var num, num1, num2;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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
    }, _callee);
  }));
  return _kk.apply(this, arguments);
}

```
下面这串代码像generate函数一样按顺序执行, 每个await 的函数 是他直接返回promise的值，通过next方法一直往下传，最后作为kk 最终返回的Promise的值，通过<code> Promise.resolve(value).then(_next, _throw);</code>返回出去
```javascript
    const num = await fn(1)
    const num1 = await fn(num)
    const num2 = await fn(num1)

    //处理后的代码
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
```


async的函数是通过<code>try{}catch{}</code>和<code>reject</code>进行补抓错误的，我们也可以仅使用async去捕抓错误，进行错误处理。










  
