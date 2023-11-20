/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo = new Array(n + 1)

    memo[0] = 1
    memo[1] = 1

    for (let i = 1; i < n; i++) {
        memo[i + 1] = memo[i] + memo[i - 1]
    }

    return memo[memo.length - 1]
};