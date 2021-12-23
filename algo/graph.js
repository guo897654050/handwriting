class Graph {
  constructor() {
    this.vertexes = []; //顶点集合
    this.edgeList = {}; //边集合
  }
  // 添加顶点
  addVertex(val) {
    this.vertexes.push(val);
    this.edgeList[val] = [];
  }

  // 添加边
  addEdge(val1, val2) {
    this.edgeList[val1].push(val2);
  }

  // 输出图的结构,邻接表表示法。
  toString() {
    let res = [];
    for (let i = 0; i < this.vertexes.length; i++) {
      res += this.vertexes[i] + '->';
      let vertexesList = this.edgeList[this.vertexes[i]];
      for (let edge of vertexesList) {
        res += edge + ""
      }
      res += "\n"
    }
    return res;
  }

  init() {
    // 白色: 表示该顶点还没有被访问.
    // 灰色: 表示该顶点被访问过, 但并未被探索过.
    // 黑色: 表示该顶点被访问过且被完全探索过.
    const colors = new Array(this.vertexes.length).fill("white");
    return colors;
  }

  bfs() {
    const levelNodes = [];
    let color = this.init();
    const queue = [];
    queue.push(this.vertexes[0]);
    while (queue.length) {
      const level = []
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        let item = queue.shift();
        level.push(item)
        let nodeEdges = this.edgeList[item];
        color[item] = "gray"
        for (let node of nodeEdges) {
          if (color[node] === 'white') {
            color[node] = 'gray'
            queue.push(node)
          }
        }
        color[item] = "black"
      }
      levelNodes.push(level)
    }
    return levelNodes
  }
}

// 测试代码
const graph = new Graph()
// 添加顶点，由于我们需要一个起始顶点，其中1，2均为起始顶点会有问题，自动添加一个init节点表示起始顶点
const myVertexes = ["init", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
for (let vertexe of myVertexes) {
  graph.addVertex(vertexe)
}
const backendArr = [
  ['init', 1], ['init', 2],
  [1, 3], [7, 9], [2, 3], [4, 6], [3, 4], [3, 5], [5, 7], [6, 8],]
for (let nodeArr of backendArr) {
  graph.addEdge(nodeArr[0], nodeArr[1])
}

console.log("图的邻接表表示:", graph.toString())
// 调用广度优先算法
console.log("输出每层节点:", graph.bfs())