class MinStack {
    constructor() {
        this.stack=[]
        this.minStack=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.minStack.length==0)
        {
            this.minStack.push(val)
        }
        else{
        let topVal=this.minStack[this.minStack.length-1]
        if(val<=topVal)
        {
            this.minStack.push(val)
        }
        }
   this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length===0)
        {return undefined}
        let topVal=this.stack[this.stack.length-1]
        if(topVal==this.minStack[this.minStack.length-1])
        {
            this.minStack.pop()
        }
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
         if(this.stack.length===0)
        {return undefined}
       return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
       if(this.minStack.length===0)
       {
        return undefined
       }
       return this.minStack[this.minStack.length-1]
    }
}
