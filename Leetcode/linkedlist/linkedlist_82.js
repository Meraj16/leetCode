// 82. Remove Duplicates from Sorted List II
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]



var deleteDuplicates = function(head) {
    if(head === null){
       return null;
   }

   let dummy = new ListNode(null);
   dummy.next = head;
   let curr = head;
   let prev = dummy;
   
   while(curr && curr.next){
       if(curr.next && curr.val != curr.next.val ){
           curr = curr.next;
           prev = prev.next;
       }else{
           while(curr.next && curr.val === curr.next.val){
               curr = curr.next
           }
           prev.next = curr.next
           curr = curr.next
       }
   }
   
   return dummy.next;
};