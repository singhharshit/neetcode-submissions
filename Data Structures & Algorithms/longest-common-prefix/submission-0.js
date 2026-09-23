class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.lenght===0)return
        if(strs.length===1) return strs[0]
        let prefixlen=strs[0].length;
       for(let i=0;i<strs.length;i++){
          let j=0
          while(j<strs[0].length && j<prefixlen && strs[0][j]==strs[i][j])
          {
                j++
          }
          prefixlen=j
       }
       let prefix=""
        for(let i=0;i<prefixlen;i++)
        {
            prefix+=strs[0][i]
        }
        return prefix
    }
}
