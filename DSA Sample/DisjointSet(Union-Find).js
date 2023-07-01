
// Definition: A data structure that efficiently manages disjoint sets and supports union and find operations.

// Example: Tracking connected components in a graph, cycle detection.

// Use Case: Disjoint sets are useful when you need to group elements into sets and efficiently merge or find their groups.

let disjointSet = new DisjointSet();
disjointSet.makeSet(1);
disjointSet.makeSet(2);
disjointSet.union(1, 2);
console.log(disjointSet.find(1) === disjointSet.find(2)); // Output: true
