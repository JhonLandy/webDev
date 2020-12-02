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

## 原型

### 介绍
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
无论如何，只要创建一个函数，就会按照特定的规则为这个函数创建一个prototype属性（指向原型对象）。默认情况下，所有原型对象自动获得一个名为constructor，指回与之关联的构造函数。

### Object.setPrototypeOf()
```js
let a = {
  name: 'foo'
}
let b = {
  sex: 'man'
}
Object.setPrototyprOf(a, b)
console.log(Object.getPrototyprOf(a, b))//true
```
这里不只是执行Object.setPrototypeOf()语句那么简单，会涉及所有访问了那些修改过【Prototype】的对象代码，可能会导致性能下降，可以通过Object.create来创建一个对象，同时指定原型：
```js
let b = {
  sex: 'man'
}
let a = Object.create(b)
a.name = 'foo'
console.log(Object.getPrototyprOf(a, b))//true
```

### 原型层级
在通过访问对象属性时，会按照这个属性的名称开始搜索。搜索开始于对象实例本身。如果在这个实例上发现了给定的名称，则返回该名称对应的值。如果没有找到这个属性，则搜索会沿着指针进入原型对象，找到原型对象的属性后返回对应的值。
```js
function Person() {}

Person.prototype.sayFather = function () {
    console.log('father')
}
let person = new Person
person.sayFather()//father
```

通过给实例添加属性，可以屏蔽对原型的相同属性的访问。如果想去掉屏蔽，设置为null也不会恢复，要使用delete 删除实例属性
```js
function Person() {}
Person.prototype.name = 'gg'
let person = new Person

person.name = 'foo'
console.log(person.name)//foo

person.name = null
console.log(person.name)//null

delete person.name
console.log(person.name)//gg
```

### 原型和in操作符
```js
function Person() {} 
Person.prototype.name = 'gg'
Person.prototype.sayFather = function () {
    console.log('father')
}
let person = new Person

console.log(person.hasOwnProperty('name'))//检查属性name是否在实例person上，结果为false
console.log('name' in person)//true

person.name = 'foo'
console.log(person.hasOwnProperty('name'))//true
console.log('name' in person)//true
```

for...in,Object.keys(),Object.getOwnPropertyName()都只会枚举在本对象的属性，不会枚举原型对象的属性。

- Object.getOwnPropertyName() 的返回保函不可枚举的属性
```js
function Person() {} 
Person.prototype.name = 'gg'
Person.prototype.sayFather = function () {
    console.log('father')
}
console.log(Object.getOwnPropertyName(Person.prototype))//constructor,name,sayFather
console.log(Object.keys(Person.prototype))//name,sayFather
```

## 继承
主要通过原型链实现。
### 原型链
通过原型链继承：
```js
function Aa() {
  this.sexA = '男'
}
function Bb() {
  this.sexB = '女'
}
Bb.prototype = new Aa()
Bb.prototype.getSex = function() {
  return this.sexA 
}
const b = new Bb()
b.getSex()//男
```

### 盗用构造函数继承

```js
function Super() {
    this.name = '爸爸'
}
function Son() {
  Super.call(this)//盗用爸爸Super的属性
  this.age = 25
}
```
缺点是无法获取调用父类的原型属性方法

### 组合继承
```js
function Super() {
    this.age1 = 2
}
function Son() {
    Super.call(this)
    this.age = 1
}
Son.prototype = new Super()
const son = new Son()
console.log(son)//原型上有ag
// class Super {
//     constructor(name) {
//         this.name1 = name
//     }
//     age1 = 'sb'
// }
// class Son extends Super {
//     constructor(name) {
//         super('77')
//         this.name = name
//     }
//     age = 'son'
// }
```
缺点是子类原型上有多余的属性

### 原型式继承
适用于在一个对象基础上创建新的对象，不需要单独创建构造函数(也就是不关注实例类型，如：instanceof)，保函引用值的属性始终在相关对象实例共享。
```js
function object(o) {
    function F() {}
    F.prototype = o
    return new F
}
```

<strong>等价于:</strong>

```js
const person = {
    name: 'foo'
}

Object.create(person, {//相当于Object.defineProperties
    name: {
        value: 'kk'
    }
})
```

### 寄生式继承

1. 创建一个继承(原型对象)函数
2. 在一个对象(原型对象)基础上创建一个新的对象(实例对象)
3. 增强新的对象(实例对象)，赋值
4. 返回对象(实例对象)

```js
function inheritPrototype(Son, Super) {
    let prototype = object(Super.prototype)
    prototype.constructor = Son
    Son.prototype = prototype
}
```

### 寄生组合继承（盗用构造函数 + 寄生式继承）
```js
function Super() {

}
function Son() {

}
function object(o) {
    function F() {}
    F.prototype = o
    return new FORMERR
}
function inheritPrototype(Son, Super) {
    let prototype = object(Super.prototype)
    prototype.constructor = Son
    Son.prototype = prototype
}
inheritPrototype(Son, Super)//instnanceof, isPrototypeOf()也正常有效
```

这样和class类继承就很像，Son原型上没有多余属性参照对比 <a href="#组合继承">组合继承</a>，这是比较推荐使用的方法。

## 类

类是ECMAScript中新的基础性语法糖结构，表面上看似支持正式的面向对象编程，但实际上它还是使用的仍然是原型和构造函数的概念。

### 定义
```js
class Person1 {}//有效定义
class Person2 {//有效定义
  constructor() {}
}
class Person3 {//有效定义
  get mySon() {}
}
class Person4 {//有效定义
  static getSon() {}
}
```
以上就是类的集中定义方式，constructor并不是必需的，不定义constructor相当于将构造函数定义为空函数。

### 原理
实际上，当 new 的时候，就是调用constructor函数进行实例化。调用类的构造函数实际上执行了下面的操作：
> 在内存中创建一个对象

> 新对象内部的 [[Prototype]] 被赋值为构造函数的prototype属性

> 将this指向新对象

> 构造函数返回this，如果构造函数 有返回对象，只返回它，但这会使  instanceof 失效 （判定为false）



### 继承（关键字 extends）

背后依旧使用原型链
```js
class Father {
  say() {
      console.log('爸爸')
  }
}

class Son extnds Father {
    constructor() {
      super()
      console.log(1)
    }
}

new Son().say()//爸爸
```

若子类声明了 constructor，则需要调用super(),this不能在super()执行前使用。

### 类混入

Es6没有显示地支持多类继承，但是可以手动实现。即Person类需要组合继承A, B, C, 则需要某种机制，实现，B继承A，C继承B，然后Person 类在继承C。

```js
class A {}
class B extends A {}
class C extends B {}
class Person extends C {}
```

### 常用手段
```js
class Person {
  sex = '男'
  static name = 'YCL'
}
const person = new Person()
console.log(person.sex)//男
console.log(Person.name)//YCL
```

## 代理与反射

### 代理

相当于目标对象的替身，但又完全独立于目标对象;目标对象既可以被直接操作，也可以通过代理来操作，直接操作会绕过代理。修改代理，如果没有传入handler，则目标对象的相同属性也会赋一样的值
```js
const person = {
    name: 'foo'
}
const handler = {}
const proxy = new Proxy(person, handler)

console.log(person === proxy)//false
proxy.name = 2
console.log(proxy)//{name: 2}
console.log(person)//{name: 2}
```
### 捕获器
就是用来对目标对象 的 "基本操作" 进行拦截。如，get,set等
```js
const person = {
    name: 'foo'
}
const handler = {
    get(target, key, proxy) {//捕获器
        console.log('获取一个值')
        return Reflect.get(target, key)
    }
}
const proxy = new Proxy(person, handler)
proxy.name//获取一个值
```
### 反射器
在捕获器上执行，执行相同的行为，把结果反射给捕获器（return）.如，捕获器get,对应的反射API有Reflect.get()。

##### Reflect.get
```js
const person = {
    name: 'foo'
}
const handler = {
    get(target, key, proxy) {//捕获器
        console.log('获取一个值')
        return Reflect.get(target, key)
    }
}
const proxy = new Proxy(person, handler)
console.log(proxy.name)//foo
```
##### Reflect.set
设置赋值操作中调用
##### Reflect.deleteProprty
在delete操作中调用
##### Reflect.has
会在in操作符中被调用
##### Reflect.defineProperty
会在Object.defineProperty()中调用
```js
const person = {}
const proxy = new Proxy(person, {
    defineProperty(...params) {
        console.log('调用了')
        return Reflect.defineProperty(params)
    }
})
Object.defineProperty(proxy， 'name', 'son')//调用了
```
##### Reflect.apply
会在调用函数中调用
##### Reflect.construct
会在new操作符中被调用

### 代理的不足
就是this指向的问题，注意使用，下面举个例子就明白了。

```js
const vm = new WeakMap()

class User {
    constructor(userId) {
        vm.set(this, userId)
    }
    get id() {
      return wm.get(this)
    }
}
```

如果依赖User 实例进行代理，那么就会出问题

```js
const user = new User(122)
const proxy = new Proxy(user)
console.log(proxy.id)//undefined
```

原因是在User类实例化时，this指的是User的实例，当对实例进行代理，再获取id，此时的this指的是代理的实例对象，正确做法是:<strong>(注：代理的实例对象 不等于 User的实例，再次强调！！！)</strong>

```js
const UserProxy = new Proxy(User, {})
const userProxy = new UserProxy(122)
console.log(userProxy.id)//122
```


