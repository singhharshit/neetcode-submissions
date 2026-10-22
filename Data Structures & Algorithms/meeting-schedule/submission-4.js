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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if(intervals.length==0)
        {
            return true
        }
        intervals.sort((a,b)=>a.start-b.start)
        let start1=intervals[0].start
        let end1=intervals[0].end
        let possible=true
        for(let i=1;i<intervals.length;i++)
        {let  start2=intervals[i].start
        let end2=intervals[i].end
            if(end1>start2)
                {
                    possible =false
                    break
                }
        start1=start2
        end1=end2
        }
       return possible
    }

}
