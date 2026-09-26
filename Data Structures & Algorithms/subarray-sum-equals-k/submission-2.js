class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;
    let sum = 0;

    let map = new Map();

    map.set(0, 1);

    for (let num of nums) {
        sum += num;

        let required = sum - k;

        if (map.has(required)) {
            count += map.get(required);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}
}
