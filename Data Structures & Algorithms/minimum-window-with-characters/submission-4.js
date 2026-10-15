class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s,t) {
       let low=0
       let high=0
       let req=new Array(256).fill(0)
       let curr=new Array(256).fill(0)
       let start=0
       let res=Infinity   
    for(let i=0;i<t.length;i++)
    {
        req[t.charCodeAt(i)]++
    }

    while(high<s.length)
    {
        curr[s.charCodeAt(high)]++
        while(this.isSubString(req,curr))
        {
            let len=high-low+1
           if(len<res)
           {
            res=len
            start=low
           }
            curr[s.charCodeAt(low)]--
            low++
        }
        high++
    }
    return res!=Infinity?s.substring(start,start+res):""
}

isSubString(req,curr)
{
    for(let i=0;i<req.length;i++)
    {
       if(curr[i]<req[i])
       {
        return false
       }
    }
    return true
}
}
