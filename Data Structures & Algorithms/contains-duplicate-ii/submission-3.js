class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
     let window=new Set()
     let low=0
     let high=0
     while(high<nums.length)
     {
        while(window.size>k)
        {
            window.delete(nums[low])
            low++
        }
        if(window.has(nums[high]) && high!=low)
        {
                return true
        }
        window.add(nums[high])
        high++
     }
     return false
    }
    }
