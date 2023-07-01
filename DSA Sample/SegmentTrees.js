
// Definition: A tree-like data structure used for efficiently querying ranges in an array, often used in problems involving range-based queries.

// Example: Calculating sums, finding minimum or maximum values over a range.

// Use Case: Segment trees are useful when you need efficient querying of range-based operations, such as calculating sums,
// finding minimum or maximum values, or performing range updates

class SegmentTree {
    constructor(array) {
        this.array = array;
        this.tree = new Array(4 * array.length); // Tree with 4 times the size of the input array
        this.build(0, 0, array.length - 1);
    }

    build(node, start, end) {
        if (start === end) {
            this.tree[node] = this.array[start];
        } else {
            const mid = Math.floor((start + end) / 2);
            this.build(2 * node + 1, start, mid);
            this.build(2 * node + 2, mid + 1, end);
            this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
        }
    }

    query(node, start, end, rangeStart, rangeEnd) {
        if (start > rangeEnd || end < rangeStart) {
            return 0; // Range outside the query range
        } else if (rangeStart <= start && end <= rangeEnd) {
            return this.tree[node]; // Range fully within the query range
        } else {
            const mid = Math.floor((start + end) / 2);
            const leftSum = this.query(2 * node + 1, start, mid, rangeStart, rangeEnd);
            const rightSum = this.query(2 * node + 2, mid + 1, end, rangeStart, rangeEnd);
            return leftSum + rightSum;
        }
    }
}
