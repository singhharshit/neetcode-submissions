class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(destination,position, speed) {
        let cars=position.map((pos,i)=>
        {
        return [pos,speed[i]]
        }
        )
   cars.sort((a,b)=>b[0]-a[0])
let fleetStack=[0]
   for(let [post,speed] of cars) {
  let time=(destination-post)/speed
  if(fleetStack[fleetStack.length-1]<time)
    {
        fleetStack.push(time)  
    }
   }
 return fleetStack.length-1
}



    }
