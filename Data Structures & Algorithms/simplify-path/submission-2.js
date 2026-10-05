class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
 simplifyPath(path) {
  let pathStack=[]
  if(path[0]!="/"){return "/"}
path=path.replaceAll("///","//")
  path=path.replaceAll("//","/")
let pathArray=path.split("/")

  for(let i=0;i<pathArray.length;i++)
  { 
    if(pathStack.length==0)
    {
      pathStack.push(pathArray[i])
    }
    else{

      if(pathArray[i]==="..")
      {
        if(pathStack.length!=1)
        {
        pathStack.pop()
        }
        pathArray[i]=""
      }
      else if(pathArray[i]===".")
      {
        pathArray[i]=""
      }
       else if((pathArray[i]==" "||pathArray[i]=="") && i!=1)
    {
      pathArray[i]=""
    } 
      else{
        pathStack.push(pathArray[i])
      }
      
    }
 
  }
  if(pathStack.length===1 && pathStack[0]==="")
  {
    return "/"
  }
 return pathStack.join("/")
}
}
