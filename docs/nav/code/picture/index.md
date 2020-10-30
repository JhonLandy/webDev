---
title: 图
---

<big>作者：chenglNG(yuanchenglang)</big>

<big>日期：2020年10月23号</big>

# 图

## 数据结构

图的表示方式有几种：

- ### 邻接矩阵

- ### 邻接链表

##### 图的示意图

![Image from alias](~@images/code/graph-input.png)

图标比较抽象，这里用图片的形式展现大概图是什么样子，长什么样。

##### 图数据结构表示

![Image from alias](~@images/code/adjacency-lists.png)


这是图在代码中的数据结构，它的每个顶点都是用数组的索引表示，数组每个元素保存一个链表地址，该链表保存着顶点（索引）与它相连的顶点。


## 无向图

### 深度优先(DFS)




## 有向图

### 广度优先(BFS)


## 拓扑排序

解决优先调度问题。一般用深度优先的方式，再反序就能到事情的安排顺序。当然也有特殊的，得按实际的问题去改进算法解决。例如：
##### 已知有 N 门课程，它们以 1 到 N 进行编号。
##### - 给你一份课程关系表 relations[i] = [X, Y]，用以表示课程 X 和课程 Y 之间的先修关系：课程 X 必须在课程 Y 之前修完。
##### - 假设在一个学期里，你可以学习任何数量的课程，但前提是你已经学习了将要学习的这些课程的所有先修课程。
##### - 请你返回学完全部课程所需的最少学期数。
##### - 如果没有办法做到学完全部这些课程的话，就返回 -1。

***<small>来源：力扣（LeetCode）</small>***
***<small>链接：</small><https://leetcode-cn.com/problems/parallel-courses>***

```js
var minimumSemesters = function(N, relations) {

    const graph = Array(N).fill(0)//开辟数组
    const signal = [...graph]
    const queue = []
    let count = 0
    for (const [a, b] of relations) {//初始化图数据结构
        const from = a - 1
        const to = b - 1
        if (graph[from]) {
            graph[from].push(to)
        } else {
            graph[from] = [to]
        }
        signal[to]++
    }
    for (let i = 0;i <N;i++) {
        if (signal[i] === 0)
            queue.push(i)
    }
    while (queue.length > 0) {
        const size = queue.length
        for (let i = 0;i < size;i++) {//一次循环，一个学期
            const cur = queue.shift()
            for (let i = 0;i < graph[cur].length;i++) {
                signal[graph[cur][i]]--
                if(signal[graph[cur][i]] == 0) {
                    queue.push(graph[cur][i])
                }
            }
        }
        count++
    }
    return signal.some(item => item !== 0) ? -1 : count
};
```

时间复杂度 为 O（E + V）,E为节点数，第一层循环次数刚好是节点数V，第二层循环刚还是E，那么空间复杂度 为 O（E + V）(注：其他先忽略， 仅学习参考)，***执行结果：***

![Image in alias](~@images/code/1604035974.jpg)