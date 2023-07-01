
// Definition: A self-adjusting binary search tree, promoting frequently accessed nodes closer to the root.

// Example: Efficient searching and dynamic caching.

// Use Case: Splay trees are useful when you expect certain nodes to be accessed frequently, as they optimize access times for frequently accessed elements.

// Code Example:
let splayTree = new SplayTree();
splayTree.insert(5);
splayTree.insert(3);
console.log(splayTree.search(3)); 
// Output: true