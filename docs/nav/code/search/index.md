---
title: 查找
---

<big>作者：chenglNG(yuanchenglang)</big>

<big>日期：2020年10月12号</big>

# 查找

## 符号表
  ### 顺序查找（基于无序数组）

  遍历整个数组查找

  ### 二分查找（基于有序数组）

  在一个数组有序的前提下，去中间的点，按区域折中查找

## 二叉查找树

一棵空树或者具备这样的条件：条件若左子树不空，则左子树上所有结点的值均小于它的根结点的值；若右子树不空，则右子树上所有结点的值均大于或等于它的根结点的值；左、右子树也分别为二叉排序树。

补充一下一些概念：
  > 二叉树指是有左右之分的树

  > 完全二叉树是指除了最后一层节点不满（从左往右的节点之间没有空节点），其它层都满节点

  > 满二叉树是指节点数是满足，如果深度为k，那么子节点数为二的k次方减一，即，树的每一层都塞满节点

## 平衡查找树

平衡查找树就是一个二叉查找树。能够保证二分查找树的平衡性，如果高度为logN,那么所有查找都能在logN次比较内结束。一个2-3查找树为例：

- 2- 节点，含有一个键的和两条链，左边的节点都小于该节点，右边的节点都大于该节点
- 3- 节点，含有两个键，左边的节点都小于那两节点，中间节点位于两个键之间，右边的节点都大于那两节点

##### 2-3 查找树图示：

  ![Image from alias](~@images/code/23tree-anatomy.png)

一颗完美平衡 2-3查找树中的所有空链接到根节点的距离应该都是相同的。

## 红黑二叉查找树

就是2-3 查找树的改进，也可以说是用另一种数据结构表示显示2-3查找树。2-3查找树中，插入操作很复杂，需要不断地改变结构，红黑二叉树就是改进了这方面的不足。在红黑二差查找树中，
插入和删除(2-3-4书为例，保证不能是-2节点)操作是最为复杂的，另外其他操作的算法和查找二叉树是一样。

### 插入

左旋转

右旋转 

### 删除

2-3-4 树

自定而下分解，颜色转换

向上配平

### 红黑树的性质：

- 一个大小为N的红黑树的高度不会超过logN
- 一颗大小为N的红黑树中，根节点到人已接单的平均路径长度为~ 1.001gN

### 结论

所有基于红黑树的符号表实现都能保证操作的运行时间为对数级别（范围查找除外，他所需的额外时间和返回的键的数量成正比）

## 散列表
