class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        if(intervals.length==0)
        {
            return [newInterval]
        }
        let newInts=[]
        let insert=false
        for(let i=0;i<intervals.length;i++)
        {
            if(newInterval[0]<intervals[i][0] && insert==false)
            {
                newInts.push(newInterval)
                insert=true
            }
                newInts.push(intervals[i])  
        }
        if(insert==false)
        {
            newInts.push(newInterval)
        }
        newInts.sort((a,b)=>a[0]-b[0])
        console.log(newInts)
        let res=[]
        let start1=newInts[0][0]
        let end1=newInts[0][1]

        for(let i=0;i<newInts.length;i++)
        {
            let start2=newInts[i][0]
            let end2=newInts[i][1]
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
