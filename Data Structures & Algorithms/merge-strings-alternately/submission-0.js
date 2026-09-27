class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let length=word1.length>word2.length?word2.length:word1.length
        let str="";
        for(let i=0;i<length;i++)
        {
            str+=word1[i]+word2[i]
        }
       str+=word1.length>word2.length?word1.slice(word2.length,word1.length):  word2.slice(word1.length,word2.length)
       return str
    }
  
}
