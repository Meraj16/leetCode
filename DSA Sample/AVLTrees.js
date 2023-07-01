
// Definition: A balanced binary search tree, ensuring the height difference between left and right subtrees is limited.

// Example: Efficient searching, sorting, and range-based queries with automatic balancing.

// Use Case: AVL trees are useful for scenarios where you need self-balancing trees to maintain efficiency even after insertions and deletions.

// Code Example:


let avlTree = new AVLTree();
avlTree.insert(5);
avlTree.insert(3);
console.log(avlTree.search(3)); 
// Output: true