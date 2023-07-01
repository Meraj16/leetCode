// Definition: A collection of nodes, where each node stores a value and a reference to the next node in the list.

// Example: Implementing a dynamic data structure that can efficiently insert and delete elements.

// Use Case: Linked lists are useful when you need efficient insertion and deletion operations, especially in scenarios where elements frequently change.

// Code Example:


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2;