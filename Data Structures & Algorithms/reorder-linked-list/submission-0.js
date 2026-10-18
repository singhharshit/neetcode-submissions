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
     * @return {void}
     */
    reorderList(head) {
        let slow=head
        let fast=head
        let prev=null
        while(fast!=null && fast.next!=null)
        { 
            slow=slow.next
            fast=fast.next.next
        }
        let second=slow.next
        slow.next=null

        let current=second

        while(current!=null)
        {
            let next=current.next
            current.next=prev
            prev=current
            current=next
        }
        let first=head
        second=prev

        while(second!=null)
        {
            let n1=first.next
            let n2=second.next

            first.next=second
            second.next=n1

            first=n1
            second=n2
        }
return head
    }
}
