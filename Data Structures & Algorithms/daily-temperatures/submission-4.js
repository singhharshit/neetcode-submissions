class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
    let res=new Array(temperatures.length).fill(0)
    let st=[]
    st.push(temperatures.length-1)
    for(let i=temperatures.length-2;i>=0;i--)
    {
        while(st.length>0 && temperatures[st[st.length-1]]<=temperatures[i])
        {
            st.pop()
        }
        if(st.length==0)
        {
            res[i]=0
        }
        else{
            res[i]=Math.abs(st[st.length-1]-i)
        }
        st.push(i)
    }
    return res
    }
}
