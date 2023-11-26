/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curr = 0
    let max = nums[0]

    for (let i = 0; i < nums.length; i++) {
        if (curr < 0) {
            curr = 0
        }

        curr += nums[i]
        max = Math.max(max, curr)
    }

    return max
};