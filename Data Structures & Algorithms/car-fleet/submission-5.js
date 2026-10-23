class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
      let road=[]
      let i=0
      while(i<position.length)
      {
        road.push([position[i],speed[i]])
      i++
      }
    road.sort((a,b)=>b[0]-a[0])
    let st=[]
    st.push(Math.abs((target-road[0][0])/road[0][1]))
    for (let i=1;i<road.length;i++)
    {
        let time=Math.abs((target-road[i][0])/road[i][1])
        if(time>st[st.length-1])
        {
            st.push(time)
        }
    }
    return st.length
    }
}
