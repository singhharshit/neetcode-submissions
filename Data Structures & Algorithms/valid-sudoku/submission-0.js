class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let set1=new Set()
        let arr=new Array(9)
        for(let i=0;i<9;i++)
{
  arr[i]=new Set() 
  }

        for(let i=0;i<board.length;i++)
        {set1.clear()
            for(let j=0;j<board.length;j++)
            {
                if(board[i][j]!==".")
                {
                {if(set1.has(board[i][j]))
                    return false
                }
                set1.add(board[i][j])
                }
            }
        }
        
         for(let i=0;i<board.length;i++)
        {set1.clear()
            for(let j=0;j<board.length;j++)
            {
                if(board[j][i]!==".")
                {
                {if(set1.has(board[j][i]))
                    return false
                }
                set1.add(board[j][i])
                }
            }
        }
    for(let i=0;i<board.length;i++)
    {for(let j=0;j<board.length;j++)
        { if(board[i][j]!=="."){
            let sq=Math.floor(Math.floor(i/3)*3+Math.floor(j/3))
            let thatSet=arr[sq]
            if(thatSet!==undefined )
            {
                if(thatSet.has(board[i][j]))
                {
                return false
                }
                            thatSet.add(board[i][j])

            }
        }
        }
    
    }
    return true

    }
}
