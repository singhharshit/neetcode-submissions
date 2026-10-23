class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
    let res=new Array(temperatures.length).fill(0)
    let st=[]
    for(let i=0;i<temperatures.length;i++)
    {
        while(st.length>0 && temperatures[st[st.length-1]]<temperatures[i])
        {
          let prevDay=st.pop()
          res[prevDay]=i-prevDay
        }
    
    st.push(i)
    }
            return res

    }
}
