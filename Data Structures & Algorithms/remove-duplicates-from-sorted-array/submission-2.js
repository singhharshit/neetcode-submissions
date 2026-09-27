class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let map=new Map()
        let k=nums.length
        for(let i=0;i<nums.length;i++)
        {
            map.set(nums[i],(map.get(nums[i])||0)+1)
        }
        for(let i=0;i<nums.length;i++)
        {
            if(map.get(nums[i])>1)
            {
               k=k-1
              nums.splice(i,map.get(nums[i])-1)
            }
        }
        return k
    }
}
