class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
     let st=[]
     let maxArea=0
     for(let i=0;i<=heights.length;i++)
     {
        let current=i==heights.length?0:heights[i]
        while(st.length>0 && current<heights[st[st.length-1]])
        {
            let width=heights[st.pop()]
            let pse=st.length!=0?st[st.length-1]:-1
            let nse=i
            let area=width*(nse-pse-1)
            maxArea=Math.max(area,maxArea)
        }
        st.push(i)
     }
     return maxArea
    }
}
