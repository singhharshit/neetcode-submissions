// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
    if(head==null)
    {
        return null
    }
    let curr=head
    while(curr!=null)
    {
        let copy=new Node(curr.val)
        copy.next=curr.next
        curr.next=copy
        curr=copy.next
    }
    curr=head
    while(curr!=null && curr.next!=null)
    
    { 
        let copy=curr.next
         if(curr.random!=null)
       { 
        copy.random=curr.random.next
       }
       curr=copy.next
    }

    curr=head
    let head2=head.next
    while(curr!=null)
    {
        let copy=curr.next
        curr.next=copy.next
        if(copy.next!=null){
        copy.next=copy.next.next
        }
   curr=curr.next
    }
    return head2
    }
}
