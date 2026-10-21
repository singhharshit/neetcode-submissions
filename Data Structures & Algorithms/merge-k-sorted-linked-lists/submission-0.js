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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {

          if (lists.length === 0) {
        return null;
    }

        while(lists.length>1)
        {  let mergedList=[]
            for(let i=0;i<lists.length;i=i+2)
            {
                    if(i+1<lists.length)
                    {
                        let list=this.merge(lists[i],lists[i+1])
                        mergedList.push(list)
                    }
                    else{
                mergedList.push(lists[i])
                    }
            }
            lists=mergedList
        }
          return lists[0];
    }

merge(list1,list2)
{

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

    let curr1=list1
    let curr2=list2
    let head=null
    let curr=head
    while(curr1!=null && curr2!=null)
    {
        if(curr1.val<curr2.val)
        {
            if(head==null)
            {
                head=curr1
                curr=head
            }
            else{
               curr.next=curr1
               curr=curr.next
            }
            curr1=curr1.next
        }
        else{
              if(head==null)
            {
                head=curr2
                curr=head
            }
            else{
               curr.next=curr2
               curr=curr.next

            }
            curr2=curr2.next
        }
        curr.next=null
    }
    while(curr1!=null)
    {
         if(head==null)
            {
                head=curr1
                curr=head
            }
            else{
               curr.next=curr1
               curr=curr.next
            }
            curr1=curr1.next
            curr.next=null
    }

      while(curr2!=null)
    {
         if(head==null)
            {
                head=curr2
                curr=head
            }
            else{
               curr.next=curr2
               curr=curr.next
            }
            curr2=curr2.next
            curr.next=null
    }
    return head
}

}

