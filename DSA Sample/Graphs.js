
// Definition: Collections of nodes (vertices) connected by edges. Graphs can be directed or undirected, and edges can have weights.

// Example: Modeling relationships between entities, network analysis.

// Use Case: Graphs are useful for representing relationships and solving problems like network analysis, shortest path algorithms, and social network analysis.

// Code Example:

class Graph {
  constructor() {
    this.vertices = [];
    this.edges = [];
  }
}

let graph = new Graph();
graph.vertices.push("A", "B", "C");
graph.edges.push(["A", "B"], ["B", "C"]);