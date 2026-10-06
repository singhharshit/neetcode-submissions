class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left=0
        let right=nums.length-1
        let mid=-1
        let found=false
        while(left<=right)
        {  
            mid=Math.floor((left+right)/2)
            if(target==nums[mid])
            {
                found=true
                break
            }
            else if(target<nums[mid]){
                right=mid-1
            }
            else
            {
                left=mid+1
            }
        }
        if(found==true)
        {
            return mid
        }
        return -1
    }
}
