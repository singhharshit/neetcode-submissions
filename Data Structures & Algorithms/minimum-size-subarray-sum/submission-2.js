class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
   {
    let sum=0
    let low=0
    let high=0
    let minLen=Infinity
    while(high<nums.length)
    {   sum+=nums[high]
        while(sum>=target)
        {       let len=high-low+1
                minLen=Math.min(len,minLen)
                sum-=nums[low]
                low++
        }
        high++ 
    }
    return minLen!=Infinity?minLen:0
   }
}
}