
// Definition: A probabilistic data structure used to test whether an element is a member of a set.

// Example: Checking for the existence of an item in a large dataset.

// Use Case: Bloom filters are useful when you need to quickly check membership in a set while allowing a small probability of false positives.

// Bloom Filters can be implemented using hash functions and bit arrays. Here's a simplified example:

// Code Example: 

class BloomFilter {
    constructor(size, hashFunctions) {
      this.size = size; // Size of the bit array
      this.hashFunctions = hashFunctions; // Array of hash functions
      this.bitArray = new Array(size).fill(false);
    }
  
    add(element) {
      for (let i = 0; i < this.hashFunctions.length; i++) {
        const index = this.hashFunctions[i](element) % this.size;
        this.bitArray[index] = true;
      }
    }
  
    contains(element) {
      for (let i = 0; i < this.hashFunctions.length; i++) {
        const index = this.hashFunctions[i](element) % this.size;
        if (!this.bitArray[index]) {
          return false;
        }
      }
      return true;
    }
  }
  