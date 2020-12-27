---
  title: Vue3.0 - CompositionAPI
---

<big>作者： chenglNG(yuanchenglang)</big>

<big>日期：2020年5月11号</big>

# CompositionAPI小试牛刀
  
## 概念

CompositionAPI的灵感来源于React Hooks的启发。本质上CompositionAPI就是为了更为方便的实现逻辑的组合而生的。它类似react的hooks（本质上是不一样的），
可以复用逻辑的代码，代码结构更加清晰，维护更加方便，函数颗粒度可以更加小。而OptionAPI的缺点很明显，当逻辑相对复杂时，很多相似逻辑无法复用。

### 尝鲜代码

```html
 <div id="app">
        <header>
            <h1>Vue3特性体验</h1>
        </header>
        <section>
            <details>
                <summary>存款记录 总共存款 {{total}}</summary>

                <div v-if="!record.length" style="text-align: center;"><span>没有存款记录</span></div>
                <div v-else class="record-list" v-for="item in record">
                    <p>{{'存入' + item.number + '元' }}</p>
                    <p>{{item.time}}</p>
                </div>
            </details>
        </section>
        <section>
            <main>
                <form id="form">
                    <label>存入数目：</label>
                    <div id="box">
                        <input type="number" v-model="money">
                        <button type="button" @click="saveMoney" ref="el">存入</button>
                    </div>
                </form>
                <footer>
                    当前输入金额金额:{{money}}, 单笔最大不能超过 3000元
                    <meter :value="money" min="0" :max="max" low="1000" high="2000"></meter>
                </footer>
            </main>
        </section>
    </div>
```

```javascript
  let days = {
      0: '日',
      6: '六',
      5: '五',
      4: '四',
      3: '三',
      2: '二',
      1: '一'
  }
  const {createApp, reactive, toRefs, computed, watchEffect, watch, ref, toRef}  = Vue
  function format(time) {
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let date = time.getDate()
      let day = time.getDay()
      let hour = time.getHours() < 10 ? '0'+ time.getHours() : time.getHours()
      let min = time.getMinutes() < 10 ? '0'+ time.getMinutes() : time.getMinutes()
      return  `${year}-${month}-${date} 星期${days[day]} ${hour}:${min} `
  }

  const app = createApp({
      setup() {
          let state = reactive({
              money: '',
              max: 3000,
              record:[],
              total: computed(() => {
                  if (!state.record.length) {
                      return 0
                  } else {
                      return state.record.reduce((a, b) => {
                          const pre = typeof a === 'object'  ? a.number : a
                          return pre +b.number
                      }, {
                          number: 0
                      })
                  }
              }),
              obj: {
                  a: 1,
                  b: 2
              }
          })

          const saveMoney = () => {
              let {record, money, max} = state
              if (!money){
                  alert("请输入金额")
                  return
              }
              if (money > max){
                  alert(`输入金额不能大于${max}`)
                  return
              }
              record.push({
                  time: format(new Date()),
                  number: money,
              })
              state.money = ''
              count.value++
              // console.log(el)
              // el.value.innerHTML = 'sd'//等于Vue2 ref用法
              // jk.value.innerHTML = 'sd'不能这么用
          }
          // watchEffect(() => {
          //     console.log(state.total)
          //     console.log('watchEffect监听有存款')
          // })
          // console.log(watch)
          //reactive对象，deep默认是true
          //isRef
          //function
          let count = ref(state.total)
          watch(count, () => {
              console.log('watch监听有存款')
          })
          let el = ref(null)//初始化一个值，单值响应
          // let jk = toRef(state, 'total')//把某个对象中，key对应的值做单值响应，差不多

          return {
              // jk,
              el,
              count,
              ...toRefs(state),
              saveMoney
          }
      }
  }).mount("#app")
```