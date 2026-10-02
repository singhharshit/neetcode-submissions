class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {

        let res=[]      
        let closest=0
        let minDiff=Infinity
        arr.sort((a,b)=>a-b)
        for(let i=0;i<arr.length;i++)
        {
           let diff=Math.abs(x-arr[i])
           if(diff<minDiff)
           {
            minDiff=diff
            closest=i
           }
        }
        
        let left=closest-1
        let right=closest+1
        let i=0;
        res.push(arr[closest])
      while(i<k-1)
        {
            if((Math.abs(x-arr[left])<Math.abs(x-arr[right]))||((Math.abs(x-arr[left])==Math.abs(x-arr[right])) && arr[left] < arr[right]) || arr[right]==undefined )
            {
                res.push(arr[left])
                left--
            }
         else if((Math.abs(x-arr[left])>Math.abs(x-arr[right]))||((Math.abs(x-arr[left])==Math.abs(x-arr[right])) && arr[left] > arr[right]) || arr[left]==undefined )
          {
            res.push(arr[right])
            right++
          }
          if(res.length==k)
          {
           break
          }
          i++
        }

        return res.sort((a,b)=>a-b)
    }
}
