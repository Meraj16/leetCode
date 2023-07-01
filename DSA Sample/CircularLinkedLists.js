
// Definition: A linked list where the last node points back to the first node, creating a circular structure.

// Example: Implementing data structures that require continuous looping, such as round-robin scheduling.

// Use Case: Circular linked lists are useful when you need a cyclic structure where elements can be accessed and processed indefinitely.

// Code Example:

class CircularLinkedList {
    constructor() {
        this.head = null;
    }
}

let list = new CircularLinkedList();

// Insertion and other operations can be implemented.


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class CircularLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     addToHead(value) {
//         const newNode = new Node(value);
//         newNode.next = this.head || newNode;
//         this.head = newNode;
//     }

//     removeFromHead() {
//         if (!this.head) {
//             return null;
//         }
//         const removedValue = this.head.value;
//         this.head = this.head.next === this.head ? null : this.head.next;
//         return removedValue;
//     }
// }

// // Example usage:
// let circularLinkedList = new CircularLinkedList();

// circularLinkedList.addToHead(3);
// circularLinkedList.addToHead(2);
// circularLinkedList.addToHead(1);

// console.log(circularLinkedList.removeFromHead()); // Output: 1
// console.log(circularLinkedList.removeFromHead()); // Output: 2
