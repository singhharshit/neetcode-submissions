class ListNode{

    constructor(key,val)
    {
        this.key=key
        this.val=val
        this.freq=1
        this.next=null
        this.prev=null
    }
}

class List{

    constructor()
    {   
        this.head=new ListNode(0,0)
        this.tail=new ListNode(0,0)
        this.head.next=this.tail
        this.tail.prev=this.head
        this.size=0
    }

  remove(node)
    {
        node.prev.next=node.next
        node.next.prev=node.prev
         this.size--
        if(this.size<0)
        {
            this.size=0
        }
    }

    add(node)
    {
        node.prev=this.head
        node.next=this.head.next
        this.head.next.prev=node
        this.head.next=node
        this.size++
    }
    
}

class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity=capacity
        this.map=new Map()
        this.freqMap=new Map()
        this.minFreq=0
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {

        if(this.capacity===0)
        {return}

        if(!this.map.has(key))
        {return -1}

        let node=this.map.get(key)
        const currList=this.freqMap.get(node.freq)
        let oldList=this.freqMap.get(this.minFreq)
                    currList.remove(node)

        if(node.freq==this.minFreq && oldList.size==0)
        {
            this.minFreq++
        }
        let reqFreq=node.freq+1
       if(!this.freqMap.has(reqFreq))
        {
            this.freqMap.set(reqFreq,new List())
        }
        const list=this.freqMap.get(reqFreq)
        node.freq=reqFreq
        currList.remove(node)
        list.add(node)
        return node.val

    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if(this.capacity==0)
        {
            return
        }

        if(this.map.has(key))
        {
             let node=this.map.get(key)
            node.val=value
              const currList=this.freqMap.get(node.freq)
            let oldList=this.freqMap.get(this.minFreq)
                        currList.remove(node)

        if(node.freq==this.minFreq && oldList.size==0)
        {
            this.minFreq++
        }
            let reqFreq=node.freq+1
            if(!this.freqMap.has(reqFreq))
            {
            this.freqMap.set(reqFreq,new List())
            }
            const list=this.freqMap.get(reqFreq)
            node.freq=reqFreq
            if(currList!=null){
            }
            list.add(node)
            return
        }
        if(this.capacity==this.map.size)
            {
                const list=this.freqMap.get(this.minFreq)
                const lru=list.tail.prev
                list.remove(lru)
                this.map.delete(lru.key)
            }
        this.minFreq=1
          if(!this.freqMap.has(this.minFreq))
            {
            this.freqMap.set(this.minFreq,new List())
            }
         const list=this.freqMap.get(this.minFreq)
         let node=new ListNode(key,value)
         list.add(node)
         this.map.set(key,node)
         this.minFreq=1
         return
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
