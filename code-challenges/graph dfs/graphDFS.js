
const Stack = require('./stack-and-queues')

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    // initialize it with an empty array to add the adjacent nodes to
    this.adjacencyList.set(node, []);
    return node;
  }

  addEdge(node, destination, weight) {
    if (!this.size()) {
      return null;
    }

    const arrayOne = this.adjacencyList.get(node);
    const arrayTwo = this.adjacencyList.get(destination);
    if (node !== destination) {
      if (!weight) {
        arrayOne.push(destination);
        arrayTwo.push(node);
      } else {
        let obj = {};
        obj[destination] = weight
        arrayOne.push(obj);
        obj = {};
        obj[node] = weight
        arrayTwo.push(obj);
      }
      // this handles the case of one node and one edge
    } else {
      arrayOne.push(destination);
    }
  }

  getNodes() {
    if (!this.size()) {
      return null;
    }
    return [...this.adjacencyList.keys()];
  }

  getNeighbors(node) {
    if (!this.size()) {
      return null;
    }
    return this.adjacencyList.get(node);
  }

  size() {
    return this.adjacencyList.size;
  }

  depthFirst(graph, node) {
    const stack = new Stack();
    let visited = new Map();

    stack.push(node);
    while (!stack.isEmpty()) {
      node = stack.pop();
      if (visited[node] === false) {
        visited[node] = true;
        for (let j = 0; j < graph.adjacencyList[node].length; j++) {
          if (graph.adjacencyList[node][j] === 1) {
            stack.push(j);
          }
        }
      }
    }
  }
}

module.exports = Graph;

