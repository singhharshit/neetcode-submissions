class ListNode{
    constructor(key,val)
    {
        this.key=key
        this.next=null
        this.prev=null
        this.val=val
    }
}

class LRUCache{

    constructor(capacity)
    {
        this.map=new Map()
        this.capacity=capacity
        this.head=new ListNode(0,0)
        this.tail=new ListNode(0,0)
        this.head.next=this.tail
        this.tail.prev=this.head
    }

    remove(node)
    {
        node.prev.next=node.next
        node.next.prev=node.prev
    }

    insertToFront(node)
    {
        node.prev=this.head
        node.next=this.head.next
    
        this.head.next.prev=node
        this.head.next=node
        
    }

    get(key){
        if(!this.map.has(key))
        {
            return -1
        }

        let node=this.map.get(key)
        this.remove(node)
        this.insertToFront(node)
        return node.val
    }

    put(key,val)
    {
        if(this.capacity==0)
        {
            return 
        }

        if(this.map.has(key))
        {
            let node=this.map.get(key)
            node.val=val
            this.remove(node)
            this.insertToFront(node)
            return
        }

        if(this.capacity==this.map.size)
        {
            const lru=this.tail.prev
            this.map.delete(lru.key)
            this.remove(lru)
        }

        const node=new ListNode(key,val)
        this.insertToFront(node)
        this.map.set(key,node)
        return
    }

}