class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
  reverseString(s) {
  let j=s.length-1    
  for(let i=0;i<s.length;i++)
        {
          if(j<Math.floor(s.length/2))
          {break}
          [s[i],s[j]]=[s[j],s[i]]
         j--
        }
  return s
    }
}
