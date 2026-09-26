class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
      let count=0
      let sum=0
      let map=new Map()
      map.set(0,1)
      for(let i=0;i<nums.length;i++)
      {
        sum+=nums[i]
        let req=sum-k
        if(map.has(req))
        {
            count+=map.get(req)
        }
        map.set(sum,(map.get(sum)||0)+1)
      }
      return count
}
}
