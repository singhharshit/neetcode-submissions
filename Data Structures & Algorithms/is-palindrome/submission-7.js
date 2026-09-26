class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         s=s.toLowerCase()
  for(let char=0;char<s.length;char++)
        {
          console.log(s[char],s.charCodeAt(char))
         if(!(s.charCodeAt(char)>=97 && s.charCodeAt(char)<=122) && (!((s.charCodeAt(char)>=48) && s.charCodeAt(char)<=57))){
           console.log(s[char])
            s=s.replace(s[char],' ')
         }
        }
      s=s.replaceAll(' ','')
  console.log(s)
        
  console.log(s)
        for(let i=0;i<(s.length/2);i++)
        {
            let j=s.length-1-i
             if(s[i]!==s[j]){return false}
        }

return true
    }
}
