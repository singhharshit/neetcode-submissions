class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(intervals.length==0)
        {
            return 0
        }
        intervals.sort((a,b)=>a[0]-b[0])
        let res=[]
        let start1=intervals[0][0]
        let end1=intervals[0][1]
        for(let i=1;i<intervals.length;i++)
        {
            let start2=intervals[i][0]
            let end2=intervals[i][1]

            if(start2<=end1)
            {
                start1=start1
                end1=Math.max(end1,end2)
                continue
            }
            res.push([start1,end1])
            start1=start2
            end1=end2
        }

        res.push([start1,end1])
return res
    }
}
