class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let maxDiff=Infinity
        let closest=0
        let res=[]
        for(let i=0;i<arr.length;i++)
        {
           let diff=Math.abs(arr[i]-x)
           if(diff<maxDiff)
           {    
            maxDiff=diff
            closest=i
           }
        }
        let left = closest-1
        let right=closest+1
        res.push(arr[closest])
        while(res.length<k)
        {
            if((Math.abs(x-arr[left])<Math.abs(x-arr[right]))||((Math.abs(x-arr[left])==Math.abs(x-arr[right])) && arr[left]<arr[right])||arr[right]==undefined )

            {
                res.push(arr[left])
                left--
            }
 else  if((Math.abs(x-arr[left])>Math.abs(x-arr[right]))||((Math.abs(x-arr[left])==Math.abs(x-arr[right])) && arr[left]>arr[right])||arr[left]==undefined )

            {
                res.push(arr[right])
                right++
            }

        }
        return res.sort((a,b)=>a-b)
    }
}
