// Definition: Hierarchical data structures consisting of nodes, where each node can have child nodes.

// Example: Representing file systems, organizing hierarchical data.

// Use Case: Trees are useful for representing hierarchical relationships and organizing data in a structured manner.

// Code Example:


class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

let root = new TreeNode("A");
let child1 = new TreeNode("B");
let child2 = new TreeNode("C");
root.children.push(child1, child2);