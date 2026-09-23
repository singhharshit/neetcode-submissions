class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
       
       let map=new Map()
       for(let i=0;i<nums.length;i++)
       {
        if(!map.has(nums[i]))
        {
            map.set(nums[i],1)
        }
        map.set(nums[i],map.get(nums[i])+1)
       }

       for(let i=0;i<nums.length;i++)
       {
        if(map.get(nums[i])>nums.length/2)
        {
            return nums[i]
        }
       }
    }
}
