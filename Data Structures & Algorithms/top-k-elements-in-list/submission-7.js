class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

   let map=new Map()

for(let num of nums)
{

  map.set(num, (map.get(num) || 0) + 1);
}

const buckets = Array.from({ length: nums.length + 1 }, () => []);

for(const [key,val] of map)
{
    buckets[val].push(key)
}

let res=[]
let flabucket=buckets.flat()
let j=0
for(let i=flabucket.length-1;i>=0;i-- )
{
   res.push(flabucket[i])
   j++
   if(j>=k)
   { break}
}

  return res
  }

}
