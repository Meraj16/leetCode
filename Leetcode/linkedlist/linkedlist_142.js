// 142. Linked List Cycle II
// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0

var detectCycle = function(head) {
    if(!head){
    return null;
    }

    let p = head;

    while(!p.visited){
        p.visited = true;
        p = p.next;

        if(!p){
            return null
        }
    }
    return p;
};