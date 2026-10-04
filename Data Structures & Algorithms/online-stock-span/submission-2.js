class StockSpanner {
    constructor() {
     this.stack=[Infinity]
     this.stock=[]
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        this.stock.push(price)
        let days=1
                while(this.stack.length>0 && this.stack[this.stack.length-1]<=price)
                {
                    this.stack.pop()
                        days++
                }
                this.stack=[]
                  for(let i=0;i<this.stock.length;i++)
        {
            this.stack.push(this.stock[i])
        }
                return days
            }
}   


/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
