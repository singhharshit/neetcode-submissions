class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let long=0
      let set=new Set(nums)
      for(let num of set)
      {
        let length=1
        if(!set.has(num-1))
        {
                let current=num
                while(set.has(current+1))
                {
                    length++
                    current++
                }
        }
        long=Math.max(long,length)
      }
      return long
    }
}
