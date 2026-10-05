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
    if(pathArray[i]===""||pathArray[i]===".")
    {continue}
    if(pathArray[i]=="..")
    {
        if(pathStack.length>0)
        {
            pathStack.pop() 
            pathArray[i]=""    
        }
 
  }
  else{
         pathStack.push(pathArray[i])
        }
}
 return "/"+pathStack.join("/")
}}
