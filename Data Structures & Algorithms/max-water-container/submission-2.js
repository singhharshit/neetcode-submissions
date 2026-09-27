class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i=0
        let j=heights.length-1
        let maxArr=0
        while(i<j)
        {

            let area=((j-i)*Math.min(heights[i],heights[j]))
            maxArr=Math.max(area,maxArr)
            if(heights[i]<heights[j])
            {
                i++
            }
            else
            {
                j--
            }
        }
        
return maxArr
    }
}
