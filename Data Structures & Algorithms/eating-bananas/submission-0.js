class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let maxSpeed=Math.max(...piles)
        let minSpeed=0
        let k=Math.max(...piles)
        while(minSpeed<maxSpeed)
        {   let hrs=0
            let mid=Math.trunc((minSpeed+maxSpeed)/2)
            for(let i=0;i<piles.length;i++)
            {
                hrs+=Math.ceil(piles[i]/mid)
                if(hrs>h)
                {
                    minSpeed=mid
                    break
                }
            }
            if(hrs<=h)
            {
                maxSpeed=mid
                k=Math.min(mid,k)
            }
            else if(hrs>h)
            {
                minSpeed=mid+1
            }
        }
return k
    }
}
