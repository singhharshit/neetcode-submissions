class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let low=0
        let high=numbers.length-1
        while(low<high)
        {
            if(target-numbers[low]===numbers[high])
            {
                return [low+1,high+1]
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
