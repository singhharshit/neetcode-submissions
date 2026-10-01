class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let sum=0
        let left=0
        let minLen=Infinity
        for(let i=0;i<nums.length;i++)
        {
            sum+=nums[i]
            while(sum>=target)
            {
                minLen=Math.min(minLen,i-left+1)
                sum-=nums[left]
                left++
            }
            
        }
        if(minLen===Infinity)
        {
            return 0
        }
    return minLen
    }
}
