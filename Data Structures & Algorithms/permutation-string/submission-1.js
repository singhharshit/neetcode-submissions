class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
      let low=0
      let high=0
      while(high<s2.length)
      {
        let len=high-low+1
        if(len==s1.length)
        {
            if(this.checkPermuatation(high,low,s1,s2))
            {
                return true
            } 
             low++ 
        }
        high++
      }
      return false
    }

checkPermuatation(high,low,s1,s2)
{
    let ns2=s2.substring(low,high+1)
    let count=new Array(26).fill(0)
    for(let i=0;i<ns2.length;i++)
    {
       count[s1.charCodeAt(i)-97]++
        count[ns2.charCodeAt(i)-97]--
    }
    return count.every((el)=>el==0)
}

}
