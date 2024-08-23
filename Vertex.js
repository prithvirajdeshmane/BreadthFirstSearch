class Vertex {
  constructor(name) {
    this.name = name;
    this.visited = false;
    this.adjacencyList = [];
  }

  getName() {
    return this.name;
  }

  isVisited() {
    return this.visited;
  }

  setVisited(visited) {
    this.visited = visited;
  }

  getAdjacencyList() {
    return this.adjacencyList;
  }

  addNeighbor(vertex) {
    this.adjacencyList.push(vertex);
  }
}

// Export the Vertex class to be used in other files
export default Vertex;
