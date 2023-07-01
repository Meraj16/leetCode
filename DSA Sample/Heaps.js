// Definition: Binary trees that satisfy the heap property, where each node has a value greater (in a max heap) or smaller (in a min heap) than its child nodes.

// Example: Efficiently finding the maximum or minimum element in a collection.

// Use Case: Heaps are useful for priority-based operations and efficient retrieval of the highest or lowest element.

// Code Example:
let maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
console.log(maxHeap.getMax()); // Output: 10