import BreadthFirstSearch from './BreadthFirstSearch.js';
import Vertex from './Vertex.js';

// Function to run the Breadth-First Search algorithm
function runBFS() {
  // Grab the user input and start parsing it
  const input = document.getElementById('inputArea').value.trim().split('\n');

  // Check if input is empty
  if (input.length === 0 || !input[0]) {
    alert('Input is empty. Please enter a graph adjacency list.');
    return;
  }

  // The first line of the input gives the total number of nodes in the graph
  const nodeCount = parseInt(input[0], 10);

  // Validate nodeCount to ensure it's a positive integer
  if (isNaN(nodeCount) || nodeCount <= 0) {
    alert('Invalid number of nodes. Please enter a positive integer.');
    return;
  }

  // Check if the number of lines in the input matches the specified number of nodes
  if (input.length - 1 !== nodeCount) {
    alert(`Input does not match the specified number of nodes (${nodeCount}).`);
    return;
  }

  // Create required vertices and add to array to track
  const vertices = [];
  for (let i = 0; i < nodeCount; i++) {
    vertices.push(new Vertex(i));
  }

  // Parse each line after the first to build the adjacency lists
  for (let i = 0; i < nodeCount; i++) {
    // Get the current vertex
    let vertex = vertices[i];

    // Split the adjacency list line into individual node indices
    const adj = input[i + 1].split(' ');

    // Validate and add each neighbor to the current vertex
    adj.forEach(neighbor => {
      const neighborIndex = parseInt(neighbor, 10);
      if (
        !isNaN(neighborIndex) &&
        neighborIndex >= 0 &&
        neighborIndex < nodeCount
      ) {
        // Add valid neighbor to adjacency list
        vertex.addNeighbor(vertices[neighborIndex]);
      } else {
        // Display alert and exit the loop
        alert(
          `Invalid neighbor index ${neighbor}. Please enter valid node indices.`
        );
        return;
      }
    });
  }

  // OPTIONAL: Print adjacencies for debugging
  //   vertices.forEach(vertex => {
  //     console.log(`Vertex ${vertex.getName()}: `);
  //     const adjList = vertex.getAdjacencyList();
  //     adjList.forEach(neighbor => {
  //       console.log(`Neighbor: ${neighbor.getName()}`);
  //     });
  //   });

  // Create a new instance of BreadthFirstSearch and run the BFS algorithm
  const bfs = new BreadthFirstSearch();
  const result = bfs.traverse(vertices[0]);

  // Display the BFS traversal result in the result div
  document.getElementById('result').textContent = result.join(' ');
}

// Attach the runBFS function to the window object to make it accessible from HTML
window.runBFS = runBFS;
