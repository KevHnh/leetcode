/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    if (nums.length === 0) {
        return []
    }

    nums = nums.sort((a, b) => a - b)

    let dp = new Array(nums.length).fill(1)
    let max = 1

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && 1 + dp[j] > dp[i]) {
                dp[i] = dp[j] + 1

                max = Math.max(max, dp[i])
            }
        }
    }

    let prev = -1
    let ans = []

    for (let i = nums.length - 1; i >= 0; i--) {
        if (dp[i] === max && (prev % nums[i] === 0 || prev === - 1)) {
            ans.push(nums[i])
            max -= 1
            prev = nums[i]
        }
    }

    return ans
};