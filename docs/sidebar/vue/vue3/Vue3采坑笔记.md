---
  title: Vue3.0 - Vue3采坑笔记
---

<big>作者： 枸杞</big>

<big>日期：2020年12月20号</big>

# Vue3采坑笔记

</br>
本文主要介绍vue3和vue2用法上的差异。用例是本弟弟写的<a href="https://github.com/JhonLandy/VueNextProject" target="_blank">表单组件</a>.这里是vue3的<a href="https://v3.vuejs.org/guide/introduction.html" target="_blank">官方文档</a>(需要科学上网)

## 虚拟dom函数

如果是一个组件，比如<code>el-button</code>,在vue2中是这么用的。

```js
export default {
  functional: true,
  inject: ['currentInstance'],
  render(h) {
      return h('el-button', {/*props*/}, [/*children*/])
  }
}
```

因为vnode是通用的，没必要再获取一次组件配置生成，在vue3是这么用的。
```js
import { h, resolveComponent } from 'vue'
const fn (props, context) => {
  //context [$attrs, emits, slots]
  return h(resolveComponent('el-button'), {/*props*/}, slots.default || [/*children*/])
}
fn.props = ['level']
export default  fn

```

## 函数式组件

在vue2中是这么用的。

```js
export default {
  functional: true,
  inject: ['currentInstance'],
  render(h) {
      return h('div')
  }
}
```

在vue3是这么用的:
vue2的functional属性已经被删除，还有喜欢template的#functional，也删除了.
```js
<template #functional>
  <ChildCompoent />
</template>
```

vue3中组件间的性能差异消除了，上面的写法废除。直接改为新的写法：
```js
import { h } from 'vue'
const fn (props, context) => {
  //context [$attrs, emits, slots]
  return h('div')
}
fn.props = ['level']
export default  fn
```

## $attrs && $listeners

在vue2中是这么用的。
```js
<el-form
  v-bind="$attrs"
  v-on="$listeners"
>
...
</el-form>

//h函数
h(resolveComponent('el-button'), {
  attrs: {
    size: 'small',
  },
  on: {
    onClick: function() {}
  }
})
```

在vue3，$attrs 和$listener的属性合并了，在vue3是这么用的。 <code>v-on="$listeners"</code>不用写,其属性都包含在$attrs中
```js
<el-form
  v-bind="$attrs"
>
...
</el-form>

//h函数中
h(resolveComponent('el-button'), {
  size: 'small',
  onClick: function() {}
})
```

## v-bind.sync

在vue2中是这么用的：

```js
//FatherComponent
<ChildComponent :title.sync="pageTitle" />

//ChildComponent
this.$emit('update:title', newValue)

```

在vue3是这么用的：
```js
<ChildComponent v-model:pageTitle="pageTitle" />

```
上面写的等价于：
```js
<ChildComponent
  :pageTitle="pageTitle"
  @update:pageTitle="pageTitle = $event"
/>
```

## v-model
```js
//input
<input v-model="pageTitle" />
解析为
<input :value="pageTitle" @input="pageTitle = $event"/>

//组件
<ChildComponent v-model="pageTitle"/>
解析为
<ChildComponent:value="pageTitle" @input="pageTitle = $event"/>
```

在vue3是这么用的：
```js
//input
<input v-model="pageTitle" />
解析为
<input :value="pageTitle" @input="pageTitle = $event"/>

//组件
<ChildComponent v-model="pageTitle"/>
解析为
<ChildComponent  
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>

```
上面写的等价于：
```js
<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
```
## ## v-models（新增）
信息来源:<https://github.com/vuejs/jsx-next>，但官网中没有。
## 自定义事件@fn

vue3 中可以不用再传$event（传也可以）, 函数中可以自动获取。

```js
//template
<fn @click="doClick" />

//javascript
doClick(e) {
  console.log(e instnaceof MouseEvent)//true
}
```

## watch
在vue3中，按照vue2的写法，是无效的，根本没效果。
```js
watch: {
  count(val) {
    console.log('不会触发')
  }
}
```
必须改为用watch 或 watchEffect Api。

```js
import { reactive, watch, watchEffect} from 'vue'
export default {
    setup() {
         const state = reactive({
            form: {},
            list: [],
            asyncOptions: {},
            callbacksMap:{},
            callbacksQueue: []
        })

        watch(state.callbacksQueue, (Queue, prevCount) => {
            if (Queue.length === 0) return// 防止死循环
            for (const { field, async } of Queue) {
                if (!async || field.name in state.asyncOptions) continue// 如果之前请求了，使用缓存，不再次请求
                matchCallback(field.name)('async')
            }
            nextTick(() => {
                //state.callbacksQueue = [] 千万别这么干，会失去数据响应！！！
                state.callbacksQueue.splice(0, state.callbacksQueue.length)
            })
        })

        const list = elements.filter(({ field, async, callback, permission }) => {
            collectCallbackToMap({field, callback})
            state.callbacksQueue.push({field, async})//这里触发watch的回调函数！！！！！！
            return (permission
                ? (typeof permission === 'function'
                    ? permission() : permission)
                : true) && initData.call(state, field)
        })
    }
}
```
wacth API在初始时是不会执行（lazy）,wacthEffect则会执行一次（immediate）。其中需要关注的是，watch回调是会有优先调度的策略。比如在setup执行过程中，触发了watch的回调函数，此时是同步执行回调函数。如果是通过事件触发，优先级相对较低，则会异步执行。使用上面例子调试：
##### setup中触发：
```js
watch(state.callbacksQueue, (Queue, prevCount) => {
  console.log('同步执行')
  ...
})

const list = elements.filter(({ field, async, callback, permission }) => {
    state.callbacksQueue.push({field, async})//这里触发watch的回调函数！！！！！！
    console.log('done')
    ...
})
```
输出：
```js
//同步执行
//done
```
##### 事件中触发：
```js
watch(state.callbacksQueue, (Queue, prevCount) => {
  console.log('异步执行')
  ...
})

doClick() {
   state.callbacksQueue.push(1) 
   console.log('done')
}
```
输出：
```js
//done
//异步执行
```
::: warning
清空数组时，不要直接赋值<code>[]</code>，如：<code>state.callbacksQueue = []</code>。千万别这么干，会失去数据响应，watch Api 中的回调也无法会触发。推荐调用数组自身方法清空，如：<code>state.callbacksQueue.splice(0, state.callbacksQueue.length)</code>。
:::
## computed
在vue3使用vue2语法，依然有效果。
```js
computed: {
  count(val) {
    //奇怪的是，这里实际没有执行到
    return this.index
  }
}
```
v还是推荐vue3的API
```js
import { computed } from 'vue'
computed(() => {
  return this.index
})
```
## provide && inject

vue3是这么用：
这个东西有点强大，还能传响应式。貌似和Vuex的功能有点相似。
```js
import { provide, reactive, ref } from 'vue'
import MyMarker from './MyMarker.vue

export default {
  components: {
    MyMarker
  },
  setup() {
    const location = ref('North Pole')
    const geolocation = reactive({
      longitude: 90,
      latitude: 135
    })
    provide('location', location)
    provide('geolocation', geolocation)
  }
}
```
## v-if && v-for
在vue2中, <code>v-for</code>指令比<code>v-if</code>先执行。在vue3中刚好反过来，<code>v-if</code>先执行，<code>v-for</code>后执行，迁移代码的时候要注意

## render
render函数可以发挥js的编程能力。

在vue2是这么使用：
```js
export default {
  render(h) {
    return h('p')
  }
}
```

在vue3是这么用：
```js
import { h } from 'vue'
export default {
  setup() {
    return () => h('p')
  }
}
```
















