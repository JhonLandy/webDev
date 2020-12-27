---
title: 表单脚本
---
<big>作者： chenglNG(yuanchenglang)</big>

<big>日期：2020年12月27号</big>

# 表单脚本

## 提交表单
以下三种按钮，只要按下回车都会触发表单提交
```js
<input type="submit" value="提交按钮">
<button type="submit">提交按钮</button>
<input type="image" src="xxx.gif">
```
当然也可以阻止表单提交
```js
form.addEventListener('submit', e => {
  e.preventDefault()
})
//form.submmit()//调用此方法，不会触发submit事件处理程序
```
## 重置表单
一般很少用
```js
<input type="reset" value="提交按钮">
```

## 表单字段
最好使用form.elements这种方式，可以向后兼容旧版浏览器。
```js
//方式一
form.elements[0]
//方式二
form.elements['name']
```
## 表单方法

### focus()(HTML5新增autofocus)
### 选中文本
- select()
- select事件处理程序：
```js
dom.addEventListener('select', e => {
  // todo
})
```
- 兼容IE
```js
if (xxx) {
  return dom.vaule.substring(dom.selectionStart, dom.electionEnd)
}
else if (document.selection) {
  document.selection.createRange().text
}
```
- 部分选中

### 剪切板
<br/>
- 相关六个时间:

> beforecopy

> copy

> beforecut

> cut

> beforepaste

> beforepaste

- 获取内容
通过clipboardData对象获取，方法有getData()、setData()和clearData()。为防止未经授权访问剪粘板，只能在剪粘板事件期间访问。IE则在任何时候都会暴露clipboardData。
```js
// 事件中
function (e) {
  const clipboardData = e.clipboardData || clipboardData
  clipboardData.getData('key')
}
getClipboardData(event, value) {
    if (event.clipboardData) {
      return event.clipboardData.getData('text/plain', value)
    } else if (window.clipboardData) {
       return window.clipboardData.getData('text',value)
    }
}
```
FireFox、Safari和 Chrome不认可<code>"text"</code>类型，只有IE8及更早版本才有效。为抹平差异，建议使用上面的方案。

### 富文本编辑
<br/>
有两种方式，iframe和contenteditable。

### iframe
将文档的designMode设置为on。
```js
  const iframe = document.quertSelector("#iframe")
  window.addEventListener("load", () => {
    iframe.document.designMode = "on"
  })
```

### contenteditable
<br/>
只要在元素上面添加即刻。目前IE、FireFox、Chrome、Safari 和 Opera及所有主流移动浏览器都支持该属性。

```js
<div contenteditable></div>
```
也可以随俗设置可编辑状态：
```js
divDom.contenteditable = true
```

### 富文本交互
<br/>
使用document.execCommand()进行交互。

#### iframe
```js
 const iframe = document.quertSelector("#iframe")
 //设置为粗体文本样式
 iframe.document.execCommand('bold', false, null)
```
#### contenteditable
```js
//直接使用就好了
document.execCommand('bold', false, null)
```

### 富文本选择
- anchorNode: 选区开始起点
- rangeCount: 选区中保函的DOM范围数量
...


### 提交内容
<br/>
直接调用元素或iframe对象的innerHTML即刻获取富文本内容。

```js
iframe.innerHTML
//contenteditable直接使用就好了
document.innerHTML
```


