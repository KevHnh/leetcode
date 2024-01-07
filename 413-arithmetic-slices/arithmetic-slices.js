/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    let dp = new Array(nums.length).fill(0)
    let ans = 0

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === nums[i + 1] - nums[i]) {
            dp[i] = 1 + dp[i - 1]
            ans += dp[i]
        }
    }

    return ans
};