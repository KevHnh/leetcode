/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let memo = new Array(nums.length + 1)

    memo[0] = 0
    memo[1] = nums[0]

    for (let i = 1; i < nums.length; i++) {
        memo[i + 1] = Math.max(memo[i], memo[i - 1] + nums[i]) 
    }

    return memo[memo.length - 1]
};