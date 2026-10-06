class FreqStack {
    constructor() {
       this.freq=new Map()
       this.freqGroup=new Map()
       this.maxFreq=0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
       this.freq.set(val,(this.freq.get(val)||0)+1)
       let freqval=this.freq.get(val)
      if(this.freqGroup.has(freqval))
      { let set=this.freqGroup.get(freqval)
        set.push(val)
        this.freqGroup.set(freqval,set)
      }
      else{
        this.freqGroup.set(freqval,[val])
      }
    this.maxFreq=Math.max(freqval,this.maxFreq)
    }

    /**
     * @return {number}
     */
    pop() {
        let numSet=this.freqGroup.get(this.maxFreq)
        let num=numSet.pop()
        this.freq.set(num,this.freq.get(num)-1)
        if(numSet.length==0)
        { 
            this.maxFreq=this.maxFreq-1
        }
        return num
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
