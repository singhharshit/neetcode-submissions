class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res=[]
        let left=0
        let right=nums.length-1
        nums.sort((a,b)=>a-b)
        for(let i=0;i<nums.length-2;i++)
        { 
                if(i>0 && nums[i]==nums[i-1])
                {
                    continue
                }
                left=i+1
                right=nums.length-1
                let sum= -1* nums[i]
                while(left<right )
                {  
                        if(nums[left]+nums[right] === sum)
                        {
                                res.push([nums[i],nums[left],nums[right]])
                                left++
                                right--

                                while(left<right && nums[left]==nums[left-1])
                                {
                            left++
                                }              
                                    while(right>0 && nums[right]==nums[right+1])
                                {
                            right--
                                 }
                        } 
                        else if(nums[left]+nums[right]<sum)
                        {
                            left++
                        }
                        else
                        {
                            right--
                        }
                        
                        
                }
                
        }
        return res
    }
}
