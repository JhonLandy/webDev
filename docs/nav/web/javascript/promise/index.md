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

