class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
  lengthOfLongestSubstring(s) {
let set=new Set()
let low=0
let high=0
let maxLen=-Infinity
while(high<s.length)
{
    while(set.has(s[high]))
    {
        set.delete(s[low])
        low++
    }
    let len=high-low+1
    maxLen=Math.max(maxLen,len)
    set.add(s[high])
    high++
}
return maxLen!=-Infinity?maxLen:0
}
}
