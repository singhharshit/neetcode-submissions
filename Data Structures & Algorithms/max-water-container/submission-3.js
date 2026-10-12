class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0
        let right=heights.length-1
        let maxArr=0
        while(left<right)
        {
            let area=(Math.min(heights[left],heights[right])) * Math.abs(right-left)
            maxArr=Math.max(maxArr,area)
            if(heights[left]>heights[right])
            {
                right--
            }
            else{
                left++
            }

        }
return maxArr
        
    }
}
