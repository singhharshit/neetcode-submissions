class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left=0
        let right=nums.length-1
        let res=-1
        while(left<=right)
        {
            let mid=Math.floor((left+right)/2)
            if(nums[mid]>nums[nums.length-1])
            {
                    left=mid+1
            }
            else{
                    res=mid
                    right=mid-1
            }
        }
        return res!=-1?nums[res]:-1
    }
}
