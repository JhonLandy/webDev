---
title: 图(持续更新中)
---

<big>作者：糯米</big>

<big>日期：2020年10月23号</big>

# 图(持续更新中)

## 数据结构

图的表示方式有几种：

- ### 邻接矩阵

- ### 邻接链表（常用）

    ##### 图数据结构表示

    ![Image from alias](~@images/code/adjacency-lists.png)

    ##### 图的示意图

    ![Image from alias](~@images/code/graph-input.png)

    图标比较抽象，这里用图片的形式展现大概图是什么样子，长什么样。


****这是图在代码中的数据结构，它的每个顶点都是用数组的索引表示，数组每个元素保存一个链表地址(可迭代的Bag的对象，可理解为数组)，该链表保存着顶点（索引）与它相连的顶点。****


## 无向图

### 数据结构

```java
public class Graph {

    private final int V;//顶点数
    private int E;//边数
    private Bag<Integer>[] adj;//邻接表

    public Graph(int V) {
        if (V < 0) throw new IllegalArgumentException("Number of vertices must be nonnegative");
        this.V = V;
        this.E = 0;
        adj = (Bag<Integer>[]) new Bag[V];
        for (int v = 0; v < V; v++) {
            adj[v] = new Bag<Integer>();
        }
    }

    public Graph(In in) {
        this(in.readInt());
        int E = in.readInt();
        for (int i = 0; i < E; i++) {
            int v = in.readInt();
            int w = in.readInt();
            addEdge(v, w); 
        }
    }

    public int V() {//返回顶点数
        return V;
    }

    public int E() {//返回边数
        return E;
    }

    public void addEdge(int v, int w) {
        validateVertex(v);
        validateVertex(w);
        E++;
        adj[v].add(w);//将w添加到v的链表中
        adj[w].add(v);//将v添加到w的链表中
    }

    public Iterable<Integer> adj(int v) {
        validateVertex(v);
        return adj[v];
    }
}

```

### 深度优先(DFS)

```java
public class DepthFirstPaths {
    private boolean[] marked;   //标记走过的点
    private int[] edgeTo;       //一个顶点的最后一个顶点
    private final int s;        //起点

    public DepthFirstPaths(Graph G, int s) {
        this.s = s;
        edgeTo = new int[G.V()];
        marked = new boolean[G.V()];
        dfs(G, s);
    }

    // depth first search from v
    private void dfs(Graph G, int v) {//深度遍历
        marked[v] = true;
        for (int w : G.adj(v)) {
            if (!marked[w]) {
                edgeTo[w] = v;
                dfs(G, w);
            }
        }
    }

    public boolean hasPathTo(int v) {
        validateVertex(v);
        return marked[v];
    }

    public Iterable<Integer> pathTo(int v) {
        validateVertex(v);
        if (!hasPathTo(v)) return null;
        Stack<Integer> path = new Stack<Integer>();
        for (int x = v; x != s; x = edgeTo[x])
            path.push(x);
        path.push(s);
        return path;
    }
}
```

### 广度优先(BFS)

```java

public class BreadthFirstPaths {
    private boolean[] marked;  // 标记的路不再走
    private int[] edgeTo;      // 该顶点所在的边的另一端的顶点
    private int s              // 起点
    // private int[] distTo;      // 该顶点到达另一个顶点的距离

    public BreadthFirstPaths(Graph G, int s) {
        marked = new boolean[G.V()];
        // distTo = new int[G.V()];
        edgeTo = new int[G.V()];
        bfs(G, s);
    }

    public BreadthFirstPaths(Graph G, Iterable<Integer> sources) {
        marked = new boolean[G.V()];
        // distTo = new int[G.V()];
        edgeTo = new int[G.V()];
        // for (int v = 0; v < G.V(); v++)
        //     distTo[v] = INFINITY;
        bfs(G, sources);
    }

    // breadth-first search from a single source
    private void bfs(Graph G, int s) {
        Queue<Integer> q = new Queue<Integer>();
        // for (int v = 0; v < G.V(); v++)
        //     distTo[v] = INFINITY;
        // distTo[s] = 0;
        marked[s] = true;
        q.enqueue(s);//入队

        while (!q.isEmpty()) {
            int v = q.dequeue();
            for (int w : G.adj(v)) {
                if (!marked[w]) {
                    edgeTo[w] = v;
                    // distTo[w] = distTo[v] + 1;
                    marked[w] = true;
                    q.enqueue(w);
                }
            }
        }
    }

    public boolean hasPathTo(int v) {
        return marked[v];
    }

    public int distTo(int v) {
        return distTo[v];
    }

    public Iterable<Integer> pathTo(int v) {//获取最短路径
        if (!hasPathTo(v)) return null;
        Stack<Integer> path = new Stack<Integer>();
        int x;
        for (x = v; distTo[x] != 0; x = edgeTo[x])
            path.push(x);
        path.push(x);
        return path;
    }
}

```


## 有向图

有向图 用于 标记 - 清楚的垃圾收集，被标记的为可达对象，否则为不可达对象。内存中可达的对象不会被回收，不可达的将会被回收，内存释放。例如浏览器的回收机制，垃圾回收就是使用类似的算法。DFS 和 BFS 算法和 无向图类似。

### 数据结构

```java
public class Digraph {

    private final int V;           
    private int E;                
    private Bag<Integer>[] adj; 
    // private int[] indegree;   // 入度，到达该顶点的边数
    
    public Digraph(int V) {
        this.V = V;
        this.E = 0;
        indegree = new int[V];
        adj = (Bag<Integer>[]) new Bag[V];
        for (int v = 0; v < V; v++) {
            adj[v] = new Bag<Integer>();
        }
    }

    public int V() { return V; }

    public int E() { return E; }

    public void addEdge(int v, int w) {
        validateVertex(v);
        validateVertex(w);
        adj[v].add(w);
        // indegree[w]++;
        E++;
    }

    public Iterable<Integer> adj(int v) {
        return adj[v];
    }
}
```

## 拓扑排序

解决优先调度问题，如果有环，则问题无法解决，所以拓扑排布得以 无环 作为前提条件进行。一般用深度优先的方式，再反序就能到事情的安排顺序。当然也有特殊的，得按实际的问题去改进算法解决。例如：

##### 已知有 N 门课程，它们以 1 到 N 进行编号。
##### - 给你一份课程关系表 relations[i] = [X, Y]，用以表示课程 X 和课程 Y 之间的先修关系：课程 X 必须在课程 Y 之前修完。
##### - 假设在一个学期里，你可以学习任何数量的课程，但前提是你已经学习了将要学习的这些课程的所有先修课程。
##### - 请你返回学完全部课程所需的最少学期数。
##### - 如果没有办法做到学完全部这些课程的话，就返回 -1。

***<small>来源：力扣（LeetCode）</small>***
***<small>链接：</small><https://leetcode-cn.com/problems/parallel-courses>***

##### 思路：
> 1. 先构造图的结构
> 2. signal标记后置课程，没标记的为前置课程
> 3. 遍历前置课程队列，并标记前置课程的后续课程（后置课程），放进队列，如此循环
> 4. signal标记值不为0的就表示有环（1或-1）
> 5. 返回结果

```js
var minimumSemesters = function(N, relations) {

    const graph = Array(N).fill(0)//开辟数组
    const signal = [...graph]//作用是标记入度和判断是否有环
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
        signal[to]++//标记后置课程
    }
    for (let i = 0;i <N;i++) {
        if (signal[i] === 0)
            queue.push(i)//前置课程放进队列
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


## 最小生成树（无向图）

目前的学习，主要通过代码学习，所以看代码相对很容易理解，这里我就先上代码，理论的东西后续补充。

##### 最小生成树的 Prim 算法（延时版本）

```java
public class LazyPrimMST {
    private static final double FLOATING_POINT_EPSILON = 1E-12;

    // private double weight;       // total weight of MST
    private Queue<Edge> mst;     // 最小生成树的边
    private boolean[] marked;    // 最小生成树的顶点
    private MinPQ<Edge> pq;      // 横切边（包括失效的）

    public LazyPrimMST(EdgeWeightedGraph G) {
        mst = new Queue<Edge>();
        pq = new MinPQ<Edge>();
        marked = new boolean[G.V()];
        
        scan(G, s);
        while (!pq.isEmpty()) {                        
            Edge e = pq.delMin();                      
            int v = e.either(), w = e.other(v);        
            if (marked[v] && marked[w]) continue;      // 跳过失效的边
            mst.enqueue(e);                            
            weight += e.weight();
            if (!marked[v]) scan(G, v);              
            if (!marked[w]) scan(G, w);               
        }     
    }

    private void scan(EdgeWeightedGraph G, int v) {
        marked[v] = true;
        for (Edge e : G.adj(v))
            if (!marked[e.other(v)]) pq.insert(e);
    }
    
    public Iterable<Edge> edges() {
        return mst;
    }

    // public double weight() {
    //     return weight;
    // }

}
```

##### 最小生成树的 Prim 算法（即时版本）

```java
public class PrimMST {
    private static final double FLOATING_POINT_EPSILON = 1E-12;

    private Edge[] edgeTo;        // 离树最近的边
    private double[] distTo;      // 权值
    private boolean[] marked;     // 最小生成树的顶点
    private IndexMinPQ<Double> pq; //有效的横切边

    public PrimMST(EdgeWeightedGraph G) {
        edgeTo = new Edge[G.V()];
        distTo = new double[G.V()];
        marked = new boolean[G.V()];
        pq = new IndexMinPQ<Double>(G.V());
        for (int v = 0; v < G.V(); v++)
            distTo[v] = Double.POSITIVE_INFINITY;

        distTo[s] = 0.0;
        pq.insert(s, distTo[s]);
        while (!pq.isEmpty()) {
            int v = pq.delMin();
            scan(G, v);
        }
    }

    private void scan(EdgeWeightedGraph G, int v) {
        marked[v] = true;
        for (Edge e : G.adj(v)) {
            int w = e.other(v);
            if (marked[w]) continue;         // v-w 失效
            if (e.weight() < distTo[w]) {
                distTo[w] = e.weight();
                edgeTo[w] = e;
                if (pq.contains(w)) pq.decreaseKey(w, distTo[w]);
                else                pq.insert(w, distTo[w]);
            }
        }
    }

    public Iterable<Edge> edges() {
        Queue<Edge> mst = new Queue<Edge>();
        for (int v = 0; v < edgeTo.length; v++) {
            Edge e = edgeTo[v];
            if (e != null) {
                mst.enqueue(e);
            }
        }
        return mst;
    }

    public double weight() {
        double weight = 0.0;
        for (Edge e : edges())
            weight += e.weight();
        return weight;
    }
｝
```

##### Kruskal算法

```java
public class KruskalMST {

    private Queue<Edge> mst = new Queue<Edge>();  // edges in MST

    public KruskalMST(EdgeWeightedGraph G) {
        MinPQ<Edge> pq = new MinPQ<Edge>();
        for (Edge e : G.edges()) {
            pq.insert(e);
        }

        UF uf = new UF(G.V());
        while (!pq.isEmpty() && mst.size() < G.V() - 1) {
            Edge e = pq.delMin();
            int v = e.either();
            int w = e.other(v);
            if (uf.find(v) != uf.find(w)) { // v-w does not create a cycle
                uf.union(v, w);  // merge v and w components
                mst.enqueue(e);  // add edge e to mst
                weight += e.weight();
            }
        }
    }

    public Iterable<Edge> edges() {
        return mst;
    }

    public double weight() {
        return weight;
    }
}
```
## 最短路径（有向图）

### 无环加权有向图

##### Dijkstra 算法

```java
public class DijkstraSP {
    private double[] distTo;          // 到某个顶点的距离
    private DirectedEdge[] edgeTo;    // 最短的边
    private IndexMinPQ<Double> pq;    // priority queue of vertices

    public DijkstraSP(EdgeWeightedDigraph G, int s) {

        distTo = new double[G.V()];
        edgeTo = new DirectedEdge[G.V()];

        validateVertex(s);

        for (int v = 0; v < G.V(); v++)
            distTo[v] = Double.POSITIVE_INFINITY;
        distTo[s] = 0.0;

        pq = new IndexMinPQ<Double>(G.V());
        pq.insert(s, distTo[s]);
        while (!pq.isEmpty()) {
            int v = pq.delMin();
            for (DirectedEdge e : G.adj(v))
                relax(e);
        }

    }

    private void relax(DirectedEdge e) {//更新最短路径
        int v = e.from(), w = e.to();
        if (distTo[w] > distTo[v] + e.weight()) {
            distTo[w] = distTo[v] + e.weight();
            edgeTo[w] = e;
            if (pq.contains(w)) pq.decreaseKey(w, distTo[w]);
            else                pq.insert(w, distTo[w]);
        }
    }

    public double distTo(int v) {
        validateVertex(v);
        return distTo[v];
    }

    public boolean hasPathTo(int v) {
        validateVertex(v);
        return distTo[v] < Double.POSITIVE_INFINITY;
    }

    public Iterable<DirectedEdge> pathTo(int v) {
        validateVertex(v);
        if (!hasPathTo(v)) return null;
        Stack<DirectedEdge> path = new Stack<DirectedEdge>();
        for (DirectedEdge e = edgeTo[v]; e != null; e = edgeTo[e.from()]) {
            path.push(e);
        }
        return path;
    }
}
```

### 并行任务调度（最长路径）

将任务按照拓扑排序的顺序执行，并从中找出关键路径（最长路径，执行任务的总时间）。将relax方法中的不等式箭头反过来，稍作修改即刻。

##### 关键路径算法

```java
public class CPM {

    private CPM() { }

    public static void main(String[] args) {

        // number of jobs
        int n = StdIn.readInt();

        // source and sink
        int source = 2*n;
        int sink   = 2*n + 1;

        // build network
        EdgeWeightedDigraph G = new EdgeWeightedDigraph(2*n + 2);
        for (int i = 0; i < n; i++) {
            double duration = StdIn.readDouble();
            G.addEdge(new DirectedEdge(source, i, 0.0));
            G.addEdge(new DirectedEdge(i+n, sink, 0.0));
            G.addEdge(new DirectedEdge(i, i+n,    duration));

            // precedence constraints
            int m = StdIn.readInt();
            for (int j = 0; j < m; j++) {
                int precedent = StdIn.readInt();
                G.addEdge(new DirectedEdge(n+i, precedent, 0.0));
            }
        }

        // compute longest path
        AcyclicLP lp = new AcyclicLP(G, source);

        // print results
        StdOut.println(" job   start  finish");
        StdOut.println("--------------------");
        for (int i = 0; i < n; i++) {
            StdOut.printf("%4d %7.1f %7.1f\n", i, lp.distTo(i), lp.distTo(i+n));
        }
        StdOut.printf("Finish time: %7.1f\n", lp.distTo(sink));
    }
}
```

### 一般加权有向图的最短路径问题（有环，有负权重环）

##### Bellman-Ford 算法

```java
public class BellmanFordSP {
    private double[] distTo;               // 起点到某个顶点的长度
    private DirectedEdge[] edgeTo;         // 起点到某个顶点的最后一条边
    private boolean[] onQueue;             // 该顶点是否在队列中
    private Queue<Integer> queue;          // 正在放松的顶点
    private int cost;                      // number of calls to relax()
    private Iterable<DirectedEdge> cycle;  // edgeTo[] 是否有负权重环

    public BellmanFordSP(EdgeWeightedDigraph G, int s) {
        distTo  = new double[G.V()];
        edgeTo  = new DirectedEdge[G.V()];
        onQueue = new boolean[G.V()];
        for (int v = 0; v < G.V(); v++)
            distTo[v] = Double.POSITIVE_INFINITY;
        distTo[s] = 0.0;

        // Bellman-Ford algorithm
        queue = new Queue<Integer>();
        queue.enqueue(s);
        onQueue[s] = true;
        while (!queue.isEmpty() && !hasNegativeCycle()) {
            int v = queue.dequeue();
            onQueue[v] = false;
            relax(G, v);
        }

        assert check(G, s);
    }

    private void relax(EdgeWeightedDigraph G, int v) {
        for (DirectedEdge e : G.adj(v)) {
            int w = e.to();
            if (distTo[w] > distTo[v] + e.weight()) {
                distTo[w] = distTo[v] + e.weight();
                edgeTo[w] = e;
                if (!onQueue[w]) {
                    queue.enqueue(w);
                    onQueue[w] = true;
                }
            }
            if (++cost % G.V() == 0) {
                findNegativeCycle();
                if (hasNegativeCycle()) return;  // found a negative cycle
            }
        }
    }

    public boolean hasNegativeCycle() {
        return cycle != null;
    }

    public Iterable<DirectedEdge> negativeCycle() {
        return cycle;
    }

    private void findNegativeCycle() {
        int V = edgeTo.length;
        EdgeWeightedDigraph spt = new EdgeWeightedDigraph(V);
        for (int v = 0; v < V; v++)
            if (edgeTo[v] != null)
                spt.addEdge(edgeTo[v]);

        EdgeWeightedDirectedCycle finder = new EdgeWeightedDirectedCycle(spt);
        cycle = finder.cycle();
    }

    public double distTo(int v) {
        validateVertex(v);
        if (hasNegativeCycle())
            throw new UnsupportedOperationException("Negative cost cycle exists");
        return distTo[v];
    }

    public boolean hasPathTo(int v) {
        validateVertex(v);
        return distTo[v] < Double.POSITIVE_INFINITY;
    }

    public Iterable<DirectedEdge> pathTo(int v) {
        validateVertex(v);
        if (hasNegativeCycle())
            throw new UnsupportedOperationException("Negative cost cycle exists");
        if (!hasPathTo(v)) return null;
        Stack<DirectedEdge> path = new Stack<DirectedEdge>();
        for (DirectedEdge e = edgeTo[v]; e != null; e = edgeTo[e.from()]) {
            path.push(e);
        }
        return path;
    }
}
```

