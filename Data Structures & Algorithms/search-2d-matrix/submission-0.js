class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
   
searchMatrix(matrix, target) {
        let left=0
        let right=matrix.length-1
        let lastEl=matrix[0].length-1
        while(left<=right)
        {   let mid=Math.trunc((left+right)/2)
           if(matrix[mid][0]<=target && matrix[mid][matrix[mid].length-1]>=target)
             { 
            let left2=0
            let right2=lastEl
            
            while(left2<=right2)
              { 
                let mid2=Math.trunc((left2+right2)/2)
                if(matrix[mid][mid2]===target)
                {  
                    return true
                }
                else if(matrix[mid][mid2]>target)
                {
                    right2=mid2-1
                }
                else if(matrix[mid][mid2]<target){
                    left2=mid2+1
                }

            }
            break
           }
           else if(matrix[mid][0]>target)
           {
            right=mid-1
           }
           else if(matrix[mid][lastEl]<target)
           {
            left=mid+1
           }
        }
        return false
    }

}
