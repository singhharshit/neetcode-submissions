class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const evalStack=[]
        let val=0
        for(let i=0;i<tokens.length;i++)
        {
            if(tokens[i]=="+")
            {
                if(evalStack.length<2)
                {
                    return undefined
                }
                else{
                   val= evalStack[evalStack.length-1]+ evalStack[evalStack.length-2]
                   evalStack.pop()
                   evalStack.pop()
                   evalStack.push(val)
                }
            }

           else if(tokens[i]=="-")
            {
                if(evalStack.length<2)
                {
                    return undefined
                }
                else{
                  val=evalStack[evalStack.length-2] - evalStack[evalStack.length-1]
                  evalStack.pop()
                  evalStack.pop()
                  evalStack.push(val)
                }
            }

           else if(tokens[i]=="/")
            {
                if(evalStack.length<2)
                {
                    return undefined
                }
                else{
                   val=Math.trunc((evalStack[evalStack.length-2])/(evalStack[evalStack.length-1]))
                   evalStack.pop()
                   evalStack.pop()
                    evalStack.push(val)
                }
            }

             else if(tokens[i]=="*")
            {
                if(evalStack.length<2)
                {
                    return undefined
                }
                else{
                    val=evalStack[evalStack.length-1]* evalStack[evalStack.length-2]
                    evalStack.pop()
                    evalStack.pop()
                    evalStack.push(val)
                }
            }
            else{
                evalStack.push(parseInt(tokens[i]))
            }

        }
        
return evalStack[evalStack.length-1]

    }
}
