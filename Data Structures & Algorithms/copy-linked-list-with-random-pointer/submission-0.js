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
        {return null}

    let nodes=new Map()
    let curr=head
    while(curr!=null)
    {
        nodes.set(curr,new Node(curr.val))
        curr=curr.next
    }

    curr=head
    while(curr!=null)
    {
        let copy=nodes.get(curr)

        copy.next=curr.next?nodes.get(curr.next):null
        copy.random=curr.random?nodes.get(curr.random):null

        curr=curr.next
    }
    return nodes.get(head)
    }
}
