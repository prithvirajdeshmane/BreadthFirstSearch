class BreadthFirstSearch {
  // Start traversing the graph from the root vertex
  traverse(root) {
    const queue = []; // Queue to keep track of visited vertices
    const result = []; // Holds the vertices encountered in BFS manner

    root.setVisited(true);
    queue.push(root);

    while (queue.length > 0) {
      // Examine the vertex that is at the head of the queue
      const vertexBeingProcessed = queue.shift();
      // Add to result array
      result.push(vertexBeingProcessed.getName());

      // Process each neighbor that has not been visited
      for (const v of vertexBeingProcessed.getAdjacencyList()) {
        if (!v.isVisited()) {
          v.setVisited(true);
          queue.push(v);
        }
      }
    }

    return result;
  }
}

// Export the BreadthFirstSearch class to be used in other files
export default BreadthFirstSearch;
