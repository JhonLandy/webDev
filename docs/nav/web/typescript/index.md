---
title: TypeScript
---
<big>作者： 枸杞</big>

<big>日期：2020年8月30号</big>
# TypeScript

## 类型

- 基础类型

  ```typescript
  let a: number
  let a: sring
  let a: boolean
  let a: null
  let a: undefined
  ```

- 任意类型

  ``` typescript
  let a: any
  ```
  所有类型的都是any的子类型

- 函数的类型
  ```typescript
  function sum(x: number, y:number): string {
  	return x + y + "";
  }
  ```
- 类
  ```typescript
  class Cat {
      static f;//类的es7语法
      public a;//都可以读，修改（ts语法）
      protected b;//不能让外部修改，子类可以修改（ts语法）
      private c;//不能让外部和子类修改（ts语法）
      readonly d;//只能读，不能修改（ts语法）
  	constructor(name: string) {
          this.name = "黄奕"
      }
      sayHi() {
          return 'hi'
      }
      getter name() {
          //改变this.name的读取方式
      }
      set name() {
          //改变this.name的写入方式
      }
  }
  ```

- 数组类型

  ```typescript
  //例子1
  let arry1: number[] = [1,2,3,4] 
  
  //例子2(泛型)
  let arry3 Array<number> = []
  
  //例子3(接口)
  interface NumberArray {
      [index: number]: number;
  }
  let fibonacci: NumberArray = [1, 1, 2, 3, 5];
  ```

- 对象类型

  ```typescript
  //例子1
  let obj: object = {}
  
  ```

* 元组类型

  ```typescript
  let obj :{username: stting, age: number} = {
      username: "小明",
      age: 21
  }//自定义对象
  
  let arry2: [string, number] = [1, "2"]//自定义数组
  
  ```
## 高级类型
- 联合类型

  ```typescript
  //例子1
  let myFavoriteNumber: string | number;
  myFavoriteNumber = 'seven';
  myFavoriteNumber = 7;
  
  //例子2
  type Name = string;
  type NameResolver = () => string;
  type NameOrResolver = Name | NameResolver;
  function getName(n: NameOrResolver): Name {
      if (typeof n === 'string') {
          return n;
      } else {
          return n();
      }
  }
  ```

- 交叉类型

  ```typescript
  interface o1 {x: number, y: string}
  interface o2 {z: number}
  
  let o: o1 & o2 =  Object.assign({}, {x:1,y:'2'}, {z: 100});
  ```

- 类型断言

  有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如：

  ```typescript
  interface Cat {
      name: string;
      run(): void;
  }
  interface Fish {
      name: string;
      swim(): void;
  }
  function isFish(animal: Cat | Fish) {
      if (typeof animal.swim === 'function') {
          return true;
      }
      return false;
  }
  ```

## 接口

  - 对象接口

  - 数组接口

  - 函数接口

     ```typescript
     interface Fn {
         (a: string): string;
     }
     
     let fn: Fn = function(a) {}
     ```

  - 类接口

     一个类可以实现多个接口：

     ```typescript
     interface Alarm {
         alert(): void;
     }
     
     interface Light {
         lightOn(): void;
         lightOff(): void;
     }
     
     class Car implements Alarm, Light {
         alert() {
             console.log('Car alert');
         }
         lightOn() {
             console.log('Car light on');
         }
         lightOff() {
             console.log('Car light off');
         }
     }
     ```
## 泛型
  ```typescript
  //请查看泛型文档
  ```

## 装饰器
  ```typescript
  //请查看装饰器文档
  ```
## 声明文件

详细介绍：<https://github.com/xcatliu/typescript-tutorial/blob/master/basics/declaration-files.md>
  
