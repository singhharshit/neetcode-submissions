class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let currentStr=""
        let curentNum=0
        let stack=[]
        for(let i=0;i<s.length;i++)
        {
            if(s[i]>=0 && s[i]<=9 )
            {
                let num=s[i];
                curentNum=(curentNum*10)+Number(num)
            }
            else if(s[i]==="[")
            {
                stack.push([currentStr,curentNum])
                currentStr=""
                curentNum=0
            }
            else if(s[i]==="]")
            {
                let [previousStr,previousNum]=stack.pop()
               currentStr=previousStr+currentStr.repeat(previousNum)
            }
            else{
                currentStr+=s[i]
            }
        }
        return currentStr
    }
}
