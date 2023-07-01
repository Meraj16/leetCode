// 876. Middle of the Linked List
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.


var middleNode = function(head) {
    if(!head){
        return null
    }

    let dummy = new ListNode(null);
    dummy.next = head
    let p1 = dummy;
    let p2 = dummy;

    while(p2 && p2.next && p2.next.next){
        p1 = p1.next;
        p2 = p2.next.next;
    }

    return p1.next;
};