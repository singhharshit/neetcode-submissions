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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        if(list1==null)
        {
            return list2
        }
        if(list2==null )
        {
            return list1
        }
        if(list1==null && list2==null)
        {
            return  null
        }
        
    let head=null
    let curr1=list1
    let curr2=list2
    if(list1.val<list2.val)
    {
        head=list1
        curr1=curr1.next

    }
    else{
        head=list2
        curr2=curr2.next
    }
let curr=head
console.log('curr',curr)
while((curr1!=null && curr2!=null))
{
    if(curr1.val<curr2.val)
    {
        curr.next=curr1
        curr1=curr1.next 
    }
    else{
        curr.next=curr2
        curr2=curr2.next
    }
    curr=curr.next
    curr.next=null
}

while(curr1!==null)
{
    curr.next=curr1
    curr1=curr1.next
    curr=curr.next
    curr.next=null
}

while(curr2!==null)
{
    curr.next=curr2
    curr2=curr2.next
    curr=curr.next
    curr.next=null
}
return head
        }
     
    }

