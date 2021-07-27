```js
// 2021年7月27日 08:14:28
Function.property.bind = function (ins, ...params) {

    ins.fn = this
    function loop() {}
    const BFDD = function(...args) {
        const _this = this instanceof BFDD ? this : ins
        const arg = [...args, ...params]
        _this.fn(...arg)
    }
    loop.property = this.property
    BFDD.property = new loop()
    return BFDD
}

Function.property.apply = function (inst, arr) {
    const context = inst || window
    context.fn = this
    const result = context.fn(...arr)
    delete context.fn
    return result
}

Function.property.call = function (inst, ...arr) {
    const context = inst || window
    context.fn = this
    const result = context.fn(...arr)
    delete context.fn

    return result
}

function fn(params) {
    console.log(this.name)
    console.log(this.age)
    console.log(params)
}
```