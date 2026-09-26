class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let map=new Map()
        let res=new Set()
        for(let num of nums)
        {
            map.set(num,(map.get(num)||0)+1)
        }
for(let num of nums)
{
    if(!res.has(num) && (map.get(num)>Math.floor(nums.length/3)))
    {
      res.add(num)
      }
}
let resArray=[]
for(let el of res)
{
    resArray.push(el)
    }
return resArray
}

}
