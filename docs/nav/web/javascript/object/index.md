---
title: 对象、类面向对象编程
---
<big>作者： chenglNG(yuanchenglang)</big>

<big>日期：2020年11月26号</big>

# 对象、类面向对象编程

## 对象

### 创建
```js
const person = {}
//等价于
const person = new Object()
```

### 数据属性
<code>configurable:</code> 表示属性是否过 detele 删除并重新定义，或者是否修改对象的特性以及是否可以把它改为访问器属性，默认为true

<code>enumberable:</code> 表示对象的属性是否可枚举，如: for... in

<code>writable:</code> 表示对象属性值是否可以修改

<code>value:</code> 包含对象实际的值

```js
Object.defineProperty(person, "name", {
  configurable: false,
  value: '123'
})

//抛出错误
Object.defineProperty(person, "name", {
  configurable: true,
  value: 'haha'
})
```

### 访问属性
<code>configurable:</code> 表示属性是否过 detele 删除并重新定义，或者是否修改对象的特性以及是否可以把它改为访问器属性，默认为true

<code>enumberable:</code> 表示对象的属性是否可枚举，如: for... in

<code>get:</code> 表示获取对象属性值时调用

<code>set:</code> 包含设置对象属性值时调用

### Object.assgin()

用来合并对象，接受一个目标对象和一个源对象，将源对象的属性复制到目标对象，相同对象属性的值会被最后一个覆盖。在合并的时候，会调用源对象get方法，之后在调用目标对象set方法。
```js
Object.assgin()
const def = {
    set a(val) {
        console.log('set' + val)
    }
}
const src = {
    get a() {
        console.log('get')
        return 1
    }
}
Object.assign(def, src)
console.log(def) //｛set () {}｝
```

### 对象表示及相等判定(Object.is())
```js
console.log({} === {})//false
console.log(NaN === NaN)//false

console.log(Object.is({}, {}))//false
//正确的NaN相等判定
console.log(Object.is(NaN, NaN))//true
```

### 可计算属性

```js
const a = 'foo'
function b() {
  return a
}
const  person = {
    [a]: 'foo',
    [b]: 'b'
}
```
::: warning
b函数有副作用，如果报错，则表达式会抛出错误，之前完成的计算不能回滚
:::

### 对象结构

```js
let person = {
    a: 1,
    b: 2
}
const {a, b} = person
console.log(a, b)//1 2


let a, b
//如果事先生命的变量赋值，必须包含在括号内
({a, b}) = person


//TypeError
let { _ } = null
let { _ } = undefind

const { length } = 'foo'//隐式调用原始雷星对象
console.log(length)//3
```

### 嵌套结构

```js
let person = {
    a: 1,
    b: 2
}
let personCopy = {}
// let {a: personCopy.a, b: personCopy.b} = person//错误的
({a: personCopy.a, b: personCopy.b} = person)//正确的
console.log(personCopy)// {a: 1, b: 2}
```

### 工厂函数

```js
function fn() {
  let o = new Object()
  o.a = 1
  return o
}
```

### 构造函数

- 隐式创建 新的对象，this指向新的对象
- 方法和属性赋值给this
- 没有返回值，默认使用this指向实例；但如果有返回对象，使用返回对象指向实例；
- 函数首字母必须大写

```js
function Person() {
  this.a = 2
}
const person = new Person()
// const person = new Person不传参数等价
console.log(person.a)//2
```
### 原型模式
共享数据，解决构造函数每次new的时候都会给方法属性，分配新的内存空间的问题
```js
function Person() {}
Person.prototype.sayHello = function() {
  console.log('hello')
}
const person1 = new Person
const person2 = new Person
console.log(person1.sayHello = person2.sayHello)//true
```
