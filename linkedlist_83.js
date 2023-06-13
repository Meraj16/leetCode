// 83. Remove Duplicates from Sorted List
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

var deleteDuplicates = function(head) {
    if(head === null){
        return null;
    }

    let dummy = new ListNode(null);
    dummy.next = head;
    let curr = dummy;

    while(curr.next != null){
        if(curr.val == curr.next.val){
            curr.next = curr.next.next;
        }else{
           curr = curr.next; 
        }
    }

    return dummy.next;
};