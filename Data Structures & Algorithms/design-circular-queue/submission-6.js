class ListNode{

    constructor(val)
    {
        this.value=val
    }
}

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.size=k
        this.head=null
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        let node=new ListNode(value)
        let curr=this.head
        let success=false
        let count=1
        if(this.head==null)
        {
            this.head=node
            success=true
            return true
        }
        while(curr.next!=null)
        {   count+=1
            curr=curr.next
            
        }
        if(count<this.size)
        {
            curr.next=node
            success=true
        }
        return success==true?true:false
        
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if(this.head==null)
        {
            return false
        }
        this.head=this.head.next
        return true
    }

    /**
     * @return {number}
     */
    Front() {
        if(this.head==null)
        {
            return -1
        }
        return this.head.value
    }

    /**
     * @return {number}
     */
    Rear() {
        if(this.head==null)
        {
            return -1
        }
        let curr=this.head
        while(curr.next!=null)
        {
            curr=curr.next
        }
        return curr.value
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        if(this.head==null)
        {return true}
        return false
    }

    /**
     * @return {boolean}
     */
    isFull() {
        if(this.head==null)
        {return false}
        let curr=this.head
        let count=1
        while(curr!=null)
        {
            count+=1
            curr=curr.next
        }
        return count<this.size?false:true

    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
