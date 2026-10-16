/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        if(head==null)
        {
            return null
        }
        if(left==right)
        {
            return head
        }
       let count=0
       let curr=head
       let before=null
       while(count<left-1)
       {
        before=curr
        curr=curr.next
        count+=1
       }
       let last=curr
       let prev=null
       let track=right-left+1
       let start=0
        while(start<track)
        { 
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
            start+=1
        }
        last.next=curr
       if(before!=null){
        before.next=prev
        return head
        }
    return prev
    }
}
