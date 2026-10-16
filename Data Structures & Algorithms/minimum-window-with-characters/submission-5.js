class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s,t) {
    let low=0
    let high=0
    let arr1=new Array(256).fill(0)
    let arr2=new Array(256).fill(0)
    let start=0
    let maxLen=Infinity
    for(let i=0;i<t.length;i++)
    {
        arr2[t.charCodeAt(i)]++
    }

    while(high<s.length)
    {
        arr1[s.charCodeAt(high)]++
        while(this.isSubString(arr1,arr2))
        {
            let len=high-low+1
            if(len<maxLen)
            {
                maxLen=len
                start=low
            }
            arr1[s.charCodeAt(low)]--
            low++
        }
        high++
    }
return maxLen!=Infinity?s.substring(start,start+maxLen):""
    }
isSubString(arr1,arr2)
{
    for(let i=0;i<arr1.length;i++)
    {
        if(arr2[i]>arr1[i])
        {
            return false
        }
    }
    return true
}

}
