class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count =new Map()
        for(let i=0;i<nums.length;i++)
        {
            if(count.has(nums[i]))
            {
                count.set(nums[i],count.get(nums[i])+1)
            }
            else{
                count.set(nums[i],1)
            }
        }
     for(const val of count.values())
     {
        if(val>1)
        {
            return true
        }
     } 
return false
    }
}
