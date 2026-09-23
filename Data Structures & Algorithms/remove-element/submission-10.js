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
let diff=[]
for(let i=k;i<nums.length;i++){
    if(nums[i]!==val)
    diff.push(nums[i])
}
let j=0
    for(let i=0;i<k;i++)
{
    if(nums[i]===val )
    {  
       let temp = nums[i];
       nums[i]=diff[j]
       diff[j]=temp  
       j++
    }

}
return k
    }
}
