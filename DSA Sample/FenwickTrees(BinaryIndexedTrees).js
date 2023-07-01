
// Definition: A tree-like data structure used to efficiently compute and update prefix sums of an array.

// Use Case: Fenwick Trees are useful when you need to efficiently compute and update prefix sums, 
        //such as in range-based query problems and cumulative frequency computations.

// Example

class FenwickTree {
    constructor(size) {
      this.tree = new Array(size + 1).fill(0);
    }
  
    update(index, value) {
      while (index < this.tree.length) {
        this.tree[index] += value;
        index += index & -index;
      }
    }
  
    query(index) {
      let sum = 0;
      while (index > 0) {
        sum += this.tree[index];
        index -= index & -index;
      }
      return sum;
    }
  }
  
  let fenwickTree = new FenwickTree(5);
  fenwickTree.update(2, 3);
  fenwickTree.update(4, 1);
  let prefixSum = fenwickTree.query(4); // Output: 4
  