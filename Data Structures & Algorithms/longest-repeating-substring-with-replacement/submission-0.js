class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        s=s.toLowerCase()
        let low=0
        let high=0
        let chars=new Array(26).fill(0)
        let res=-Infinity
        while(high<s.length)
        {
            chars[s.charCodeAt(high)-97]++
            let len=high-low+1
            let max=this.findMax(chars)
            let diff=len-max
            while(diff>k)
            {
            chars[s.charCodeAt(low)-97]--
                  low++
                  max=this.findMax(chars)
                  len=high-low+1
                  diff=len-max
            }
            len=high-low+1
            res=Math.max(len,res)
            high++
        }
return res
    }

    findMax(arr)
    {
        let max=-Infinity
        for(let i=0;i<arr.length;i++)
        {
            max=Math.max(max,arr[i])
        }
        return max
    }
}
