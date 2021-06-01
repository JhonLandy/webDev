---
title: 动画与Canvas图形
---
<big>作者： 枸杞</big>

<big>日期：2020年12月27号</big>

# 动画与Canvas图形

## requestAnimationFrame
<br/>
早期动画是使用 <code>setTimeout()</code>或者<code>setInterval()</code>实现动画，但是动画下一次执行的时间是不确定的（由于事件循环执行的原因），所以会卡顿，不流畅。所以就有了requestAnimationFrame。这个方法的执行频率，是和浏览器刷新频率是一样的（60Hz）, 能到达到很流畅的效果。（每到浏览器渲染时，当前回调函数队列的所有函数都会一次性执行完，不是当前加入回调函数队列里的，会在下一次渲染时前一个点全部执行）如果递归的调用执行，那么每次递归相当于把回调函数放在浏览器下一次刷新前一个点执行。

## Canvas

### 填充和描边

```js
  let drawing = document.querySelector('#canvas')
  const context = drawing.getContext('2d')
  context.fillStyle = 'xxxx'// 填充颜色
  context.strokeStyle = 'xxxx'// 边框颜色
```

### 绘制矩形
```js
  let drawing = document.querySelector('#canvas')
  const context = drawing.getContext('2d')
  context.fillStyle = 'xxxx'//填充颜色
  context.fillRect(30, 30, 50, 50)//向矩形填充颜色
  context.strokeStyle = 'xxxx'//边框颜色
  context.strokeRect(30, 30, 50, 50)//绘制xxx颜色矩形
```

### 绘制路径

### 旋转

### 绘制文本
```js
content.font = 'bold 14px Arial'
content.textBaseline  = 'start' // 最左边
context.fillText('12', 100, 20)
```

### 绘制图像
```js
const image = document.images[0]
context.drawImage(image, 10, 10)//把图片绘制到指定位置
```

### 截取图像

```js
// 在（10，5）位置截取，宽高都为50像素的图片区域
context.getImageData(10, 5, 50, 50)
```

## WebGlL

内容有点过，讲不完。(wait in update)


