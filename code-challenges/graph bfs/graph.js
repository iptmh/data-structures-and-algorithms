/* eslint-disable no-dupe-class-members */
const Queue = require('./queue')

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

  // breadthFirst(node) {
  //   const queue = new Queue();
  //   const nodes = [];
  //   const visited = new Set();
  //   queue.enqueue(node);

  //   while (queue.length > 0) {
  //     let front = queue.dequeue();
  //     nodes.push(front);
  //     this.getNeighbors(node).map(child => {
  //       if (!visited.has(child)) {
  //         visited.add(child);
  //         queue.enqueue(child);
  //       }
  //     })
  //   }
  //   return nodes;
  // }

  breadthFirst(node) {
    const visited = new Set();
    // const queue = [node];
    const queue = new Queue();
    const nodes = [];
    queue.enqueue(node);

    while (queue.length > 0) {
      let front = queue.dequeue();
      let destinations = this.adjacencyList.get(front);
      console.log(destinations);
      nodes.push(front);
      for (const destination of destinations) {
        if (!visited.has(destination)) {
          visited.add(destination);
          queue.push(destination);
        }
      }
    }
    return queue;
  }
}

module.exports = Graph;

