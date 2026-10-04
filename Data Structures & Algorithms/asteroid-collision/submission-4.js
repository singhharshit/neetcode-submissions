class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let belt=[]
        for(let i=0;i<asteroids.length;i++)
        {
          while(belt.length>0 && asteroids[i]<0 && belt[belt.length-1]>0)
        {
            if(Math.abs(belt[belt.length-1]==Math.abs(asteroids[i])))
            {
                belt.pop()
                asteroids[i]=0
                break
            }
            else if(Math.abs(asteroids[i])>belt[belt.length-1])
            {
                belt.pop()
            }
            else{
                asteroids[i]=0
                break
            }
       }
       if(asteroids[i]!=0)
       {
        belt.push(asteroids[i])
       }
        }
        return belt
    }
}
