/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    nums = new Int32Array(nums).sort();

    let max = 1, window = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] == nums[i]) continue;
        
        window = nums[i - 1] + 1 === nums[i] ? window + 1 : 1;
        max = Math.max(window, max);
    }

    return max;
};