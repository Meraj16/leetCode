// 141. Linked List Cycle
// Input: head = [3,2,0,-4], pos = 1
// Output: true

var hasCycle = function(head) {
    if(!head){
        return false;
    }

    let p = head;

    while(!p.visited){
        p.visited = true;
        p = p.next;

        if(!p){
            return false
        }
    }
    return true;
};