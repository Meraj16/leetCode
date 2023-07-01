// 206. Reverse Linked List
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }

var reverseList = function (head) {
    if (!head) {
        return null;
    }

    let prev = null;
    let curr = head;
    // let Next = head.next;
    let Next = null;

    while (curr) {
        Next = curr.next;

        curr.next = prev;

        prev = curr;
        curr = Next;
        // Next = Next.next ;
    }

    return prev

};