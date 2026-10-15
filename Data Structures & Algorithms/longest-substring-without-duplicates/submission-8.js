class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
  lengthOfLongestSubstring(s) {
  let set=new Set()
  let maxLen=-Infinity
    let low=0
    let high=0
    while(high<s.length)
    {
        while(set.has(s[high]))
        {
            set.delete(s[low])
            low++
        }
        set.add(s[high])
        let len=high-low+1
        maxLen=Math.max(len,maxLen)
        high++
    }
return maxLen!== -Infinity?maxLen:0
  }
}
