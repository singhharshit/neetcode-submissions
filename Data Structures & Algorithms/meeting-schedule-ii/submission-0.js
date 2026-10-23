/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if(intervals.length==0)
        {
            return 0
        }
        let start=[]
        let end=[]
        for(let i=0;i<intervals.length;i++)
        {
                start.push(intervals[i].start)
                end.push(intervals[i].end)
        }
        start.sort((a,b)=>a-b)
        end.sort((a,b)=>a-b)

        let i=0
        let j=0
        let res=0
        let rooms=0
        while(i<start.length && j<end.length)
        {
            if(start[i]<end[j])
            {
                rooms++
                res=Math.max(res,rooms)
                i++
            }
            else{
                rooms--
                j++
            }
        }
        return res
    }
}
