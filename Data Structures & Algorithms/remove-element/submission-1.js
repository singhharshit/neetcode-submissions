class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k=nums.length
        for(let i=0;i<nums.length;i++)
        {
            if(nums[i]===val){
                k--
            }
        }
let j=k
for(let i=0;i<k;i++)
{
    if(nums[i]===val )
    {   while(nums[j]===nums[i]){j+=1}
        {
        let temp=nums[i]
        nums[i]=nums[j]
        nums[j]=temp
        }
        
    }
}
return k
    }
}
