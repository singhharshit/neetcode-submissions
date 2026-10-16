class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
         if (nums.length <= 1) {
        return nums;
    }

        let mid=Math.floor((nums.length)/2)
        let left=this.sortArray(nums.slice(0,mid))
        let right=this.sortArray(nums.slice(mid))
        return this.merge(left,right)
    }

    merge(left,right)
    {   let i=0
        let j=0
        let res=[]
        while(i<left.length && j<right.length)
        {
            if(left[i]<=right[j])
            {
                res.push(left[i])
                i++
            }
            else
            {
                res.push(right[j])
                j++
            }
        }
        while(j<right.length)
        {
            res.push(right[j])
            j++
        }
        while(i<left.length)
        {
            res.push(left[i])
            i++
        }
return res
    }
}
