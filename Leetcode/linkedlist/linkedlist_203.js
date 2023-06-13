/**
 * 
    203. Remove Linked List Elements
    Input: head = [1,2,6,3,4,5,6], val = 6
    Output: [1,2,3,4,5]   
 */



var removeElements = function (head, val) {
    if (head === null) {
        return null;
    }

    let dummy = new ListNode(null);
    dummy.next = head;
    let current_node = dummy;

    while (current_node.next != null) {
        if (current_node.next.val === val) {
            current_node.next = current_node.next.next
        } else {
            current_node = current_node.next
        }
    }
    return dummy.next;
};