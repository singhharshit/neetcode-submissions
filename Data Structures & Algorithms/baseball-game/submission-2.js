class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let scores=[]

  for(let i=0;i<operations.length;i++)
        {
           if(operations[i]=="+")
           {if(scores.length>=2)
            {
            scores.push(parseInt(parseInt(scores[scores.length-1])+parseInt(scores[scores.length-2])))
            }
            else{
                i+=1
            }
            }
           else if(operations[i]=="D")
           {
            let lastScore=scores[scores.length-1]
            scores.push(lastScore*2)
           }
           else if(operations[i]=="C")
           { 
            scores.pop()
           }
           else{
            scores.push(operations[i])
           }
        }
        let totScore=0
        for(let i=0;i<scores.length;i++)
    {
        totScore+=parseInt(scores[i])
    }
    return totScore
    }
}
