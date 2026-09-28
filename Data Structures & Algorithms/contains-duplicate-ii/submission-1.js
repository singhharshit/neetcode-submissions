class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
       let window= new Set()
       let left=0
       for(let i=0;i<nums.length;i++)
       {
            if(window.has(nums[i]))
            {
                return true
            }
            else{
                window.add(nums[i])
            }

             if(window.size>=k+1)
       {
        window.delete(nums[left])
        left+=1
       }
       }
     return false 
    }
    }
