/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    function helper(arr) {
        let memo = new Array(arr.length + 1)

        memo[0] = 0
        memo[1] = arr[0]

        for (let i = 1; i < arr.length; i++) {
            memo[i + 1] = Math.max(memo[i], memo[i - 1] + arr[i])
        }

        return memo[memo.length - 1]
    }

    let case1 = nums.slice(1)
    let case2 = nums.slice(0, nums.length - 1)

    return Math.max(helper(case1), helper(case2)) || nums[0]
};