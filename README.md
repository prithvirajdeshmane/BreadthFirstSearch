# Breadth-First Search Visualization

This project implements a Breadth-First Search (BFS) algorithm on a graph. The graph is input by the user in the form of an adjacency list, and the BFS traversal order is displayed on the web page.

## Table of Contents

- [Project Structure](#project-structure)
- [Usage](#usage)
- [Input Format](#input-format)
- [Example](#example)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project consists of the following files:

- `index.html`: The main HTML file that contains the user interface.
- `App.js`: The main JavaScript file that handles user input, initializes the graph, and runs the BFS algorithm.
- `BreadthFirstSearch.js`: Contains the implementation of the Breadth-First Search algorithm.
- `Vertex.js`: Defines the `Vertex` class, which represents a node in the graph.

## Usage

1. Open [Demo page](https://prithvirajdeshmane.github.io/BreadthFirstSearch/) in your web browser.
2. Enter the graph's adjacency list in the textarea provided.
3. Click the "Run BFS" button to execute the BFS algorithm.
4. The result of the BFS traversal will be displayed below the button.

## Input Format

- The first line of the input should contain an integer `n`, representing the number of vertices in the graph.
- The following `n` lines should each contain space-separated integers. Each line represents the adjacency list for a vertex, with the indices corresponding to other vertices it is connected to.

### Example Inputs

**Example 1:**

```
3
1 2
0 2
0 1
```

This input represents a graph with 3 vertices:

- Vertex 0 is connected to vertices 1 and 2.
- Vertex 1 is connected to vertices 0 and 2.
- Vertex 2 is connected to vertices 0 and 1.

### Example Output

Given the example input above, the BFS traversal starting from vertex 0 would produce the output:
`0 1 2`

**Example 2:**

```
8
1 5 6
0 2 3
1
1 4
3
0
0 7
6
```

The output here would be: `0 1 5 6 2 3 7 4`

**Example 3:**

```
11
1 3 6 8
0 2 4
1
0 4 5
1 3
3
0 7
6 8 9
0 7 10
7
8
```

The output here would be: `0 1 3 6 8 2 4 5 7 10 9`

## Technologies Used

- **HTML5**: For structuring the web page.
- **JavaScript (ES6)**: For implementing the BFS algorithm and handling user interactions.
- **CSS3**: Basic styling (optional, you can add your own).

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to fork the repository and submit a pull request.

Or, alternately, file an issue [here](https://github.com/prithvirajdeshmane/BreadthFirstSearch/issues)

## License

This project is licensed under the GNU GPL-3.0 License. See the [LICENSE](LICENSE) file for more details.
