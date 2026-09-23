class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         let map=new Map()
    for(let str of strs){
       
        let keyArr=new Array(26).fill(0)
        for(let i=0;i<str.length;i++)
        {
            keyArr[str.charCodeAt(i)-97]++
        }

        keyArr=keyArr.join('#')

        if(!map.has(keyArr)){
            map.set(keyArr,[])
        }
        map.get(keyArr).push(str)
    }
    return Array.from(map.values())
    }
}
