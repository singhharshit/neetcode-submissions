class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
  let low=0
  let high=0
  if(s1.length>s2.length)
  {
    return false
  }
  while(high<s2.length)
  {
    let len=high-low+1
    if(len==s1.length)
    {
        if(this.checkPermutation(low,high,s1,s2))
        {
            return true
        }
    low++
    }
    high++
  }
return false
}

checkPermutation(low,high,s1,s2)
{
    let ns2=s2.slice(low,high+1)
    let arr=new Array(256).fill(0)
    for(let i=0;i<s1.length;i++)
    {
        arr[s1.charCodeAt(i)]++
        arr[ns2.charCodeAt(i)]--
    }
    return arr.every(el=>el==0)
}
}