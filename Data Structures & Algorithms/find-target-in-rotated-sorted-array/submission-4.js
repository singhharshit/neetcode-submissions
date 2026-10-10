class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    // Find the minimum's index
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    let pivot = left;

    // Search the left sorted half
    if (pivot > 0 &&
        target >= nums[0] &&
        target <= nums[pivot - 1]) {
        return this.binary(nums, target, 0, pivot - 1);
    }

    // Search the right sorted half
    return this.binary(nums, target, pivot, nums.length - 1);
}

binary(nums, target, left, right) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
}
