
// Definition: A data structure that allows efficient retrieval of the minimum or maximum element based on priority.

// Example: Task scheduling, job prioritization.

// Use Case: Priority queues are useful when you need to process elements based on their priority or urgency.

// Code Example:

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 1);
priorityQueue.enqueue("Task 2", 2);
console.log(priorityQueue.dequeue()); 
// Output: "Task 2"