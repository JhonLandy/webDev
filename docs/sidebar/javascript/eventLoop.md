---
title: event-loop
---

<big>作者： chenglNG(yuanchenglang)</big>

<big>日期：2020年10月7号</big>

### 深入浅出浏览器事件循环(内附练习题)

- 事件循环的执行顺序

  异步任务的返回结果会被放到一个事件队列中，根据上面提到的异步事件的类型，这个事件实际上会被放到对应的宏任务和微任务队列中去

  <code>Eveent Loop</code> 的循环过程如下：

  - 执行一个宏任务（一般一开始是整体代码（script）），如果没有可选的宏任务，则直接处理微任务
  - 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
  - 执行过程中如果遇到宏任务，就将它添加到宏任务的任务队列中
  - 执行一个宏任务完成之后，就需要检测微任务队列有没有需要执行的任务，有的话，全部执行，没有的话，进入下一步
  检查渲染，然后 GUI 线程接管渲染，进行浏览器渲染
  渲染完毕后，JS线程继续接管，开始下一个宏任务...（循环上面的步骤）

  执行顺序总结：<strong>执行宏任务，然后执行该宏任务产生的微任务，若微任务在执行过程中产生了新的微任务，则继续执行微任务，微任务执行完毕后，再回到宏任务中进行下一轮循环</strong>

  为了更好的理解，我们来看一个例子.
  ```javascript
    console.log('start')
    setTimeout(function() {
      console.log('setTimeout')
    }, 0)
    Promise.resolve().then(function() {
      console.log('promise1')
    }).then(function() {
      console.log('promise2')
    })
    console.log('end')
  ```
  ![Image from alias](~@images/sidebar/javascript/eventloop.gif)

- 练习

  ##### 题目一
  ```javascript
    new Promise((resolve, reject) => {
      console.log(1)
      resolve()
    })
    .then(() => {
      console.log(2)
      new Promise((resolve, reject) => {
          console.log(3)
          setTimeout(() => {
            reject();
          }, 3 * 1000);
          resolve()
      })
        .then(() => {
          console.log(4)
          new Promise((resolve, reject) => {
              console.log(5)
              resolve();
            })
            .then(() => {
              console.log(7)
            })
            .then(() => {
              console.log(9)
            })
        })
        .then(() => {
          console.log(8)
        })
    })
    .then(() => {
      console.log(6)
    })
  ```
  <strong>答案：</strong><code>1 2 3 4 5 6 7 8 9</code>
  ##### 题目二 
  ```javascript
    console.log('1');

  setTimeout(() => {
    console.log('2');
    Promise.resolve().then(() => {
      console.log('3');
    })
    new Promise((resolve) => {
      console.log('4');
      resolve();
    }).then(() => {
      console.log('5')
    })
  })

  Promise.reject().then(() => {
    console.log('13');
  }, () => {
    console.log('12');
  })

  new Promise((resolve) => {
    console.log('7');
    resolve();
  }).then(() => {
    console.log('8')
  })

  setTimeout(() => {
    console.log('9');
    Promise.resolve().then(() => {
      console.log('10');
    })
    new Promise((resolve) => {
      console.log('11');
      resolve();
    }).then(() => {
      console.log('12')
    })
  })
  ```
  <strong>答案：</strong><code>1 7 12 8 2 4 9 11 3 5 10 12</code>
- 总结

  本文从 JS 的两个特点：单线程以及非阻塞介绍了事件循环的必要性，因为事件循环在浏览器和 Node.js 的表现是很大不一样的（看node版本，12版本的node和浏览器表现一致的，本人试过。10以下的是不一样），本人只谈论到了浏览器中的事件循环，并介绍了微任务和宏任务，以及它们的执行流程，最后通过 2 道题目帮助大家巩固知识.

<strong>本文转载于：</strong><https://juejin.im/post/6880419772127772679>