import BreadthFirstSearch from './BreadthFirstSearch.js';
import Vertex from './Vertex.js';

// Run the breadth first search algorithm
function runBFS() {
  // Grab the user input and start parsing it
  const input = document.getElementById('inputArea').value.trim().split('\n');

  // The first line of the input gives the total number of nodes in the graph
  const nodeCount = parseInt(input[0]);
  //   console.log(`Total nodes: ${nodeCount}`);

  // Create required vertices and add to array to track
  const vertices = [];
  for (let i = 0; i < nodeCount; i++) {
    vertices.push(new Vertex(i));
  }

  // For each create vertex, add neigbors as per user input to their respective adjacency list
  for (let i = 0; i < nodeCount; i++) {
    let vertex = vertices[i];
    const adj = input[i + 1].split(' ');
    adj.forEach(neighbor => {
      vertex.addNeighbor(vertices[neighbor]);
    });
  }

  //Print adjacencies
  vertices.forEach(vertex => {
    console.log(`Vertex ${vertex.getName()}: `);
    const adjList = vertex.getAdjacencyList();
    adjList.forEach(neighbor => {
      console.log(`Neighbor: ${neighbor.getName()}`);
    });
  });

  // Run BFS starting from the first vertex (index 0)
  const bfs = new BreadthFirstSearch();
  const result = bfs.traverse(vertices[0]);

  // Display the result
  document.getElementById('result').textContent = result.join(' ');
}

// Attach the runBFS function to the window object
window.runBFS = runBFS;
