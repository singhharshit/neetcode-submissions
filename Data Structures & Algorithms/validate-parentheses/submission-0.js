class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack=[]
        for(let char of s)
        {
            if(char==="["||char==="{"||char==="(")
            {
                stack.push(char)
            }
            else{
                let last=stack[stack.length-1]
                if(last==='[' && char==="]" || last ==="(" && char===")" ||
                last ==="{" && char==="}")
                {stack.pop()}
                else{
                    return false
                }
            }
      
        }
         if(stack.length===0)
         {
            return true
         }
         return false
    }
}
