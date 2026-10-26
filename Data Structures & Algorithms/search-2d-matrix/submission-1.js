class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let low=0
        if(matrix[0].length==0)
        {
            return -1
        }
        let cols=matrix[0].length
        let high=(cols * matrix.length)-1
        while(low<=high)

        {
            let guess=Math.floor((low+high)/2)
            let row=Math.floor(guess/cols)
            let col=Math.floor(guess%cols)
            console.log('guess',guess)
            console.log(row,col)
            if(matrix[row][col]==target)
            {
                return true
            }
            else if(matrix[row][col]>target)
            {
                high=guess-1
            }
            else{
                low=guess+1
            }
        }
    return false
    }
}
