class MyQueue {
    constructor() {
        this.s1=[]
        this.s2=[]
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.s2.push(x)
        this.s1.reverse()
        while(this.s1.length>0)
        {this.s2.push(this.s1.pop())}

        let temp=this.s1
        this.s1=this.s2
        this.s2=temp
        console.log('q1',this.s1)
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.empty())
        {
            return undefined
        }
       return this.s1.pop()
    }

    /**
     * @return {number}
     */
    peek() {
       if(this.empty())
        {
            return undefined
        }
        return this.s1[this.s1.length-1]
    }

    /**
     * @return {boolean}
     */
    empty() {
       return this.s1.length==0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
