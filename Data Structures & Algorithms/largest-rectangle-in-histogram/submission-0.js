class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
       let heightStack=[]
       let maxArea=0
        for(let i=0;i<=heights.length;i++)
        {
          let currentHeight=i===heights.length?0:heights[i]
          while(heightStack.length>0 && currentHeight<heights[heightStack[heightStack.length-1]])
          {
            let index=heightStack.pop()
            let lastbar=heightStack.length!=0?heightStack[heightStack.length-1]:-1
            let area=heights[index]*(i-lastbar-1)
            maxArea=Math.max(area,maxArea)
          }
          heightStack.push(i)
        }
        return maxArea
    }
}
