class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
   shipWithinDays(weights, days) {
        let min=Math.max(...weights)
        let max=weights.reduce((sum,wt)=>sum+ wt,0)
        while(min<max)
          { let day=1
            let load=0
            let mid=Math.floor((min+max)/2)
            for(let i=0;i<weights.length;i++)
            { 
                if(load + weights[i]>mid)
                { 
                    day+=1
                    load=0
                }
               load+=weights[i]
            }
           if(day>days)
           {
             min=mid+1
           }
        else{
          max=mid
        }
          
        }
        return min
    }
}
