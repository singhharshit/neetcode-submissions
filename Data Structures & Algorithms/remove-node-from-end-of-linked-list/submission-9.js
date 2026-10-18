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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
         let curr=head
  let count=0
  while(curr!=null)
  {
      curr=curr.next
      count+=1
  }
  if (n === count) {
    return head.next;
}

  let start=1
  let target=count-n
  curr=head
  while(start<target)
  {
      curr=curr.next
      start+=1
  }

  if(curr.next!=null)
  {
    let next=curr.next
    curr.next=curr.next.next
    curr=next
  }
return head
    }
}
