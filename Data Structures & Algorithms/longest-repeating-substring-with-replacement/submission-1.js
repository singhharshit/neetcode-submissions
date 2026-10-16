class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    s=s.toLowerCase()
    let chars=new Array(256).fill(0)
    let low=0
    let high=0
    let maxLen=-Infinity
    while(high<s.length)
    {
        chars[s.charCodeAt(high)]++
        let len=high-low+1
        let major=this.findMajor(chars)
        let diff=len-major
        while(diff>k)
        {
            chars[s.charCodeAt(low)]--
            low++
            major=this.findMajor(chars)
            len=high-low+1
            diff=len-major
        }
    len=high-low+1
    maxLen=Math.max(maxLen,len)
    high++
    }
return maxLen!=-Infinity?maxLen:0
    }

findMajor(chars)
{
    let max=-Infinity
   for(let i=0;i<chars.length;i++)
   {
    max=Math.max(max,chars[i])
   }
   return max
}

}

