class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
   maxSlidingWindow(nums, k) {
let high=0
let dequeue=[]
let res=[]
while(high<nums.length)
{
    while(dequeue.length && dequeue[0]<high-k+1)
    {
        dequeue.shift()
    }
    while(dequeue.length && nums[dequeue[dequeue.length-1]]<nums[high])
    {
        dequeue.pop()
    }
    dequeue.push(high)
    if(high>=k-1)
    {
        res.push(nums[dequeue[0]])
    }
    high++
}
return res
}
}
