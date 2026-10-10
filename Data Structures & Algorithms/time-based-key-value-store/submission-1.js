class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key))
        {
            let vals=this.keyStore.get(key)
            vals.push([timestamp,value])
            this.keyStore.set(key,vals)
        }
        else{
            this.keyStore.set(key,[[timestamp,value]])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let req=this.keyStore.get(key)
        if(!req)
        {
            return ""
        }
       else
        {
            let left=0
            let right=req.length-1
            let ans=-1
            while(left<=right)
            {
                let mid=Math.floor((left+right)/2)
              
                if(timestamp>=req[mid][0])
                {
                    left=mid+1
                    ans=mid
                }
                else{
                    right=mid-1
                }

            }
            return ans ==-1?"":req[ans][1]
        }
    }
}
