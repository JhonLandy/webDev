---
title: 期约与异步函数
---
<big>作者： chenglNG(yuanchenglang)</big>

<big>日期：2020年12月9号</big>

# 期约与异步函数

## 以往的异步编程
```js
function done() {
  setTimeout(console.log, 1000, 11)
}
done()//1s后打印11
```

##### 失败处理：
```js
try {
  function done() {
    setTimeout(console.log, 1000, 11)
  } 
  done()
} 
catch(e) {
  console.log(e)//error
}
```
##### 嵌套函数：
```js
function done(fn) {
  setTimeout(() => {
    fn()
  }, 1000)
} 
const callback = () => {
  done(() => console.log(2))
}
done(callback)
```
显然，随着代码的增多，回调函数不是具有扩展属性。"回调地狱"的称号实至名归。

## promise基础

### resolve

```js
const p = new Promise(resolve => {
  setTimeout(() =>  {
    resolve()
  }, 1000)
})
console.log(p)//Promsie<pending>
//1s后
console.log(p)//Promise<resolve>
```

### Promise.resole

如果传入的参数本身是一个promise，那么它的行为类似于一个空包装。Promise.resovle可说是一个幂等方法

```js
const p = Promise.resolve()
console.log(p === Promise.resolve(p))//true
//注意： new Promise(resolve => resolve()) 中的resolve没有幂等性
```

这个幂等性会保留传入promise的状态
```js
let p = new Promise(() => {})
console.log(p)//Promise<pending>
console.log(Promise.resolve(p))//Pormise<pending>

Promise.resolve(Promise.reject('error1'))//Uncaught (in promise) error1
Promise.resolve().then(() => Promise.reject('error2')//Uncaught (in promise) error2
// new Promise(resolve => resolve())存在这种特性
```

### reject
与resolve类似。

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() =>  {
    reject('foo')
  }, 1000)
})
console.log(p)//Promsie<pending>
//1s后
console.log(p)//Promise<reject>: foo
//Uncaught (in promise) foo
```

### Promise.reject
与Promise.resolve类似。

```js
let p = Promise.reject('foo')
cnsole.log(p)
//Uncaught (in promise) foo

//then()时不处理程序，原样返回
p.then()
//Uncaught (in promise) foo


p.then(() => {})
console.log(p)//Promise<resolve>: undefind

p.then(() => undefind)
console.log(p)//Promise<resolve>: undefind

p.then(() => Promise.resolve())
console.log(p)//Promise<resolve>: undefind

p.then(() => throw 'error')
//Uncaught (in promise) error
console.log(p)//Promise<reject>: error

```

### catch

这个方法用于给promise添加处理reject处理程序。

```js
let p = Promise.reject('error');

//这两种方式是一样的
p.then(null, () => {})
p.catch(() => {})
```


### finally

这个方法被设计为与状态无关。无论父promise是resolve状态还是reject，都会原样返回。

```js
let p = Promise.resolve('foo')
let p1 = p.finally()
let p2 = p.finally(() => undefind)
let p3 = p.finally(() => Promise.reolve())
let p4 = p.finally(() => 'bar')

console.log(p1)//Promise<resolve>: foo
console.log(p2)//Promise<resolve>: foo
console.log(p3)//Promise<resolve>: foo
console.log(p4)//Promise<resolve>: foo
```

如果返回的是一个等待的promise，或者onFinally处理程序抛出错误，则返回相应的promise(待定或者拒绝)

```js
let p = Promise.resolve('foo')
let p2 = p.finally(() => Promise.reject())
//Uncaught (in promise) undefind
console.log(p2)//Promise<reject>: undefind

let p3 = p.finally(() => new Promise(() => {}))
console.log(p3)//Promise<pending>
```

### Promise.all

在一组promise全部解决之后再解决。只要有一个是reject状态的promise，就会执行then方法，而且会静默处理所有其他reject的Promise
```js
let p = Promise.all([
  Promise.reject(3),
  new Promise((_, reject) => setTimeout(_, 1000, 'fuck'))
])
console.log(p)//Promise<reject>: 3

p.catch(e => console.log(e))//3

//没有未处理的错误。。。
```

### Promise.race
最先解决或者拒绝的Promise。和Promise.all 类似， 而且会静默处理所有其他reject的Promise




