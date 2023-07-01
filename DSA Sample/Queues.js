// Definition: First-In-First-Out (FIFO) data structures where elements are added to the rear and removed from the front.

// Example: Managing requests, task scheduling.

// Use Case: Queues are useful when you need to manage tasks or processes in the order they were received.

// Code Example:

let queue = [];
queue.push(1);
queue.push(2);
console.log(queue.shift()); // Output: 1