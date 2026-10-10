class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
   search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    // Find the minimum's index
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid]==target)
        {
          return true
        }

           if(nums[mid] == nums[right] && nums[mid]==nums[left]) {
            right--
            left++
        }

     else if (nums[left]<=nums[mid]) {
            if(target>=nums[left] && target<nums[mid]){
                   right=mid-1
            }
            else{
                left=mid+1
            }
        }
        else 
        {
              if( target>nums[mid] && target<=nums[right]){
                    left=mid+1
            }
            else{
               right=mid-1
            }
        }
}
return false
   }
}
