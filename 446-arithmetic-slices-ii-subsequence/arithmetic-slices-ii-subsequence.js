/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let n = nums.length
    let ans = 0
    let dp = new Array(n)
    
    for (let i = 0; i < n; i++) {
        dp[i] = {}
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let diff = nums[i] - nums[j]
            let countJ = dp[j][diff] || 0
            let countI = dp[i][diff] || 0
            ans += countJ
            dp[i][diff] = countJ + countI + 1
        }
    }

    return ans
};