class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let left=0
        let right=x
        let ans=0
        while (left<=right)
        {
            let mid =Math.floor((left+right)/2)
            if(mid*mid==x)
            {
                return mid
            }
            else if(mid*mid>x)
            {
                right=mid-1
            }
            else if(mid*mid<x)
            {
                left=mid+1
                ans=mid
            }
        }
return ans
    }
}
