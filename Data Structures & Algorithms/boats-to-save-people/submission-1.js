class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
       let left=0
       let right=people.length-1
       let boats=0
       people.sort((a,b)=>a-b)
       while(left<=right)
       {

        if(people[right]+people[left]<=limit)
        {
            left++
        }
        right--
        boats++
       }
       return boats
    }
}
