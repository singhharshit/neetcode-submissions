class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let low=0
        let high=numbers.length-1
        let res=[]
        while(low<high)
        {
            if(target-numbers[low]===numbers[high])
            {
                res.push(low+1)
                res.push(high+1)
                return res
            }
            else if(target-numbers[low]>numbers[high])
            {
                low++
            }
            else{
                high--
            }
           
        }
    }
}
