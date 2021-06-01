---
title: Vue 基本使用
---

<big>作者： 枸杞</big>

<big>日期：2020年9月3号</big>

## Vue.js是什么？
Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

## 声明式渲染
Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：

```html
<div id="app">
  {{ message }}
</div>
```
```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

### 生命周期图示
![Image from alias](~@images/web/lifecycle.png)

## Vue 常用API

### data

- 类型： <code> Object | Function </code>
- 分析： 

该属性的对象或返回的对象将会被 Vue 劫持, 通过劫持getter/setter , 形成一个ViewModal层。原理是通过<code>Object.defineProperty()</code>进行劫持，
如果是数据量比较大的情况，会形成大量的闭包，占用更多的内存，如果数据作为纯数据展示的话，建议使用<code>Object.freeze()</code>进行冻结，这样对象数据就不会
被劫持，能很好的节省内存。

### props
- 写法
```js
props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
```
```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise 
}
```
```js
props: {
  title:{
    type: String,
    default: '',
  }
  likes: {
    type: Array,
    default: () => [],
  },
  isPublished: {
    type: Object,
    default: () =>({})
  }
 // 省略
}
```
::: warning
在props 出现过的属性，不会在attrs存在的
:::

### provide
- 类型： <code> Object | Function </code>
- 分析： 
   
   可把数据跨层级地传递到某个组件。 provide的对象是没有被劫持的，不能转化为响应式数据
   
### inject
- 用例
```js
inject: ['foo']

或者

const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: () => [1, 2, 3]
    }
  }
}
```

### functional
让组件成为一个函数式组件，之前创建的锚点标题组件是比较简单，没有管理任何状态，也没有监听任何传递给它的状态，也没有生命周期方法。
实际上，它只是一个接受一些 prop 的函数。

如果组件只是负责渲染的工作，那么函数式组件是一个非常好的选择，没有太多的状态管理，也不会有对象（this）及
生命周期的钩子函数、属性，节省了内存，提高了性能，画面渲染效率更好，可以提高用户体验。

```js
export default {
    functional: true,
    props: {
        tag: {
            type: String,
        },
        options: {
            type: Object,
            default: () => ({})
        },
        controlled: {
            type: Boolean,
            default: true
        }
    },
    render(h, {data: Data, props, children}) {
        const {tag, options, controlled} = props
        if (!controlled) return
        const compose = (h, {element, data, attrs, methods} = {}) =>  {
            if (!element || !data) return
            return data.map(item => h(element, {attrs:{...item, ...attrs}, on: methods}, compose(h, item.options)))
        }
        return h(tag, Data, children || compose(h, options))
    }
}

```
### watch
- options

  <code>immediate: true</code>
  
    在组件创建时立即执行

  <code>deep: true</code>
  
    deep即深入观察, 监听器会层层遍历, 给对象的所有属性(及子属性)添加监听器. 这样做无疑会有很大的性能开销, 修改obj中任何一个属性都会触发监听器中的处理函数
  
- 举个栗子
```js
watch: {
    A: {
      handler(newVal, oldVal) {
        console.log(`A changed: ${newVal}`);
      },
      immediate: true
    }
}

watch: {
    A(newVal, oldVal) {
        console.log(`A changed: ${newVal}`);
    }   
}

//其他写法

watch: {
    A: 'show'
},
methods: {
    show() {
 
    }
}
//还可以传数组
watch: {
    A: [
        'show',
        function (newVal, oldVal) {
        
        }   
    ]
},
methods: {
    show() {
 
    }
}
```

- 动态添加watch
```js
this.$watch('obj.hello', this.handler, {
    immediate: true,
    deep: false
  })
}
```

### computed
- 类型 <code>{ [key: string]: Function | { get: Function, set: Function } }</code>
```js
computed: {
  aDouble: vm => vm.a * 2
}
```
- 作用
计算属性的结果会被缓存，除非依赖的响应式 property 变化才会重新计算。注意，如果某个依赖 (比如非响应式 property) 在该实例范畴之外，则计算属性是不会被更新的。***源码剖析：***
   
```js
if (watcher) {
  if (watcher.dirty) {
    watcher.evaluate()
  }
  if (Dep.target) {
    watcher.depend()
  }
  return watcher.value
}
```
  
当数据改变时，该属性对应的watcher的watcher.dirty=true,则在下次使用时再次计算watcher.evaluate()

### methods
- 类型：<code>{ [key: string]: Function }</code>
- 分析

methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。

- 栗子

```html
<button @click="plus">点击</button>
```
```js
省略...
  data: { a: 1 },
  methods: {
    plus: function () {
      this.a++
    }
  }
省略...
```
::: warning
注意，不应该使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。
:::
