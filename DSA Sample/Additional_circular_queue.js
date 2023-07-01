class CircularQueue {
    constructor(k) {
      this.queue = new Array(k);
      this.front = -1;
      this.rear = -1;
      this.size = 0;
      this.capacity = k;
    }
  
    enqueue(value) {
      if (this.isFull()) {
        console.log("Queue is full. Unable to enqueue.");
        return;
      }
  
      if (this.isEmpty()) {
        this.front = 0;
      }
  
      this.rear = (this.rear + 1) % this.capacity;
      this.queue[this.rear] = value;
      this.size++;
  
      console.log(`Enqueued ${value} successfully.`);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty. Unable to dequeue.");
        return;
      }
  
      const dequeuedValue = this.queue[this.front];
      this.queue[this.front] = undefined;
      this.front = (this.front + 1) % this.capacity;
      this.size--;
  
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
  
      console.log(`Dequeued ${dequeuedValue} successfully.`);
  
      return dequeuedValue;
    }
  
    getFront() {
      if (this.isEmpty()) {
        console.log("Queue is empty. No front element.");
        return;
      }
  
      return this.queue[this.front];
    }
  
    getRear() {
      if (this.isEmpty()) {
        console.log("Queue is empty. No rear element.");
        return;
      }
  
      return this.queue[this.rear];
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    isFull() {
      return this.size === this.capacity;
    }
  
    display() {
      if (this.isEmpty()) {
        console.log("Queue is empty.");
        return;
      }
  
      let result = "Queue: ";
      let index = this.front;
      for (let count = 0; count < this.size; count++) {
        result += this.queue[index] + " ";
        index = (index + 1) % this.capacity;
      }
  
      console.log(result.trim());
    }
  }
  
  // Example usage:
  let circularQueue = new CircularQueue(5);
  
  circularQueue.enqueue(1); // Enqueued 1 successfully.
  circularQueue.enqueue(2); // Enqueued 2 successfully.
  circularQueue.enqueue(3); // Enqueued 3 successfully.
  
  circularQueue.display(); // Queue: 1 2 3
  
  console.log("Front:", circularQueue.getFront()); // Front: 1
  console.log("Rear:", circularQueue.getRear()); // Rear: 3
  
  circularQueue.dequeue(); // Dequeued 1 successfully.
  circularQueue.enqueue(4); // Enqueued 4 successfully.
  
  circularQueue.display(); // Queue: 2 3 4
  