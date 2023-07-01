
// Definition: Besides the basic graph representation, graphs can be implemented using adjacency matrices or adjacency lists.

// Example: Modeling relationships between entities, network analysis.

// Use Case: Graphs are useful for representing relationships and solving problems like network analysis, shortest path algorithms, and social network analysis.

// Code Example:

// Graph implementation using an adjacency list
class Graph {
  constructor() {
    this.vertices = [];
    this.edges = new Map();
  }
}

let graph = new Graph();
graph.vertices.push("A", "B", "C");
graph.edges.set("A", ["B"]);
graph.edges.set("B", ["C"]);